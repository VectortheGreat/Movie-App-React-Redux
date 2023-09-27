import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalFunc, warningModalFunc } from "../../redux/modalSlice";
import { BsFillTrashFill } from "react-icons/bs";
const ProductCard = ({ pr }) => {
  ProductCard.propTypes = {
    pr: PropTypes.shape({
      id: PropTypes.any.isRequired,
      url: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
    }).isRequired,
  };
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [editMod, setEditMod] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleEditMod = () => {
    setEditMod(!editMod);
    dispatch(modalFunc());
    navigate(`/?update=${pr?.id}`);
  };

  const deleteFunc = () => {
    dispatch(warningModalFunc());
    navigate(`/?delete=${pr?.id}`);
  };

  return (
    <>
      <div className="mx-auto my-3 bg-white rounded-xl shadow-md overflow-hidden w-60">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover bg-cover"
            src={pr.url}
            alt={pr.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {pr.name}
          </div>

          <div className="mt-2"></div>
          <div className="mt-2">
            <p className="text-gray-700">
              {showFullDescription
                ? pr.description
                : pr.description.slice(0, 30) + "..."}
            </p>
            {pr.description.length > 30 && (
              <button
                className="text-indigo-500 hover:underline"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? "Gizle" : "Devamını Gör"}
              </button>
            )}
            <div className="mt-2 space-x-2 flex">
              <button
                onClick={() => navigate(`detail/${pr?.id}`)}
                className="bg-rose-800 text-white rounded-md p-2"
              >
                Details
              </button>
              <button
                className="bg-rose-800 text-white rounded-md p-2"
                onClick={toggleEditMod}
              >
                Edit
              </button>
              <button
                className="bg-rose-800 text-white rounded-md p-2 px-2.5"
                onClick={deleteFunc}
              >
                <span>
                  <BsFillTrashFill></BsFillTrashFill>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
