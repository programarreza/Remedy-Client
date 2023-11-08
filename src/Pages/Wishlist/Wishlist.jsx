import useBlogs from "../../Hooks/useBlogs";
import WishlistCart from "./WishlistCart";


const Wishlist = () => {
	const { data, isLoading, refetch } = useBlogs();
  
  if (isLoading) {
    <h2>Loading...</h2>;
  }

  console.log(data?.wishlist);

  return (
    <div className="grid grid-cols-3 gap-5">
      {data?.wishlist?.map((item) => (
        <WishlistCart key={item._id} item={item} refetch={refetch}></WishlistCart>
      ))}
    </div>
  );
};

export default Wishlist;
