"use client";
import { useState, useEffect } from "react";

import styles from "./addToCart.module.css";

function createInitialNumber() {
  while (true) {
    const rand = Math.floor(Math.random() * 100);
    if (rand <= 83 && rand >= 68) {
      return rand;
    }
  }
}

export default function AddToCart() {
  const [num] = useState(createInitialNumber());

  useEffect(() => {
    setTimeout(() => {
      console.log("5 seconds passed since I got rendered");
    }, 5000);
  }, []);

  useEffect(() => {
    if (num >= 80) {
      setTimeout(() => {
        alert("Damn the random number is very high!");
      }, 5000);
    }
  }, [num]);

  return (
    <button className={styles["add-to-cart"]} onClick={() => alert("Added!")}>
      Add to cart {num}
    </button>
  );
}
