import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const user = { email, password };
    console.log(user);
  };
  return (
    <div className="">
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
              id="password1"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>

            <div className="flex items-center gap-2">
              <Link to="/" className="underline hover:text-[#ff4500] font-medium">Forgot password</Link>
            </div>
          </div>
          <button type="submit" className="p-2 rounded-md text-white bg-[#ff4400dc] hover:bg-[#ff4500]">Login Now</button>
		
          <div
            
            className="p-2 rounded-md hover:text-white  hover:bg-[#ff4500] border cursor-pointer flex items-center gap-4 justify-center  text-lg font-medium "
          >
            <FcGoogle />
            <button>Login With Google</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
