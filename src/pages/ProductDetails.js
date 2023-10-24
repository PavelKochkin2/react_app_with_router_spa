import { useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
  const params = useParams();
  return <h1>ProductId : {params.id}</h1>;
};
