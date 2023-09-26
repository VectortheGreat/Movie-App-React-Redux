import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Detail = ({ product }) => {
  Detail.propTypes = {
    product: PropTypes.shape({
      url: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      imdbRating: PropTypes.any.isRequired,
      date: PropTypes.any.isRequired,
      duration: PropTypes.any.isRequired,
      trailerUrl: PropTypes.any.isRequired,
    }).isRequired,
  };

  const watchTrailerUrl = () => {
    window.open(`${pr.trailerUrl} '_blank'`);
  };
  const { id } = useParams();
  const pr = product[id - 1];
  return (
    <>
      <div className="container mx-auto my-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <img
              className="w-[200px] h-[300px] object-cover rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Colouring_pencils.jpg/300px-Colouring_pencils.jpg"
              alt="Film Resmi"
            />
            <div className="mt-3">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={watchTrailerUrl}
              >
                Watch Trailer
              </button>
            </div>
          </div>
          <div className="px-5 py-3 border border-black rounded-md my-3">
            <div className="my-2 text-2xl font-semibold">Movie Details</div>
            <div className="my-2">
              <span className="font-semibold">Name:</span> {pr.name}
            </div>
            <div className="my-2">
              <span className="font-semibold">Category:</span> {pr.category}
            </div>
            <div className="my-2">
              <span className="font-semibold">Director:</span> {pr.director}
            </div>
            <div className="my-2">
              <span className="font-semibold">Description:</span>{" "}
              {pr.description}
            </div>
            <div className="my-2">
              <span className="font-semibold">IMDb Rating:</span>{" "}
              {pr.imdbRating}
            </div>
            <div className="my-2">
              <span className="font-semibold">Release Date:</span> {pr.date}
            </div>
            <div className="my-2">
              <span className="font-semibold">Duration:</span> {pr.duration} hr.
            </div>
          </div>
        </div>
        <div className="px-5 py-3 border border-black rounded-md my-3">
          <div className="my-2 text-2xl font-semibold">Film İncelemesi</div>
          <p className="my-2">
            Buraya IMDb tarzında bir film incelemesi metni ekleyebilirsiniz.
            Film hakkında detaylı bilgiler, değerlendirmeler ve görüşler burada
            yer alabilir.
          </p>
        </div>
      </div>
    </>
  );
};

export default Detail;
