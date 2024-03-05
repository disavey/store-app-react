import { useEffect, useState } from "react";

function UseEffect({ todos }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div
          className={
            product.category == "men's clothing"
              ? "bg-blue-400"
              : "bg-yellow-200"
          }
        >
          <ul>
            <li key={product.id}>{product.title}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UseEffect;
