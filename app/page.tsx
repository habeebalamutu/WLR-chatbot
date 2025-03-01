"use client";

import { useState, useEffect } from 'react';
import styles from "./page.module.css";

type Option = {
  text: string;
  next: number | string;
};

type Question = {
  question: string;
  options: Option[];
};

export default function Home() {
  const [step, setStep] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const fetchQuestion = async (step: number) => {
    const res = await fetch(`/api/chatbot?step=${step}`);
    const data = await res.json();
    setQuestion(data);
  };

  const handleOptionClick = (next: number | string) => {
    if (typeof next === 'string') {
      setResult(next);
    } else {
      setStep(next);
      fetchQuestion(next);
    }
  };

  useEffect(() => {
    fetchQuestion(step);
  }, [step]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Tech Career Path Recommendation Chatbot</h1>
        {question && (
          <div>
            <p>{question.question}</p>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>
                  <button onClick={() => handleOptionClick(option.next)}>{option.text}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {result && (
          <div>
            <h2>Your Recommended Career Path: {result}</h2>
            <p>
              Visit <a href="https://welearnremotely.com">WeLearnRemotely</a> for a free guide based on your choice.
            </p>
          </div>
        )}
      </div>
      <main className={styles.main}>
      </main>
    </div>
  );
}
