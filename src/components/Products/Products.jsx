import { useEffect, useState } from "react";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { integrateProductsFromServer } from "../../redux/productSlice";
import WarningModal from "./WarningModal";
import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const { modal } = useSelector((state) => state.modal);
  const [productData, setProductData] = useState();
  const dispatch = useDispatch();
  const warningModal = useSelector((state) => state.modal.warningModal);

  const uniqueID = uuidv4();
  const uniqueIDWithoutDash = uniqueID.replace(/-/g, "");
  console.log(uniqueIDWithoutDash);

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
      {modal && <Modal fetchDataFromServer={fetchData}></Modal>}
      {warningModal && (
        <WarningModal fetchDataFromServer={fetchData}></WarningModal>
      )}
      <div className="flex flex-wrap">
        {productData?.map((pr, i) => (
          <ProductCard key={i} pr={pr}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
