import RecentBlogsCart from "./RecentBlogsCart";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";

const RecentBlogs = () => {
  const axios = useAxios();

  const getRecentBlogs = async () => {
    const response = await axios.get("/recent-blog");
    return response;
  };

  const {
    data: recentBlogs,
    isLoading,
    isError,
    error,
    // refetch,
  } = useQuery({
    queryKey: ["recentBlogs"],
    queryFn: getRecentBlogs,
  });

  if (isLoading) {
    return <div className="h-screen flex items-center  justify-center">
    <MoonLoader color="#000" />
  </div>
  }
  if (isError) {
    return <h2>Something wrong: {error}</h2>;
  }

  

  return (
    <div className="px-14 bg-[#031525] text-white">
      <h2 className="text-5xl font-bold pt-12 text-center">Recent Blogs</h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
        {recentBlogs?.data?.map((blog, index) => (
          <RecentBlogsCart key={index} blog={blog}></RecentBlogsCart>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
