import { headers } from "next/headers";
import dynamic from "next/dynamic";

// import AddToCart from "./addToCart";
const AddToCart = dynamic(() => import("./addToCart"), { ssr: false });

async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Deciding whether to crash or not...");
      const rand = Math.floor(Math.random() * 10);
      if (rand > 5) {
        throw new Error("Oh damn you shipped addToCart.js for nothing 🤷‍♂️ ");
      }
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
  headers();
  // console.log("Statically-rendering the Products component at build time.");

  const products = await getProducts();
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - ${product.price}
          <AddToCart />
        </li>
      ))}
    </ul>
  );
}
