import { useEffect, useState } from "react";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const Products = () => {
  const { modal } = useSelector((state) => state.modal);
  const [productData, setProductData] = useState()
  useEffect(() => {
    const baseURL = 'http://localhost:3000/movies';
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  console.log(productData)

  return (
    <>
      {modal && <Modal></Modal>}
      <div className="flex flex-wrap">

        {productData?.map((pr, i) => (
          <ProductCard key={i} pr={pr}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
