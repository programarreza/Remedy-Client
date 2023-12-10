import toast from "react-hot-toast";
import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { googleLogin, login } = useAuth();
  const [isShow, setIsShow] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const user = { email, password };
    console.log(user);
    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfully");
      })
      .catch(err => {
        toast.error("something wrong please try again");
        console.log(err);
      });
  };
  return (
    <div className="h-screen">
      <Card className="max-w-sm mx-auto mt-28">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <h2 className="text-center text-xl font-semibold">Login</h2>
          <div>
            <div className="mb-2 ">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <div className="mb-2 ">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput
              className="relative"
              id="password1"
              type={isShow ? "password" : "text"}
              name="password"
              placeholder="Password"
              required
            />
            <p
              onClick={() => setIsShow(!isShow)}
              className="text-xl absolute cursor-pointer -mt-8 ml-[300px]"
            >
              {isShow ? <FaEyeSlash /> : <FaEye />}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="underline hover:text-[#ff4500] font-medium"
              >
                Forgot password
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="p-2 rounded-md text-white bg-[#ff4400dc] hover:bg-[#ff4500]"
          >
            Login Now
          </button>

          <div className="p-2 rounded-md hover:text-white  hover:bg-[#ff4500] border cursor-pointer flex items-center gap-4 justify-center  text-lg font-medium ">
            <FcGoogle />
            <button onClick={googleLogin}>Login With Google</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
