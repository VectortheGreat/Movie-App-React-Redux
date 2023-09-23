import Modal from "./Modal";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const Products = () => {
  const { modal } = useSelector((state) => state.modal);

  const { product } = useSelector((state) => state.product);
  console.log(product);
  return (
    <>
      {modal && <Modal></Modal>}
      {product?.map((pr, i) => (
        <ProductCard key={i} pr={pr}></ProductCard>
      ))}
    </>
  );
};

export default Products;
