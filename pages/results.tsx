import { useRouter } from 'next/router';
import styles from './results.module.css';

export default function Results() {
  const router = useRouter();
  const { result } = router.query;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Your Recommended Career Path</h1>
        {result && (
          <div className={styles.result}>
            <h2>{result}</h2>
            <p>
              Visit <a href="https://welearnremotely.com">WeLearnRemotely</a> for a free guide based on your choice.
            </p>
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
