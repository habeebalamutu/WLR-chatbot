import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './chatbot.module.css';

type Option = {
  text: string;
  next: number | string;
};

type Question = {
  question: string;
  options: Option[];
};

export default function Chatbot() {
  const [step, setStep] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
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
      </div>
      <footer className={styles.footer}>
        <p>
          Built by <a href="https://www.linkedin.com/company/welearnremotely">WeLearnRemotely</a> with ❤️.
        </p>
      </footer>
    </div>
  );
}
