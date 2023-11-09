import useBlogs from "../../Hooks/useBlogs";
import WishlistCart from "./WishlistCart";


const Wishlist = () => {
	const { data, isLoading, refetch } = useBlogs();

  
  if (isLoading) {
    <h2>Loading...</h2>;
  }
  
  if(data?.wishlist?.length <= 0){
    return <div className="h-[90vh] flex justify-center items-center text-4xl font-bold"> Blog Not Available</div>
  }
  

  return (
    <div className="grid grid-cols-3 gap-5">
      {data?.wishlist?.map((item, index) => (
        <WishlistCart key={index} item={item} refetch={refetch}></WishlistCart>
      ))}
    </div>
  );
};

export default Wishlist;
