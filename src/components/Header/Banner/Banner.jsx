const Banner = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <div className="w-full h-screen bg-[url('https://i.postimg.cc/rFqp7FYQ/Free-Metaverse-Powerpoint-Background.webp')] bg-cover bg-center">
        <div
          className="w-full h-full flex  justify-center items-center 
             bg-gray-600/0 backdrop-brightness-75"
        >
          <span className="text-white text-6xl font-bold w-1/2 text-center">
            Welcome Your Blog 
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
