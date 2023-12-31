import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Navbar/Header";
import Login from "../components/User/Login";
import SignUp from "../components/User/SignUp";
import { useEffect, useState } from "react";
import { integrateUsersFromServer } from "../redux/userSlice";
import UserProfile from "../components/User/Auth/UserProfile";

const User = () => {
  const { loginMode } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState();
  const auth = useSelector((state) => state.auth);
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
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <Header></Header>
      {loginMode && !auth.token && <Login></Login>}
      {!loginMode && !auth.token && <SignUp></SignUp>}
      {auth.token && <UserProfile></UserProfile>}
    </div>
  );
};

export default User;
