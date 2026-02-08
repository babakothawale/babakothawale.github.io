type QA = {
    question: string;
    answer: string;
  };
  
  type Props = {
    title: string;
    subtitle?: string;
    data: QA[];
  };
  
  export default function InterviewCards({ title, subtitle, data }: Props) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
  
          {subtitle && (
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {data.map((qa, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Q{index + 1}. {qa.question}
                </h2>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  {qa.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  