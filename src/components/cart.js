import { headers } from "next/headers";

function loadCartItems() {
  return new Promise((resolve) => {
    setTimeout(function () {
      const items = [
        { id: 1, title: "Gloves", price: 20 },
        { id: 2, title: "Scarf", price: 50 },
        { id: 3, title: "Boots", price: 200 },
      ];
      resolve(items);
    }, 1000);
  });
}

export async function Cart() {
  headers();
  console.log(
    "Generating cart at response-time because headers() is being used - marking it a Dynamic Function",
  );

  const items = await loadCartItems();
  return <p>🛍️ {items.length}</p>;
}
