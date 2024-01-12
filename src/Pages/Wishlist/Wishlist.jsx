import useBlogs from "../../Hooks/useBlogs";
import WishlistCart from "./WishlistCart";
import { MoonLoader } from "react-spinners";


const Wishlist = () => {
	const { data, isLoading, refetch } = useBlogs();

  
  if (isLoading) {
    return <div className="h-screen flex items-center bg-[#031525] justify-center">
    <MoonLoader color="#fff" />
  </div>
  }
  
  if(data?.wishlist?.length <= 0){
    return <div className="h-[90vh] flex justify-center items-center text-4xl font-bold"> Blog Not Available</div>
  }
  

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-screen bg-[#031525] px-12">
      {data?.wishlist?.map((item, index) => (
        <WishlistCart key={index} item={item} refetch={refetch}></WishlistCart>
      ))}
    </div>
  );
};

export default Wishlist;
