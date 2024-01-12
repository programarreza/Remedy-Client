import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useBlogs from "../Hooks/useBlogs";
import { MoonLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const { isLoading } = useBlogs();

  

  if (isLoading) {
    return (
      <div className="h-screen flex items-center bg-[#031525] justify-center">
        <MoonLoader color="#fff" />
      </div>
    );
  }
  else if(user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
