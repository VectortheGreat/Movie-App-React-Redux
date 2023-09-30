import { useDispatch, useSelector } from "react-redux";
import {
  findUserLogin,
  toggleLoginMode,
  toggleLoginSuccessful,
} from "../../redux/userSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { createLocalToken, setUserID } from "../../redux/authSlice";

const Login = () => {
  const { loginSuccessful } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const onchangeFunc = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const generateJwtToken = () => {
    const uniqueID = uuidv4();
    const jwtToken = uniqueID.replace(/-/g, "");
    //const expirationTime = new Date().getTime() + 12 * 60 * 60 * 1000; // 12 saat
    //
    //console.log("TOKEN DATA: ", tokenData);
    // localStorage.setItem("jwtToken", JSON.stringify(tokenData));
    localStorage.setItem("jwtToken", jwtToken);
    return jwtToken;
  };
  const loginFunc = async () => {
    try {
      await axios.get("http://localhost:3000/users", { ...loginInfo });
      const loginChechk = user.user.find((dt) => {
        return (
          loginInfo.email === dt.email && loginInfo.password === dt.password
        );
      });
      if (loginChechk) {
        dispatch(findUserLogin(loginInfo));
        // navigate(`/users/${loginChechk.id}`);
        navigate(`/`);
        const jwtToken = generateJwtToken();
        dispatch(createLocalToken(jwtToken));
        dispatch(setUserID(loginChechk.id));
        window.location.reload();
        try {
          await axios.get(`http://localhost:3000/users/${loginChechk.id}`, {});
        } catch (error) {
          console.error("Error adding product:", error);
        }
      } else {
        console.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const toggleLoginModeFunc = () => {
    dispatch(toggleLoginMode());
    navigate("/users?signup");
  };

  useEffect(() => {
    if (loginSuccessful) {
      dispatch(toggleLoginSuccessful());
    }
  }, [loginSuccessful, navigate, dispatch]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your E-mail"
            onChange={(e) => onchangeFunc(e)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter Your Password"
            onChange={(e) => onchangeFunc(e)}
          />
        </div>
        <div>
          <button
            className="w-full bg-rose-800 text-white py-2 rounded-lg hover:bg-rose-950 transition duration-300 mb-4"
            onClick={loginFunc}
          >
            Login
          </button>
          <button
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-300 transition duration-300"
            onClick={toggleLoginModeFunc}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
