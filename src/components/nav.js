import styles from "./nav.module.css";
import { Cart } from "./cart";
import { Suspense } from "react";

export function Nav() {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <h3>Logo</h3>
      </a>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="/">Home</a>
        </li>
        <li className={styles.link}>
          <a href="/products">Products</a>
        </li>
        <li className={styles.link}>
          <a href="/search">Search</a>
        </li>
        <li>
          <Suspense fallback={<p>🌀</p>}>
            <Cart />
          </Suspense>
        </li>
      </ul>
    </nav>
  );
}
