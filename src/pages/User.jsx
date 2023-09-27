import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Navbar/Header";
import Login from "../components/User/Login";
import SignUp from "../components/User/SignUp";
import { useEffect, useState } from "react";
import { integrateUsersFromServer } from "../redux/userSlice";

const User = () => {
  const { loginMode } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
  console.log(userData);

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <Header></Header>
      {loginMode && <Login></Login>}
      {!loginMode && <SignUp></SignUp>}
    </div>
  );
};

export default User;
