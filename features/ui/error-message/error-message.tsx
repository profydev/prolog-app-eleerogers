import classNames from "classnames";
import styles from "./error-message.module.scss";

type ErrorMessageProps = {
  message: string;
  onClick: () => void;
  className?: string;
};

export function ErrorMessage({
  message,
  onClick,
  className,
}: ErrorMessageProps) {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.leftContent}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src="/icons/alert-circle.svg" />
        <span className={styles.errorText}>{message}</span>
      </div>
      <button className={styles.tryAgainButton} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src="/icons/try-again.svg" />
      </button>
    </div>
  );
}
