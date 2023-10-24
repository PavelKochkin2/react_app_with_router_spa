import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "1",
    name: "product 1",
  },
  { id: "2", name: "product 2" },
  { id: "3", name: "product 3" },
];

export const ProductsPage = () => {
  return (
    <>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
      <p>
        {" "}
        <Link to="..">Back</Link>
      </p>{" "}
    </>
  );
};
