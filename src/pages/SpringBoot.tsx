import { Link } from "react-router-dom";
import InterviewCards from "../components/InterviewCards";
import { springBootInterviewQA } from "../data/springBootInterview";

export default function SpringBoot() {
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
        title="Spring Boot Interview Questions"
        subtitle="Most asked Spring Boot questions with clear answers"
        data={springBootInterviewQA}
      />
    </>
  );
}
