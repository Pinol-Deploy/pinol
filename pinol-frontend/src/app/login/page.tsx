import styles from "./page.module.css";

export default function Login() {
  return (
    <div>
      <main>
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
            <button>Log In</button>
          </form>
        </div>
      </main>
    </div>
  );
}
