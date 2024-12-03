import styles from "./page.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <main className={styles.pinol__form__body}>
        <div className={styles.pinol__form_container}>
          <form className={styles.pinol__form}>
            <h1>Login to Pinol Dashboard</h1>
            <label>Enter your credentials to access the dashboard</label>
            <div className={styles.pinol__form__field}>
              <label>Username</label>
              <input type="email" />
            </div>
            <div className={styles.pinol__form__field}>
              <label>Password</label>
              <input type="password" />
            </div>
            <button>
              <Link href="/">Log In</Link>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
