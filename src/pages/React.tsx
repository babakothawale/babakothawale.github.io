import { Link } from "react-router-dom";
import InterviewCards from "../components/InterviewCards";
import { reactInterviewQA } from "../data/reactInterview";

export default function ReactPage() {
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
        title="⚛️ React Interview Questions"
        subtitle="Most asked React interview questions with simple answers"
        data={reactInterviewQA}
      />
    </>
  );
}
