import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import WishlistCart from "./WishlistCart";

const Wishlist = () => {
	const {user} = useAuth();
	const axios = useAxios();
	const [wishlist, setWishlist] = useState(null)
	const url = `http://localhost:5000/add-wishlist/?email=${user?.email}`
	useEffect(() => {
		axios.get(url)
		.then(data => {
			console.log(data.data);
			setWishlist(data.data);
		})
	},[axios, url])

	return (
		<div className="grid grid-cols-3 gap-5">
			{
				wishlist?.map(item => <WishlistCart key={item._id} item={item}></WishlistCart>)
			}
		</div>
	);
};

export default Wishlist;