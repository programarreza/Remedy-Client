import { useEffect, useState } from "react";
import RecentBlogsCart from "./RecentBlogsCart";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const RecentBlogs = () => {
  // const [recentBlog, setRecentBlog] = useState([])
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
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getRecentBlogs,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Something wrong: {error}</h2>;
  }

  // console.log(blogs.data);

  // useEffect(() => {
  //   // axios.get("/recent-blog")
  //   fetch("http://localhost:5000/recent-blog")
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setRecentBlog(data)
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })

  // },[])

  return (
    <div>
      <h2 className="text-5xl font-bold my-12 text-center">Recent Blogs</h2>
      <div className="grid grid-cols-3 gap-5 my-12">
        {recentBlogs?.data?.map((blog) => (
          <RecentBlogsCart key={blog._id} blog={blog}></RecentBlogsCart>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
