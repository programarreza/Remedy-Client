import { useEffect, useState } from "react";
import RecentBlogsCart from "./RecentBlogsCart";
import useAxios from "../../Hooks/useAxios";

const RecentBlogs = () => {
  const axios = useAxios();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/recent-blog")
	.then((res) => setBlogs(res.data));
  }, [axios]);
  
  return (
    <div>
      <h2 className="text-5xl font-bold my-12 text-center">Recent Blogs</h2>
      <div className="grid grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <RecentBlogsCart key={blog._id} blog={blog}></RecentBlogsCart>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
