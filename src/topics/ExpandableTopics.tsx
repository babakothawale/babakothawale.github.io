import React, { useState } from "react";

// Sample topics data
const topics = [
  {
    id: 1,
    title: "Topic 1",
    details: "Details about Topic 1",
    chapters: [
      { id: 1, title: "Chapter 1", content: "Content for Chapter 1" },
      { id: 2, title: "Chapter 2", content: "Content for Chapter 2" },
    ],
  },
  {
    id: 2,
    title: "Topic 2",
    details: "Details about Topic 2",
    chapters: [
      { id: 1, title: "Chapter 1", content: "Content for Chapter 1" },
      { id: 2, title: "Chapter 2", content: "Content for Chapter 2" },
      { id: 3, title: "Chapter 3", content: "Content for Chapter 3" },
    ],
  },
];

const ExpandableTopics = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [selectedChapterId, setSelectedChapterId] = useState(null);

  const toggleTopic = (id) => {
    setSelectedTopicId((prev) => (prev === id ? null : id));
    setSelectedChapterId(null); // Reset chapter details when topic changes
  };

  const toggleChapter = (id) => {
    setSelectedChapterId((prev) => (prev === id ? null : id));
  };

  // Find the selected topic and chapter
  const selectedTopic = topics.find((topic) => topic.id === selectedTopicId);
  const selectedChapter = selectedTopic
    ? selectedTopic.chapters.find((chapter) => chapter.id === selectedChapterId)
    : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
      {/* Left Panel - List of Topics */}
      <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Topics</h2>
        {topics.map((topic) => (
          <div key={topic.id} className="mb-4">
            <button
              onClick={() => toggleTopic(topic.id)}
              className="w-full text-left p-3 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {topic.title}
            </button>

            {/* Chapters of the selected topic */}
            {selectedTopicId === topic.id && (
              <div className="pl-4 mt-2 space-y-2">
                {topic.chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full text-left p-2 bg-gray-300 rounded-md hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                  >
                    {chapter.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Panel - Chapter Details */}
      <div className="col-span-2 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Chapter Details</h2>
        {selectedChapter ? (
          <div>
            <h3 className="text-lg font-semibold">{selectedChapter.title}</h3>
            <p className="mt-2">{selectedChapter.content}</p>
          </div>
        ) : (
          <p>Select a chapter to view details.</p>
        )}
      </div>
    </div>
  );
};

export default ExpandableTopics;
