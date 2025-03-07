import styles from './Welcome.module.css';

type WelcomeProps = {
  onStart: () => void;
};

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className={styles.welcome}>
      <h1>Welcome to the Tech Career Path Recommendation Chatbot</h1>
      <p>Hey there! Choosing a tech career can be tricky, but don’t worry—I’ll help you figure out what fits you best. Just answer a few simple questions, and I’ll guide you!</p>
      <button onClick={onStart}>Start</button>
    </div>
  );
}
