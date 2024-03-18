import { AddToCart } from "./addToCart";

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
  console.log("Statically-rendering the Products component at build time.");

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
