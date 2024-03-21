"use client";

import dynamic from "next/dynamic";

/*
 * This wrapper is a Next.js 14.1.4 fix.
 * In this version, using `dynamic` in Server Components to load Client
 * Components won't actually code-split them. They'll still be part of the main
 * bundle, even if they never end up getting rendered.
 * The workaround is wrapping the Client Component with another that uses
 * `dynamic` to load it.
 */
const AddToCart = dynamic(() => import("./addToCart"), { ssr: false });

export default function AddToCartWrapper() {
  return <AddToCart />;
}
