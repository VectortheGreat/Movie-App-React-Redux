import PropTypes from 'prop-types'
const ProductCard = ({ pr }) => {
  ProductCard.propTypes = {
    pr: PropTypes.shape({
      url: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
    }).isRequired,
  };
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
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
              <div className="text-gray-700">
                {pr.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
