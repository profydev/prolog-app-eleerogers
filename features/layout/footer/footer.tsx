import styles from "./footer.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.version}>Version: {process.env.appVersion}</div>
      <ul className={styles.links}>
        <li>
          <Link href="#">Docs</Link>
        </li>
        <li>
          <Link href="#">API</Link>
        </li>
        <li>
          <Link href="#">Help</Link>
        </li>
        <li>
          <Link href="#">Community</Link>
        </li>
      </ul>
      <div className={styles.logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-small.svg" alt="Small logo" />
      </div>
    </footer>
  );
}
