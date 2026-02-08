import { Link } from "react-router-dom";
import InterviewCards from "../components/InterviewCards";
import { javaInterviewQA } from "../data/javaInterview";

export default function JavaScript() {
  return (
    <>
      <div className="px-6 pt-6">
        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 text-sm font-medium"
        >
          ⬅ Home
        </Link>
      </div>

      <InterviewCards
        title="☕ Java Interview Questions"
        subtitle="Frequently asked Java interview questions with simple answers"
        data={javaInterviewQA}
      />
    </>
  );
}
