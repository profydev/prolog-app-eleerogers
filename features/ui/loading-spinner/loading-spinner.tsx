import styles from "./loading-spinner.module.scss";

export function LoadingSpinner() {
  return (
    <div className={styles.container} data-testid="loading-spinner">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.loading}
        src="/icons/loading-spinner.svg"
        alt="Loading"
      />
    </div>
  );
}
