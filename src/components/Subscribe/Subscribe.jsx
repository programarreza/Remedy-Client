import toast from "react-hot-toast";

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for subscribing to our newsletter')
 
  }
  return (
    <div className="w-full h-[70vh] bg-[url('https://i.postimg.cc/6q71tfSW/istockphoto-1325195247-170667a.webp')] bg-cover bg-center shadow-lg">
      <div className="w-full h-full  md:flex  justify-center items-center ">
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl md:text-5xl text-center">
            Subscribe to stay informed
          </h2>
          <p className="text-center my-4">
            Shortest way to explore what will happen on Inconference
          </p>

          <div className="mt-5 mx-auto text-center">
            <form onSubmit={handleSubmit}>
            <input
              className="p-4 md:px-24 border-r-0 bg-transparent border rounded-lg rounded-r-none outline-none "
              type="email"
              placeholder="your email address.."
              required
            />
            <button type="submit" className="border border-gray-500 border-l-0 py-4 bg-[#031525] px-2 rounded-r-md ">
              Subscribe!
            </button>
            </form>
          </div>
        </div>
		<div className="md:w-1/2 ">
			<img className="w-full" src="https://i.postimg.cc/c43XhmnW/spam-email-icon-3d-render-illustration-47987-10131-removebg-preview.png" alt="" />
		</div>
      </div>
    </div>
  );
};

export default Subscribe;
