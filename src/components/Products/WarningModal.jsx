import { useDispatch } from "react-redux";
import { warningModalFunc } from "../../redux/modalSlice";
import { useNavigate } from "react-router-dom";
import { deleteProductFunc } from "../../redux/productSlice";
import axios from "axios";
import PropTypes from "prop-types";

const WarningModal = ({ onButtonSubmit }) => {
  WarningModal.propTypes = {
    onButtonSubmit: PropTypes.func.isRequired,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let loc = location?.search.split("=")[1];
  console.log(loc);
  console.log(`http://localhost:3000/movies/${loc}`);
  const deleteProduct = async () => {
    try {
      await axios
        .delete(`http://localhost:3000/movies/${loc}`)
        .then((response) => {
          console.log("Ürün başarıyla silindi.", response);
        });
      dispatch(deleteProductFunc(loc));
      onButtonSubmit();
    } catch (error) {
      console.error("Error adding product:", error);
    }
    dispatch(warningModalFunc());
    navigate(`/`);
  };
  const warningFunc = () => {
    dispatch(warningModalFunc());
    navigate(`/`);
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center">
        <div className="w-1/3 bg-white shadow-lg rounded-md p-4">
          <div className="border-b py-3 flex items-center justify-between">
            Do you want to remove the movie?
          </div>
          <div className="flex space-x-2">
            <button
              className="w-full h-10 bg-red-800 text-white flex items-center justify-center mt-2 rounded-md border-none"
              onClick={deleteProduct}
            >
              Remove
            </button>
            <button
              className="w-full h-10 bg-gray-600 text-white flex items-center justify-center mt-2 rounded-md border-none"
              onClick={warningFunc}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WarningModal;
