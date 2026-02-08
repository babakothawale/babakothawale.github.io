import { Link } from "react-router-dom";
import InterviewCards from "../components/InterviewCards";
import { pythonInterviewQA } from "../data/pythonInterview";

export default function Python() {
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
        title="🐍 Python Interview Questions"
        subtitle="Common Python interview questions with simple explanations"
        data={pythonInterviewQA}
      />
    </>
  );
}
