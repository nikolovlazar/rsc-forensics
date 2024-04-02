import { headers } from "next/headers";

import AddToCartWrapper from "./addToCartWrapper";

async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(function () {
      const items = [
        { id: 1, title: "Gloves", price: 20 },
        { id: 2, title: "Scarf", price: 50 },
        { id: 3, title: "Boots", price: 200 },
        { id: 4, title: "Glasses", price: 30 },
        { id: 5, title: "Hat", price: 35 },
        { id: 6, title: "Sweater", price: 80 },
        { id: 7, title: "Jeans", price: 50 },
        { id: 8, title: "Coat", price: 150 },
      ];
      resolve(items);
    }, 5000);
  });
}

export async function Products() {
  // Using headers() to mark this component as Dynamically Rendered.
  // a.k.a. it will be executed on every request instead of at build time.
  headers();

  const products = await getProducts();

  console.log("Another log logged from a server component");

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - ${product.price}
          {product.price <= 20 && <AddToCartWrapper />}
        </li>
      ))}
    </ul>
  );
}
