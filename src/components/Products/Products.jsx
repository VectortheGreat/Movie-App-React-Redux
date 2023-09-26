import { useEffect, useState } from "react";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { integrateProductsFromServer } from "../../redux/productSlice";

const Products = () => {
  const { modal } = useSelector((state) => state.modal);
  const [productData, setProductData] = useState();
  const dispatch = useDispatch();

  const fetchData = () => {
    const baseURL = "http://localhost:3000/movies";
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        dispatch(integrateProductsFromServer(data));
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {modal && <Modal onButtonSubmit={fetchData}></Modal>}
      <div className="flex flex-wrap">
        {productData?.map((pr, i) => (
          <ProductCard key={i} pr={pr}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
