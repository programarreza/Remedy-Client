import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useBlogs from "../Hooks/useBlogs";
import { MoonLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const { isLoading } = useBlogs();

  // const location = useLocation()

  if (isLoading) {
    return (
      <div className="h-screen flex items-center  justify-center">
        <MoonLoader color="#000" />
      </div>
    );
  }
  else if(user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
