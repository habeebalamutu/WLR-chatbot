import { NextApiRequest, NextApiResponse } from 'next';

type Question = {
  question: string;
  options: { text: string; next: number | string }[];
};

const questions: Question[] = [
  {
    question: "Do you enjoy coding?",
    options: [
      { text: "Yes", next: 1 },
      { text: "No", next: 5 },
    ],
  },
  {
    question: "Do you prefer working on visuals or logic?",
    options: [
      { text: "Visuals", next: "Frontend Development / UI/UX Design" },
      { text: "Logic", next: 2 },
    ],
  },
  {
    question: "Do you enjoy solving complex technical problems?",
    options: [
      { text: "Yes", next: 3 },
      { text: "No", next: "Frontend Development" },
    ],
  },
  {
    question: "Do you like working with cloud technologies and automation?",
    options: [
      { text: "Yes", next: "DevOps / Cloud Engineering" },
      { text: "No", next: "Backend Development" },
    ],
  },
  {
    question: "Do you enjoy working with data?",
    options: [
      { text: "Yes", next: 6 },
      { text: "No", next: 7 },
    ],
  },
  {
    question: "Do you prefer analyzing data to uncover insights?",
    options: [
      { text: "Yes", next: "Data Science" },
      { text: "No", next: "AI/ML" },
    ],
  },
  {
    question: "Do you enjoy managing projects and people?",
    options: [
      { text: "Yes", next: "Project/Product Management" },
      { text: "No", next: "Cybersecurity / QA Testing" },
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { step } = req.query;
  const questionIndex = parseInt(step as string, 10);

  if (isNaN(questionIndex) || questionIndex < 0 || questionIndex >= questions.length) {
    return res.status(400).json({ error: "Invalid step" });
  }

  res.status(200).json(questions[questionIndex]);
}
