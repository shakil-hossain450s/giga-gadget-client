import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if(loading){
    return <Loader />
  }

  if (!user) {
    return <Navigate to="/login" replace></Navigate>
  }
  return children;
};

export default PrivateRoute;