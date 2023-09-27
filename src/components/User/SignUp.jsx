import { useDispatch } from "react-redux";
import { toggleLoginMode } from "../../redux/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
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
          />
        </div>
        <div>
          <button className="w-full bg-rose-800 text-white py-2 rounded-lg hover:bg-rose-950 transition duration-300 mb-4">
            Sign Up
          </button>
          <button
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => dispatch(toggleLoginMode())}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
