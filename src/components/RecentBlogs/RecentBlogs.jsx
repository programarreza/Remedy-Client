import useBlogs from "../../Hooks/useBlogs";
import RecentBlogsCart from "./RecentBlogsCart";

const RecentBlogs = () => {
  const { data, isLoading} = useBlogs();

  if(isLoading){
		return <h2>Loading....</h2>
	}
  
  return (
    <div>
      <h2 className="text-5xl font-bold my-12 text-center">Recent Blogs</h2>
      <div className="grid grid-cols-3 gap-5 my-12">
        {data?.recentBlog?.map((blog) => (
          <RecentBlogsCart key={blog._id} blog={blog}></RecentBlogsCart>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
