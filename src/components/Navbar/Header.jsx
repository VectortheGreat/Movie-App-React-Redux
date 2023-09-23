import { BiMoviePlay } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between p-3 bg-rose-800 text-white">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <BiMoviePlay size={32}></BiMoviePlay>
      </div>
      <div className="text-xl flex gap-5">
        <h3>Sign In</h3>
        <h3 className="cursor-pointer" onClick={() => dispatch(modalFunc())}>
          Add
        </h3>
      </div>
    </div>
  );
};

export default Header;
