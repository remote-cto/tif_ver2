//app/dashboard/assessment/page.tsx

"use client";
import React, { useState, useEffect } from "react";
import { XCircle, Clock } from "lucide-react";
import { getStudentData } from "@/utils/getStudentData";
import AssessmentResult from "../../components/AssessmentResult";

interface Question {
  id: string;
  topic: string;
  level: "Basic" | "Intermediate" | "Advanced";
  question: string;
  options: string[];
  correctAnswer: number;
  section: "Foundational" | "Industrial";
}

interface TopicScore {
  topic: string;
  correct: number;
  total: number;
  levels: {
    Basic: number;
    Intermediate: number;
    Advanced: number;
  };
  weighted_score: number;
  normalized_score: number;
  classification: string;
  recommendation?: string;
}

interface AssessmentResultTopicScore {
  topic_id: number;
  topic_name: string;
  correct_answers: number;
  total_questions: number;
  weighted_score: number;
  normalized_score: number;
  classification: string;
  recommendation?: string;
}

interface AssessmentResultData {
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
}

interface AssessmentState {
  currentQuestion: number;
  questions: Question[];
  answers: { [key: string]: number };
  isCompleted: boolean;
  timeStarted: number;
}

interface StudentData {
  id: string;
  name: string;
  email: string;
  registration_number?: string;
  org_id?: number;
  tenant_id?: number;
  user_type_id?: number;
}

interface BackendResponse {
  success: boolean;
  assessment_id: number;
  total_score: number;
  readiness_score: number;
  section_scores: {
    foundational: number | null;
    industrial: number | null;
  };
  topic_scores: TopicScore[];
}

const AssessmentPage: React.FC = () => {
  const [state, setState] = useState<AssessmentState>({
    currentQuestion: 0,
    questions: [],
    answers: {},
    isCompleted: false,
    timeStarted: Date.now(),
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [assessmentId, setAssessmentId] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [student, setStudent] = useState<StudentData | null>(null);

  const [backendResults, setBackendResults] = useState<BackendResponse | null>(
    null
  );

  // Initialize student data
  useEffect(() => {
    const studentData = getStudentData();
    if (studentData) {
      setStudent(studentData);
    }
  }, []);

  // Load questions
  useEffect(() => {
    fetch("/api/assessment")
      .then((res) => res.json())
      .then((data) => {
        setState((prev) => ({
          ...prev,
          questions: data.questions,
        }));
      })
      .catch((err) => console.error("Failed to fetch questions", err));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(Math.floor((Date.now() - state.timeStarted) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [state.timeStarted]);

  useEffect(() => {
    const saveResult = async () => {
      if (!student) return;

      setIsSaving(true);
      setSaveError(null);

      try {
        const response = await fetch("/api/save-score", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            academic_user_id: parseInt(student.id),
            tenant_id: student.tenant_id || 1,
            assessment_type_id: 1,
            answers: state.answers,
            questions: state.questions.map((q) => ({
              id: q.id,
              correctAnswer: q.correctAnswer,
              topic: q.topic,
              level: q.level,
              section: q.section,
            })),
            time_started: state.timeStarted,
            time_completed: Date.now(),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to save assessment");
        }

        const result: BackendResponse = await response.json();
        if (result.assessment_id) {
          setAssessmentId(result.assessment_id);
          setBackendResults(result);
        }
      } catch (error) {
        console.error("Error saving assessment:", error);
        setSaveError("Failed to save assessment. Please try again.");
      } finally {
        setIsSaving(false);
      }
    };

    if (state.isCompleted && !assessmentId && !isSaving && student) {
      saveResult();
    }
  }, [
    state.isCompleted,
    assessmentId,
    isSaving,
    student,
    state.answers,
    state.questions,
  ]);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = {
      ...state.answers,
      [state.questions[state.currentQuestion].id]: selectedAnswer,
    };

    if (state.currentQuestion < state.questions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers,
      }));
      setSelectedAnswer(null);
    } else {
      setState((prev) => ({
        ...prev,
        answers: newAnswers,
        isCompleted: true,
      }));
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const currentQuestion = state.questions[state.currentQuestion];

  if (!student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Loading student data...</p>
        </div>
      </div>
    );
  }

  if (state.isCompleted && (isSaving || (!assessmentId && !saveError))) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">
            Saving your assessment and generating your report...
          </p>
          <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
        </div>
      </div>
    );
  }

  if (state.isCompleted && saveError && !assessmentId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <XCircle className="w-16 h-16 mx-auto mb-2" />
            <p className="text-lg font-semibold">Save Failed</p>
          </div>
          <p className="text-gray-600 mb-4">{saveError}</p>
          <button
            onClick={() => {
              setSaveError(null);
              setState((prev) => ({ ...prev, isCompleted: false }));
              setTimeout(
                () => setState((prev) => ({ ...prev, isCompleted: true })),
                100
              );
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition mr-3"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  // Show results if assessment is completed and saved successfully
  if (state.isCompleted && assessmentId && backendResults) {
    // Calculate total correct answers for display
    const totalCorrectAnswers = backendResults.topic_scores.reduce(
      (sum, topic) => sum + topic.correct,
      0
    );
    const scorePercent = (totalCorrectAnswers / state.questions.length) * 100;

    const topicScoresForTemplate: AssessmentResultTopicScore[] =
      backendResults.topic_scores.map((topic, index) => ({
        topic_id: index + 1,
        topic_name: topic.topic,
        correct_answers: topic.correct,
        total_questions: topic.total,
        weighted_score: topic.weighted_score,
        normalized_score: topic.normalized_score,
        classification: topic.classification,
        recommendation: topic.recommendation, // Pass recommendation from backend
      }));

    const assessmentData: AssessmentResultData = {
      id: assessmentId,
      score: totalCorrectAnswers,
      total_questions: state.questions.length,
      score_percent: scorePercent,
      attempted_at: new Date(state.timeStarted).toISOString(),
      total_score: backendResults.total_score,
      readiness_score: backendResults.readiness_score,
      foundational_score:
        backendResults.section_scores.foundational ?? undefined,
      industrial_score: backendResults.section_scores.industrial ?? undefined,

      status: "completed",
    };

    const studentData = {
      id: parseInt(student.id) || 1,
      name: student.name,
      email: student.email,
      registration_number: student.registration_number || "N/A",
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <AssessmentResult
          student={studentData}
          assessments={[assessmentData]}
          topicScores={topicScoresForTemplate}
        />
      </div>
    );
  }

  if (state.questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-600">
                {currentQuestion.section} Section • {currentQuestion.topic}
              </p>
            </div>
            <div className="text-gray-600 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {formatTime(timeElapsed)}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>
                {state.currentQuestion + 1}/{state.questions.length}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all"
                style={{
                  width: `${
                    ((state.currentQuestion + 1) / state.questions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                currentQuestion.level === "Basic"
                  ? "bg-green-100 text-green-800"
                  : currentQuestion.level === "Intermediate"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {currentQuestion.level}
            </span>
            <span className="ml-3 text-gray-600">Difficulty Level</span>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {currentQuestion.question}
            </h2>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left border-2 p-4 rounded-xl transition ${
                    selectedAnswer === index
                      ? "border-blue-500 bg-blue-50 text-blue-800"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 mr-3 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.currentQuestion === state.questions.length - 1
                ? "Finish Assessment"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;
