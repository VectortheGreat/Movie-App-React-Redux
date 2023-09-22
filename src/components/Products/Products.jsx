import Modal from "./Modal";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const Products = () => {
  const { modal, product } = useSelector((state) => state.modal);
  console.log(modal);
  console.log(product);
  return (
    <>
      {modal && <Modal></Modal>}
      {!product && <ProductCard></ProductCard>}
    </>
  );
};

export default Products;
