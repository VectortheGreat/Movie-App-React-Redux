import { BiMoviePlay } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "../../redux/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const openUserPage = () => {
    if (location.pathname.split("/")[1] === "users") return false;
    navigate("users/?login");
  };
  const signOutFunc = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userID");
    dispatch(signOut());
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="flex items-center justify-between p-3 bg-rose-800 text-white">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <BiMoviePlay size={32}></BiMoviePlay>
      </div>
      <div className="text-xl flex gap-5">
        {auth.token && (
          <h3
            className="cursor-pointer"
            onClick={() => navigate(`/users/${auth.userID}`)}
          >
            Account
          </h3>
        )}
        {auth.token && (
          <h3 className="cursor-pointer" onClick={signOutFunc}>
            Sign Out
          </h3>
        )}
        {!auth.token && (
          <h3 className="cursor-pointer" onClick={openUserPage}>
            Sign In
          </h3>
        )}

        <h3 className="cursor-pointer" onClick={() => dispatch(modalFunc())}>
          Add
        </h3>
      </div>
    </div>
  );
};

export default Header;
