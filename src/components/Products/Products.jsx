import { useEffect, useState } from "react";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { integrateProductsFromServer } from "../../redux/productSlice";
import WarningModal from "./WarningModal";

const Products = () => {
  const { modal } = useSelector((state) => state.modal);
  const [productData, setProductData] = useState();
  const dispatch = useDispatch();
  const warningModal = useSelector((state) => state.modal.warningModal);

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

  console.log(productData);

  return (
    <>
      {modal && <Modal onButtonSubmit={fetchData}></Modal>}
      {warningModal && <WarningModal onButtonSubmit={fetchData}></WarningModal>}
      <div className="flex flex-wrap">
        {productData?.map((pr, i) => (
          <ProductCard key={i} pr={pr}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
