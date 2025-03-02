import { useRouter } from 'next/router';
import styles from './result.module.css';

export default function Result() {
  const router = useRouter();
  const { result } = router.query;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Your Recommended Career Path</h1>
        {result && (
          <div className={styles.result}>
            <h2><span className={styles.resultTitle}>{result}</span></h2>
            <p>
              Visit <a href="https://welearnremotely.com/">WeLearnRemotely</a> for a free guide based on your choice.
            </p>
          </div>
        )}
      </div>
      <footer className={styles.footer}>
        <p>
          Built by <a href="https://www.linkedin.com/company/we-learn-remotely/">WeLearnRemotely</a> with ❤️.
        </p>
      </footer>
    </div>
  );
}
