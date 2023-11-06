import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const { createUser, profileUpdate } = useAuth();
  const [isShow, setIsShow] = useState(true)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const user = { name, photo, email, password };
    console.log(user);

    const isPasswordValid = password.length >= 6 && /[A-Z]/.test(password) && /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password) && /[0-9]/.test(password);
    if(!isPasswordValid){
      return toast.error("Password should be at least 6 character one capital letter and or special character and one number");
    }
	

    createUser(email, password)
      .then((result) => {
		profileUpdate(result.user, {
			displayName: name, photoURL: photo
		})
        console.log(result.user);
		toast.success('Register Successfully')
      })
      .catch((error) => {
        console.log(error);
      });
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
              <Label htmlFor="name" value="Photo" />
            </div>
            <TextInput
              id="name1"
              type="text"
              name="photo"
              placeholder=" Photo URL"
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
            <TextInput className="relative"
              id="password1"
              type={isShow ? "password" : "text"}
              name="password"
              placeholder="Password"
              required
            />
			<p onClick={() => setIsShow(!isShow)} className='text-xl absolute cursor-pointer -mt-8 ml-[300px]'>{isShow ? <FaEyeSlash/> : <FaEye /> }</p>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="flex justify-between">
              I agree to the{" "}
              <span className="ml-2 text-blue-700">
                <Link to="/" className="underline">
                  terms and conditions
                </Link>
              </span>
            </Label>
          </div>
          <button
            type="submit"
            className="p-2 rounded-md text-white bg-[#ff4400dc] hover:bg-[#ff4500]"
          >
            Register Now
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
