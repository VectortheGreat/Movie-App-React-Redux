import PropTypes from "prop-types";

const UserProfile = ({ matchedUserID }) => {
  UserProfile.propTypes = {
    matchedUserID: PropTypes.object.isRequired,
  };
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
        <p className="text-gray-800">{matchedUserID?.email}</p>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-bold">Password:</label>
        <p className="text-gray-800">{matchedUserID?.password}</p>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-bold">Role:</label>
        <p className="text-gray-800">{matchedUserID?.role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
