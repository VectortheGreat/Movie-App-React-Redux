import { useDispatch, useSelector } from "react-redux";
import {
  createNewAccount,
  findUserSignUp,
  toggleLoginMode,
  toggleSignupSuccessful,
} from "../../redux/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user || []);
  const { signupSuccessful } = useSelector((state) => state.user);
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const onchangeFunc = (e) => {
    setSignupInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const signUpFunc = async () => {
    try {
      await axios.get("http://localhost:3000/users", { ...signupInfo });
      try {
        dispatch(findUserSignUp(signupInfo));
        await axios.post("http://localhost:3000/users", { ...signupInfo });
        // dispatch(createNewAccount({ id: user.length + 1 }));
        dispatch(createNewAccount({ ...signupInfo, id: user.length + 1 }));
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  const toggleLoginModeFunc = () => {
    dispatch(toggleLoginMode());
    navigate("/users?login");
  };
  useEffect(() => {
    if (signupSuccessful) {
      navigate("/");
      dispatch(toggleSignupSuccessful());
    }
  }, [signupSuccessful, navigate, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your E-mail"
            onChange={onchangeFunc}
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
            placeholder="Create a Password"
            onChange={onchangeFunc}
          />
        </div>
        <div>
          <button
            className="w-full bg-rose-800 text-white py-2 rounded-lg hover:bg-rose-950 transition duration-300 mb-4"
            onClick={signUpFunc}
          >
            Sign Up
          </button>
          <button
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={toggleLoginModeFunc}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
