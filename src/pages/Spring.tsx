import { Link } from "react-router-dom";
import InterviewCards from "../components/InterviewCards";
import { springInterviewQA } from "../data/springInterview";


export default function Android() {
  return (
    <>
      <div className="px-6 pt-6">
        <Link to="/" className="text-blue-600 dark:text-blue-400 text-sm font-medium">
          ⬅ Home
        </Link>
      </div>

      <InterviewCards
        title="🌱 Spring Interview Questions"
        subtitle="Core Spring concepts explained simply"
        data={springInterviewQA}
      />

    </>
  );
}
