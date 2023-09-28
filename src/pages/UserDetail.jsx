import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Navbar/Header";
import UserProfile from "../components/User/Auth/UserProfile";
import { useEffect, useState } from "react";
import { integrateUsersFromServer } from "../redux/userSlice";
import InvalidPage from "../components/User/Auth/InvalidPage";
import { useLocation } from "react-router-dom";

const UserDetail = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user || []);
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
  const matchedUserID = user.user.find((dt) => {
    return dt.id == auth.userID;
  });
  const location = useLocation();
  let loc = location.pathname.split("/")[2];
  console.log(loc);

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <Header></Header>
      {auth.userID === loc && auth.token ? (
        <UserProfile matchedUserID={matchedUserID}></UserProfile>
      ) : (
        <InvalidPage></InvalidPage>
      )}
    </div>
  );
};

export default UserDetail;
