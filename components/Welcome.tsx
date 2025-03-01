import styles from './Welcome.module.css';

type WelcomeProps = {
  onStart: () => void;
};

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className={styles.welcome}>
      <h1>Welcome to the Tech Career Path Recommendation Chatbot</h1>
      <p>Hi there! Not sure which tech career is right for you? Click the button below to start the questionnaire and I’ll help you decide!</p>
      <button onClick={onStart}>Start</button>
    </div>
  );
}
