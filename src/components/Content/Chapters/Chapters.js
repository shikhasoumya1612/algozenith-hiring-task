import React from "react";
import ChapterPart from "./ChapterPart";

const Chapters = () => {
  const parts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      duration: 120,
      difficulty: "Medium",
      sections: [
        { id: 1, type: "VIDEO", title: "Video 1", duration: 20 },
        { id: 2, type: "QUIZ", title: "Article 1", duration: 30 },
        { id: 3, type: "QUIZ", title: "Quiz 1", duration: 30 },
        { id: 4, type: "CODING", title: "Coding Excercise 1", duration: 20 },
        { id: 5, type: "RESOURCE", title: "Combined Resource 1", duration: 20 },
      ],
      completed: 45,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      duration: 120,
      difficulty: "Medium",
      sections: [
        { id: 1, type: "VIDEO", title: "Video 2.1", duration: 10 },
        { id: 2, type: "QUIZ", title: "Article 2.1", duration: 10 },
        { id: 3, type: "QUIZ", title: "Quiz 2.1", duration: 10 },
        { id: 4, type: "CODING", title: "Coding Excercise 2.1", duration: 10 },
        {
          id: 5,
          type: "RESOURCE",
          title: "Combined Resource 2.1",
          duration: 10,
        },
        { id: 6, type: "VIDEO", title: "Video 2.2", duration: 10 },
        { id: 7, type: "QUIZ", title: "Article 2.2", duration: 10 },
        { id: 8, type: "QUIZ", title: "Quiz 2.2", duration: 10 },
        { id: 9, type: "CODING", title: "Coding Excercise 2.2", duration: 10 },
        {
          id: 10,
          type: "RESOURCE",
          title: "Combined Resource 2.2",
          duration: 10,
        },
        {
          id: 11,
          type: "RESOURCE",
          title: "Combined Resource 2.3",
          duration: 10,
        },
        {
          id: 12,
          type: "RESOURCE",
          title: "Combined Resource 2.4",
          duration: 10,
        },
      ],
      completed: 20,
    },

    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      duration: 120,
      difficulty: "Medium",
      sections: [
        { id: 1, type: "VIDEO", title: "Video 3.1", duration: 10 },
        { id: 2, type: "QUIZ", title: "Article 3.1", duration: 10 },
        { id: 3, type: "QUIZ", title: "Quiz 3.1", duration: 10 },
        { id: 4, type: "CODING", title: "Coding Excercise 3.1", duration: 10 },
        {
          id: 5,
          type: "RESOURCE",
          title: "Combined Resource 3.1",
          duration: 10,
        },
        { id: 6, type: "VIDEO", title: "Video 3.2", duration: 10 },
        { id: 7, type: "QUIZ", title: "Article 3.2", duration: 10 },
        { id: 8, type: "QUIZ", title: "Quiz 3.2", duration: 10 },
        { id: 9, type: "CODING", title: "Coding Excercise 3.2", duration: 10 },
        {
          id: 10,
          type: "RESOURCE",
          title: "Combined Resource 3.2",
          duration: 10,
        },
        {
          id: 11,
          type: "RESOURCE",
          title: "Combined Resource 3.3",
          duration: 10,
        },
        {
          id: 12,
          type: "RESOURCE",
          title: "Combined Resource 3.4",
          duration: 10,
        },
      ],
      completed: 0,
    },
  ];

  return (
    <div className="chapter-parts">
      {parts.map((part) => (
        <ChapterPart part={part} key={part.id} />
      ))}
    </div>
  );
};

export default Chapters;
