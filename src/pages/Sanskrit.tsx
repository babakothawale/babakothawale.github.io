import { Link } from "react-router-dom";
import InterviewCards from "../components/InterviewCards";
import { sanskritInterviewQA } from "../data/sanskritInterview";

export default function Sanskrit() {
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
        title="🕉 Sanskrit Basics Q&A"
        subtitle="Learn Sanskrit step by step like a beginner"
        data={sanskritInterviewQA}
      />
    </>
  );
}
