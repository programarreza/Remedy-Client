import Lottie from "lottie-react";
import emailAnimation from "../../assets/Email-Animation.json";

const Subscribe = () => {
  return (
    <div className="w-full h-[70vh] bg-[url('https://i.postimg.cc/fyqttCQY/gray-abstract-wireframe-technology-background.jpg')] bg-cover bg-center shadow-lg">
      <div className="w-full h-full flex  justify-center items-center ">
        <div className="w-1/2">
          <h2 className="text-3xl md:text-5xl text-center">
            Subscribe to stay informed
          </h2>
          <p className="text-center my-4">
            Shortest way to explore what will happen on Inconference
          </p>

          <div className="mt-5 mx-auto text-center">
            <input
              className="p-4 md:px-24 border-r-0 bg-transparent border rounded-lg rounded-r-none outline-none "
              type="email"
              placeholder="your email address.."
            />
            <button className="border py-4 bg-slate-200 px-2 rounded-r-md ">
              Subscribe!
            </button>
          </div>
        </div>
		<div className="w-1/2 ">
			<Lottie animationData={emailAnimation}></Lottie>
		</div>
      </div>
    </div>
  );
};

export default Subscribe;
