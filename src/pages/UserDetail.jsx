import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Navbar/Header";
import UserProfile from "../components/User/Auth/UserProfile";
import { useEffect, useState } from "react";
import { integrateUsersFromServer } from "../redux/userSlice";

const UserDetail = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState();
  const fetchUserData = () => {
    const baseURL = "http://localhost:3000/users";
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        dispatch(integrateUsersFromServer(data));
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  //console.log(userData);

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    fetchUserData();
    const userID = auth.userID;
    console.log(userID);
  }, []);
  return (
    <div>
      <Header></Header>
      <UserProfile></UserProfile>
    </div>
  );
};

export default UserDetail;
