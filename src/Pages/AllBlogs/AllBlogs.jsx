import { useState } from "react";
import useBlogs from "../../Hooks/useBlogs";
import AllBlogsCard from "./AllBlogsCard";
import useAxios from "../../Hooks/useAxios";
import { useEffect } from "react";
import { MoonLoader } from "react-spinners";

const AllBlogs = () => {
  const axios = useAxios();
  const [category, setCategory] = useState("");
  const { data, isLoading,  } = useBlogs(category);
  const [blogs, setBlogs] = useState(data?.blogs)
	
  useEffect(() => {
    axios.get(`/blog?category=${category}`)
	.then(res => {
		setBlogs(res?.data);
	})
	.catch(err => {
		console.log(err);
	})
  }, [category, axios]);

  
  if (isLoading) {
    return <div className="h-screen flex items-center  justify-center">
    <MoonLoader color="#000" />
  </div>
  }

  const categories = [
    "Development",
    "Food",
    "Business",
    "Travel",
    "Health",
    "Fashion",
  ];

  return (
    <>
      <div>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered rounded-md border border-gray-300"
          required
        >
          <option disabled selected>
            Category
          </option>
          {categories?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs?.map((blog) => (
          <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>
        ))}
      </div>
    </>
  );
};

export default AllBlogs;
