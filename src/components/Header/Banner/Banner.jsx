const Banner = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <div className="w-full h-screen bg-[url('https://i.postimg.cc/7h94KWp9/bloging.jpg')] bg-cover bg-center">
        <div
          className="w-full h-full flex  justify-center items-center 
             bg-gray-600/0 backdrop-brightness-75"
        >
          <span className="text-white px-5 text-2xl text-center md:text-start lg:text-4xl font-bold md:w-1/2 md:px-12 ">
          Welcome to Prose Paradise Where Every Page Holds a New Adventure
          </span>
          <span className="w-0 md:w-1/2"></span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
