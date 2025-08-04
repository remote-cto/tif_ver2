//api/register/route.ts

import { NextRequest, NextResponse } from "next/server";
import emailService from "@/lib/email";
import verificationService from "@/lib/verification";
import studentService from "@/lib/studentService";
import validationUtils, { StudentRegistrationData } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = body as StudentRegistrationData;

    // Validate input data (should include password)
    const validatedInput = validationUtils.validateRegistrationData(data);
    if (!validatedInput.isValid) {
      return NextResponse.json(
        { error: validatedInput.errors[0] },
        { status: 400 }
      );
    }

    // Validate student data against DB and get foreign keys
    const studentValidation = await studentService.validateStudentData(data);
    if (!studentValidation.isValid) {
      return NextResponse.json(
        {
          error: studentValidation.errors[0],
        },
        {
          status: studentValidation.errors[0].includes("exists") ? 409 : 400,
        }
      );
    }

    // Generate verification code
    const verificationCode = verificationService.generateCode();

    // Store verification code + data, including password as plain text (not recommended!)
    verificationService.storeCode(data.email, verificationCode, {
      ...data,
      password: data.password, // just store as given
      org_id: studentValidation.orgId,
      tenant_id: studentValidation.tenantId,
      user_type_id: studentValidation.userTypeId,
    });

    // Send verification email
    await emailService.sendVerificationEmail(data.email, data.name, verificationCode);

    return NextResponse.json({
      message: "Verification code sent to your email",
      success: true,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, verificationCode } = body;

    if (!email || !verificationCode) {
      return NextResponse.json(
        { error: "Email and verification code are required" },
        { status: 400 }
      );
    }

    // Validate code
    if (!verificationService.isCodeValid(email, verificationCode)) {
      return NextResponse.json(
        { error: "Invalid or expired verification code" },
        { status: 400 }
      );
    }

    // Get stored data for this email (contains plain password)
    const storedData = verificationService.getStoredData(email);
    if (!storedData) {
      return NextResponse.json(
        { error: "Verification data not found" },
        { status: 400 }
      );
    }

    // Create academic_user record in DB, password as received
    const createdUser = await studentService.createAcademicUser(storedData.data);

    // Delete code from memory after success
    verificationService.deleteCode(email);

    return NextResponse.json({
      message: "Registration successful! Welcome to XWORKS.",
      success: true,
      student: createdUser,
    });
  } catch (error: unknown) {
    console.error("Verification error:", error);
    if (
      error instanceof Error &&
      error.message.includes("duplicate key")
    ) {
      return NextResponse.json(
        { error: "Email or registration number already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    // Check pending verification for email
    const storedData = verificationService.getStoredData(email);
    if (!storedData) {
      return NextResponse.json(
        { error: "No pending verification for this email" },
        { status: 400 }
      );
    }

    // Generate new code and update
    const newCode = verificationService.generateCode();
    verificationService.updateCode(email, newCode);

    // Send resend verification email
    await emailService.sendResendVerificationEmail(
      email,
      storedData.data.name,
      newCode
    );

    return NextResponse.json({
      message: "New verification code sent to your email",
      success: true,
    });
  } catch (error) {
    console.error("Resend verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
