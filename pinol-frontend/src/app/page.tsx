import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <div data-testid="DidTitleId">
       <p>Bienvenido a pinol!</p>
      </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
