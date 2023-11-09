import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAuth from "./useAuth";

const useBlogs = () => {
  const { user } = useAuth();
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["blogs", "recentBlog", "wishlist"],

    queryFn: async () => {
      const data3 = await fetch(
        `https://remedy-server.vercel.app/add-wishlist/?email=${user?.email}`
      );
      const data1 = await fetch("https://remedy-server.vercel.app/blog");
      
      

      const blogs = await data1.json();
      // const recentBlog = await data2.json();
      const wishlist = await data3.json();
      

      return { blogs, wishlist };
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useBlogs;
