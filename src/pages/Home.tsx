import { Link } from "react-router-dom";

type Topic = {
  title: string;
  path: string;
  description: string;
};

const topics: Topic[] = [
  {
    title: "Android",
    path: "/android",
    description: "Jetpack, Compose, MVVM, Clean Architecture",
  },
  {
    title: "Java",
    path: "/java",
    description: "Core Java, OOP, Collections, Multithreading",
  },
  {
    title: "Spring",
    path: "/spring",
    description: "Dependency Injection, AOP, Spring Core",
  },
  {
    title: "Spring Boot",
    path: "/spring-boot",
    description: "REST APIs, JPA, Security, Microservices",
  },
  {
    title: "JavaScript",
    path: "/javascript",
    description: "ES6+, Async, DOM, Web fundamentals",
  },
  {
    title: "React",
    path: "/react",
    description: "Hooks, Routing, State Management",
  },
  {
    title: "Python",
    path: "/python",
    description: "Basics, Automation, Problem Solving",
  },
  {
    title: "Sanskrit",
    path: "/sanskrit",
    description: "Sounds, small words, simple sentences",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-10">
      {/* Profile Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Babasaheb Kothawale
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Technical Lead
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Android | Java | Kotlin | Spring Boot | JavaScript | React
        </p>
      </div>

      {/* Topics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {topics.map((topic) => (
          <Link
            key={topic.path}
            to={topic.path}
            className="group bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600">
              {topic.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {topic.description}
            </p>
            <span className="inline-block mt-4 text-blue-600 text-sm font-medium">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

