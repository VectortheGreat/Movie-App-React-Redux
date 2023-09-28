import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user || []);
  const auth = useSelector((state) => state.auth);
  const userData = user.user.find((dt) => {
    console.log(dt.id);
    return dt.id == auth.userID;
  });
  console.log(userData);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-4">
      <div className="flex justify-center">
        <img
          src="https://freerangestock.com/sample/120140/business-man-profile-vector.jpg"
          alt="PP"
          className="w-32 h-32 rounded-full border-2 border-gray-400"
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-bold">E-mail:</label>
        <p className="text-gray-800">{userData?.email}</p>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-bold">Password:</label>
        <p className="text-gray-800">{userData?.password}</p>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-bold">Role:</label>
        <p className="text-gray-800">{userData?.role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
