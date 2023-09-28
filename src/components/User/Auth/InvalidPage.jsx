import { useNavigate } from "react-router-dom";

const InvalidPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-red-950 text-white p-8 rounded-lg shadow-xl text-center mt-3">
      <h1 className="text-4xl font-bold mb-4">Invalid Page</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded-full"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
};

export default InvalidPage;
