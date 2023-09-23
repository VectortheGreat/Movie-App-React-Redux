import PropTypes from 'prop-types'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const navigate = useNavigate()
  // console.log(pr)
  return (
    <>
      <div className="mx-auto my-3 bg-white rounded-xl shadow-md overflow-hidden w-60 cursor-pointer" onClick={() => navigate(`detail/${pr?.id}`)}>
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
          <span className='font-bold'>Category:</span> {pr.category}
          <div className="mt-2">
            <div className="text-gray-700">
              <span className='font-bold'>Director:</span>   {pr.director}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-gray-700">
              {showFullDescription
                ? pr.description
                : pr.description.slice(0, 30) + "..."}
            </p>
            {pr.description.length > 30 && (
              <button
                className="text-indigo-500 hover:underline"
                onClick={toggleDescription}
              >
                {showFullDescription ? "Gizle" : "Devamını Gör"}
              </button>
            )}
          </div>

        </div>
      </div>
    </>

  );
};

export default ProductCard;
