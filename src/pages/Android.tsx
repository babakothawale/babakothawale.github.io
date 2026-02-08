import { Link } from "react-router-dom";
import InterviewCards from "../components/InterviewCards";
import { androidInterviewQA } from "../data/androidInterview";

export default function Android() {
  return (
    <>
      <div className="px-6 pt-6">
        <Link to="/" className="text-blue-600 dark:text-blue-400 text-sm font-medium">
          ⬅ Home
        </Link>
      </div>

      <InterviewCards
        title="🤖 Android Interview Questions"
        subtitle="Important Android concepts for interviews"
        data={androidInterviewQA}
      />
    </>
  );
}
