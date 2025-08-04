"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import AssessmentResult from "../components/AssessmentResult";

interface Student {
  id: number;
  name: string;
  registration_number: string;
  email: string;
  assessments?: {
    id: number;
    readiness_score?: number;
    foundational_assessment?: number;
    industrial_assessment?: number;
    attempted_at: string;
    status?: string;
  }[];
  topicScores?: {
    topic_id: number;
    topic_name: string;
    correct_answers: number;
    total_questions: number;
    weighted_score: number;
    normalized_score: number;
    classification: string;
  }[];
}

interface Admin {
  id?: number;
  name?: string;
  org_id?: number;
  email?: string;
  org_name?: string;
}

interface College {
  id: number;
  name: string;
}

interface DetailedStudentData {
  student: {
    id: number;
    name: string;
    email: string;
    registration_number: string;
  };
  assessments: {
    id: number;
    score: number;
    total_questions: number;
    score_percent: number;
    attempted_at: string;
    total_score?: number;
    readiness_score?: number;
    foundational_score?: number;
    industrial_score?: number;
    status?: string;
  }[];
  topicScores: {
    topic_id: number;
    topic_name: string;
    correct_answers: number;
    total_questions: number;
    weighted_score: number;
    normalized_score: number;
    classification: string;
  }[];
}

function getAdminFromCookie(): Admin | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("adminSession="));
  if (!match) return null;
  try {
    const value = decodeURIComponent(match.split("=")[1]);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

const DeanDashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [admin, setAdmin] = useState<Admin>({});
  const [college, setCollege] = useState<College | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [detailedStudentData, setDetailedStudentData] = useState<DetailedStudentData | null>(null);
  const [loadingReport, setLoadingReport] = useState<boolean>(false);
  const [reportError, setReportError] = useState<string>("");

  useEffect(() => {
    const adminInfo = getAdminFromCookie();
    if (!adminInfo || !adminInfo.org_id) {
      setError("Invalid session. Please log in again.");
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/login";
      }, 1200);
      return;
    }
    setAdmin(adminInfo);

    const fetchData = async () => {
      try {
        const collegeRes = await fetch(
          `/api/college-info?college_id=${adminInfo.org_id}`
        );
        if (!collegeRes.ok) throw new Error("Failed to fetch college info");
        const collegeData = await collegeRes.json();
        setCollege(collegeData.college);

        const studentsRes = await fetch(
          `/api/college-students?college_id=${adminInfo.org_id}`
        );
        if (!studentsRes.ok) throw new Error("Failed to fetch students");
        const studentsData = await studentsRes.json();
        setStudents(studentsData.students || []);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        console.error("Error loading dean-dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const fetchDetailedReport = async (student: Student) => {
    setLoadingReport(true);
    setReportError("");
    
    try {
      // Fetch detailed student assessment data
      const response = await fetch(`/api/student-detailed-report?student_id=${student.id}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch detailed report");
      }
      
      const data = await response.json();
      
      // Transform the data to match AssessmentResult component expectations
      const detailedData: DetailedStudentData = {
        student: {
          id: student.id,
          name: student.name,
          email: student.email,
          registration_number: student.registration_number,
        },
        assessments: data.assessments || [],
        topicScores: data.topicScores || [],
      };
      
      setDetailedStudentData(detailedData);
    } catch (err) {
      console.error("Error fetching detailed report:", err);
      setReportError("Failed to load detailed report. Please try again.");
    } finally {
      setLoadingReport(false);
    }
  };

  const handleViewReport = async (student: Student) => {
    setSelectedStudent(student);
    setIsPopupOpen(true);
    setDetailedStudentData(null);
    await fetchDetailedReport(student);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/college-login", { method: "DELETE" });
    } catch {}
    window.location.href = "/login";
  };

  const getRecommendationText = (topic: string): string => {
    const map: Record<string, string> = {
      Python: "Practice basic Python syntax and build small CLI apps.",
      Math: "Brush up on linear algebra, stats, and derivatives.",
      Projects: "Work on hands-on mini-projects to apply concepts.",
      "Cloud & Deployment": "Try deploying apps to AWS/GCP.",
      "ML Concepts": "Study supervised/unsupervised algorithms.",
      "Tools & Git": "Learn Git basics with real collaborative projects.",
      "AI Use Cases": "Explore real-world applications and case studies.",
      "Modern AI Stack Awareness":
        "Understand tools like LangChain, Vector DBs, and inference APIs.",
    };
    return map[topic] || "Practice and deepen understanding of this topic.";
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen text-center text-red-600 p-5">{error}</div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">🎓 XWORKS- TIF DASHBOARD</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </header>

        <div className="bg-blue-50 p-4 rounded-md mb-6 grid grid-cols-2 gap-6 text-center md:text-left">
          <div>
            <span className="text-sm uppercase tracking-wide text-blue-700">
              Admin Name
            </span>
            <p className="text-xl font-semibold">{admin.name ?? "N/A"}</p>
          </div>
          <div>
            <span className="text-sm uppercase tracking-wide text-blue-700">
              College Name
            </span>
            <p className="text-xl font-semibold">
              {college ? college.name : "Loading..."}
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Students Performance</h2>

        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <table className="w-full table-auto border border-gray-300 rounded-lg bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left border-b border-gray-300">
                  Student
                </th>
                <th className="p-3 text-left border-b border-gray-300">
                  Registration No.
                </th>
                <th className="p-3 text-left border-b border-gray-300">
                  Email
                </th>
                <th className="p-3 text-left border-b border-gray-300">
                  Readiness Score
                </th>
                <th className="p-3 text-left border-b border-gray-300">
                  Foundation Score
                </th>
                <th className="p-3 text-left border-b border-gray-300">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {students.map((stu) => {
                const readiness =
                  stu.assessments && stu.assessments.length > 0
                    ? stu.assessments[0].readiness_score
                    : null;

                const foundation =
                  stu.assessments && stu.assessments.length > 0
                    ? stu.assessments[0].foundational_assessment
                    : null;

                return (
                  <tr key={stu.id} className="hover:bg-gray-50 cursor-pointer">
                    <td className="p-3 border-b border-gray-300">{stu.name}</td>
                    <td className="p-3 border-b border-gray-300">
                      {stu.registration_number}
                    </td>
                    <td className="p-3 border-b border-gray-300">
                      {stu.email}
                    </td>

                    <td className="p-3 border-b border-gray-300">
                      {typeof readiness === "number" && !isNaN(readiness)
                        ? readiness.toFixed(2) + "%"
                        : "N/A"}
                    </td>

                    <td className="p-3 border-b border-gray-300">
                      {typeof foundation === "number" && !isNaN(foundation)
                        ? foundation.toFixed(2) + "%"
                        : "N/A"}
                    </td>

                    <td className="p-3 border-b border-gray-300">
                      <button
                        onClick={() => handleViewReport(stu)}
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        View Report
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {/* Enhanced Popup Modal with Full Assessment Report */}
        {isPopupOpen && selectedStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50 overflow-auto">
            <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto relative">
              <button
                onClick={() => {
                  setIsPopupOpen(false);
                  setSelectedStudent(null);
                  setDetailedStudentData(null);
                  setReportError("");
                }}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 z-10 bg-white shadow-md"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {loadingReport && (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-700">Loading detailed report...</p>
                  </div>
                </div>
              )}

              {reportError && (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center text-red-600">
                    <p className="text-lg font-semibold mb-4">Error Loading Report</p>
                    <p className="mb-4">{reportError}</p>
                    <button
                      onClick={() => fetchDetailedReport(selectedStudent)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              {!loadingReport && !reportError && detailedStudentData && (
                <div className="p-6">
                  <AssessmentResult
                    student={detailedStudentData.student}
                    assessments={detailedStudentData.assessments}
                    topicScores={detailedStudentData.topicScores}
                    getRecommendationText={getRecommendationText}
                  />
                </div>
              )}

              {!loadingReport && !reportError && !detailedStudentData && (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center text-gray-600">
                    <p className="text-lg">No assessment data available for this student.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeanDashboard;