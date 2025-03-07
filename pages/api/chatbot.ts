import { NextApiRequest, NextApiResponse } from 'next';

type Question = {
  question: string;
  options: { text: string; next: number | string }[];
};

const questions: Question[] = [
  {
    question: "Do you enjoy solving problems like puzzles, brain teasers, or figuring out how things work?",
    options: [
      { text: "Yes", next: 2 },
      { text: "No", next: 6 },
    ],
  },
  {
    question: "Do you enjoy working with visuals—like designing, drawing, or making things look good?",
    options: [
      { text: "Yes", next: 3 },
      { text: "No", next: 4 },
    ],
  },
  {
    question: "Do you like designing how websites or apps look and feel?",
    options: [
      { text: "Yes", next: "UI/UX Design" },
      { text: "No", next: "Frontend Development" },
    ],
  },
  {
    question: "Do you enjoy breaking big problems into smaller ones and figuring out step-by-step solutions?",
    options: [
      { text: "Yes", next: 5 },
      { text: "No", next: 9 },
    ],
  },
  {
    question: "Do you like making apps or websites work behind the scenes, like handling user accounts or data storage?",
    options: [
      { text: "Yes", next: "Backend Development" },
      { text: "No", next: 6 },
    ],
  },
  {
    question: "Do you enjoy making sure systems run smoothly and automatically?",
    options: [
      { text: "Yes", next: "DevOps / Cloud Engineering" },
      { text: "No", next: 7 },
    ],
  },
  {
    question: "Do you like working with numbers, spotting patterns, or making decisions based on facts and trends?",
    options: [
      { text: "Yes", next: 8 },
      { text: "No", next: 10 },
    ],
  },
  {
    question: "Do you like figuring out why things happen and drawing conclusions from information?",
    options: [
      { text: "Yes", next: "Data Science" },
      { text: "No", next: 9 },
    ],
  },
  {
    question: "Do you enjoy teaching computers to learn and make smart decisions?",
    options: [
      { text: "Yes", next: "AI/ML Engineering" },
      { text: "No", next: 10 },
    ],
  },
  {
    question: "Do you enjoy finding weaknesses in systems or keeping information safe?",
    options: [
      { text: "Yes", next: "Cybersecurity" },
      { text: "No", next: 11 },
    ],
  },
  {
    question: "Do you like making sure software works properly and doesn’t have errors?",
    options: [
      { text: "Yes", next: "QA Testing" },
      { text: "No", next: 12 },
    ],
  },
  {
    question: "Do you enjoy planning, organizing, and working with people to get things done?",
    options: [
      { text: "Yes", next: 13 },
      { text: "No", next: 14 },
    ],
  },
  {
    question: "Do you like coming up with product ideas, improving how things work, and leading teams?",
    options: [
      { text: "Yes", next: "Product Management" },
      { text: "No", next: "Project Management" },
    ],
  },
  {
    question: "Are you excited about new trends like blockchain, Web3, or the future of the internet?",
    options: [
      { text: "Yes", next: "Blockchain Development" },
      { text: "No", next: 15 },
    ],
  },
  {
    question: "Do you prefer helping businesses use tech to grow (like selling software or consulting)?",
    options: [
      { text: "Yes", next: "Tech Sales / IT Consulting" },
      { text: "No", next: "General IT / Help Desk Support" },
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
