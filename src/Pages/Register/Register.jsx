import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const user = { name, email, password };
    console.log(user);
  };

  return (
    <div className="">
      <Card className="max-w-sm mx-auto mt-28">
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
		<h2 className="text-center text-xl font-semibold">Sign Up</h2>
          <div>
            <div className="mb-2 ">
              <Label htmlFor="name" value=" Name" />
            </div>
            <TextInput
              id="name1"
              type="text"
              name="name"
              placeholder=" Name"
              required
            />
          </div>
          <div>
            <div className="mb-2 ">
              <Label htmlFor="email1" value=" Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder=" Email"
              required
            />
          </div>
          <div>
            <div className="mb-2 ">
              <Label htmlFor="password1" value=" Password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="flex justify-between">I agree to the <span className="ml-2 text-blue-700"><Link to="/" className="underline">terms and conditions</Link></span></Label>
          </div>
          <button type="submit" className="p-2 rounded-md text-white bg-[#ff4400dc] hover:bg-[#ff4500]">Register Now</button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
