import { Suspense } from "react";
import styles from "./page.module.css";
import { Products } from "@/components/products";
import { ClearCart } from "@/components/clearCart";

export default async function Home() {
  return (
    <main className={styles.main}>
      <ClearCart />
      <Suspense fallback={<p>🌀 loading products...</p>}>
        <Products />
      </Suspense>
    </main>
  );
}
