// utils/getStudentData.ts

export function getStudentData(): {
  id: string;
  name: string;
  email: string;
  registration_number: string;
  college_name: string;
  org_id?: number;
} | null {
  if (typeof window !== "undefined") {
    try {
      // First, try to get from cookie
      const cookieValue = getCookie("studentSession");
      if (cookieValue) {
        const cookieData = JSON.parse(cookieValue);
        if (cookieData?.id) {
          return cookieData;
        }
      }
      
      // Fallback to sessionStorage for backward compatibility
      const sessionData = JSON.parse(sessionStorage.getItem("studentData") || "{}");
      return sessionData?.id ? sessionData : null;
    } catch {
      return null;
    }
  }
  return null;
}

// Helper function to get cookie by name
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

// Function to clear student session
export function clearStudentSession(): void {
  if (typeof window !== "undefined") {
    // Clear sessionStorage
    sessionStorage.removeItem("studentData");
    
    // Clear cookie by setting it to expire
    document.cookie = "studentSession=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}