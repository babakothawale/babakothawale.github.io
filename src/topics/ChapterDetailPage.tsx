import React from "react";
import { useParams } from "react-router-dom";

const topics = [
  {
    id: 1,
    title: "Topic 1",
    chapters: [
      { id: 1, title: "Chapter 1", content: "This is the content for Chapter 1" },
      { id: 2, title: "Chapter 2", content: "This is the content for Chapter 2" },
    ],
  },
  {
    id: 2,
    title: "Topic 2",
    chapters: [
      { id: 1, title: "Chapter 1", content: "This is the content for Chapter 1" },
      { id: 2, title: "Chapter 2", content: "This is the content for Chapter 2" },
    ],
  },
];

const ChapterDetailPage: React.FC = () => {
  const { topicId, chapterId } = useParams<{ topicId: string; chapterId: string }>();
  const topic = topics.find((t) => t.id === parseInt(topicId || "0"));
  const chapter = topic?.chapters.find((ch) => ch.id === parseInt(chapterId || "0"));

  return (
    <div>
      {chapter ? (
        <div>
          <h2 className="text-2xl font-bold">{chapter.title}</h2>
          <p className="mt-4">{chapter.content}</p>
        </div>
      ) : (
        <p>Chapter not found.</p>
      )}
    </div>
  );
};

export default ChapterDetailPage;
