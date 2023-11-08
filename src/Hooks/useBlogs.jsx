import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useBlogs = () => {
	const {user} = useAuth();
	const { data, isLoading, isFetching, refetch } = useQuery({
		queryKey: ["blogs", "category"],
		queryFn: async () => {
			const data3 = await fetch(`http://localhost:5000/add-wishlist/?email=${user?.email}`)
			const data1 = await fetch("http://localhost:5000/blog");
			const data2 = await fetch("http://localhost:5000/recent-blog");
			const data4 = await fetch("http://localhost:5000/comment");
			
			const blogs = await data1.json()
			const recentBlog = await data2.json()
			const wishlist = await data3.json()
			const comment = await data4.json()


			return {blogs, recentBlog, wishlist, comment}
		}
	})
  return { data, isLoading, isFetching, refetch }
};

export default useBlogs;
