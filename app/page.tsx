"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for client-side routing
import styles from "./page.module.css";
import Welcome from "../components/Welcome";

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
  const [started, setStarted] = useState(false);
  const router = useRouter();

  const fetchQuestion = async (step: number) => {
    const res = await fetch(`/api/chatbot?step=${step}`);
    const data = await res.json();
    setQuestion(data);
  };

  const handleOptionClick = (next: number | string) => {
    if (typeof next === 'string') {
      router.push(`/results?result=${next}`);
    } else {
      setStep(next);
      fetchQuestion(next);
    }
  };

  useEffect(() => {
    if (started) {
      fetchQuestion(step);
    }
  }, [step, started]);

  return (
    <div className={styles.page}>
      {!started ? (
        <Welcome onStart={() => setStarted(true)} />
      ) : (
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
        </div>
      )}
      <footer className={styles.footer}>
        <p>
          Built by <a href="https://www.linkedin.com/company/welearnremotely">WeLearnRemotely</a> ❤️.
        </p>
      </footer>
    </div>
  );
}
