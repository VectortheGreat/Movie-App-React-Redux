import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";
import { useState } from "react";
import { createProductFunc } from "../../redux/productSlice";
import axios from "axios";

const Modal = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product || []);
  const [movieInfo, setMovieInfo] = useState({
    name: "",
    category: "",
    description: "",
    url: "",
    director: "",
    imdbRating: "",
    date: "",
    duration: "",
    trailerUrl: ""
  });
  const onchangeFunc = (e, type) => {
    if (type == "url") {
      setMovieInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setMovieInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  // const buttonFunc = () => {
  //   dispatch(createProductFunc({ ...movieInfo, id: product.length + 1 }));
  //   dispatch(modalFunc());
  // };

  const buttonFunc = async () => {
    try {
      await axios.post('http://localhost:3000/movies', { ...movieInfo });
      dispatch(createProductFunc({ ...movieInfo, id: product.length + 1 }));
      dispatch(modalFunc());
      console.log(true)
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center">
        <div className="w-1/3 bg-white shadow-lg rounded-md p-4">
          <div className="border-b py-3 flex items-center justify-between">
            <div className="text-2xl">Add New Movie</div>
            <IoIosClose
              className="cursor-pointer"
              size={24}
              onClick={() => dispatch(modalFunc())}
            ></IoIosClose>
          </div>
          <input
            className="h-10 w-full border rounded-md p-2 outline-none mt-3"
            value={movieInfo.name}
            type="text"
            placeholder="Movie Name"
            name="name"
            id="name"
            onChange={(e) => onchangeFunc(e, "name")}
          />
          <input
            className="h-10 w-full border rounded-md p-2 outline-none mt-3"
            value={movieInfo.category}
            type="text"
            placeholder="Category"
            name="category"
            id="category"
            onChange={(e) => onchangeFunc(e, "category")}
          />
          <input
            className="h-10 w-full border rounded-md p-2 outline-none mt-3"
            value={movieInfo.description}
            type="text"
            placeholder="Description"
            name="description"
            id="description"
            onChange={(e) => onchangeFunc(e, "description")}
          />
          <input
            className="h-10 w-full border rounded-md p-2 outline-none mt-3"
            value={movieInfo.director}
            type="text"
            placeholder="Director"
            name="director"
            id="director"
            onChange={(e) => onchangeFunc(e, "director")}
          />
          <input
            className="h-10 w-full border rounded-md p-1 outline-none mt-3"
            type="text"
            placeholder="IMDB Rating"
            name="imdbRating"
            id="imdbRating"
            onChange={(e) => onchangeFunc(e, "imdbRating")}
          />
          <input
            className="h-10 w-full border rounded-md p-1 outline-none mt-3"
            type="text"
            placeholder="Release Date"
            name="date"
            id="date"
            onChange={(e) => onchangeFunc(e, "date")}
          />
          <input
            className="h-10 w-full border rounded-md p-1 outline-none mt-3"
            type="text"
            placeholder="Duration"
            name="duration"
            id="duration"
            onChange={(e) => onchangeFunc(e, "duration")}
          />
          <input
            className="h-10 w-full border rounded-md p-1 outline-none mt-3"
            type="text"
            placeholder="Trailer Url"
            name="trailerUrl"
            id="trailerUrl"
            onChange={(e) => onchangeFunc(e, "trailerUrl")}
          />
          <input
            className="h-10 w-full border rounded-md p-1 outline-none mt-3"
            type="file"
            placeholder="Image"
            name="url"
            id="url"
            onChange={(e) => onchangeFunc(e, "url")}
          />

          <button
            className="w-full h-10 bg-indigo-600 text-white flex items-center justify-center mt-2 rounded-md border-none"
            onClick={buttonFunc}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
