import styles from "./error-message.module.scss";

export function ErrorMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src="/icons/alert-circle.svg" />
        <span className={styles.errorText}>
          There was a problem while loading the project data
        </span>
      </div>
      <button className={styles.tryAgainButton}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src="/icons/try-again.svg" />
      </button>
    </div>
  );
}
