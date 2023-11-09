import { useState } from "react";
import useBlogs from "../../Hooks/useBlogs";
import AllBlogsCard from "./AllBlogsCard";
import useAxios from "../../Hooks/useAxios";
import { useEffect } from "react";

const AllBlogs = () => {
  const axios = useAxios();
  const [category, setCategory] = useState("");
  const { data, isLoading } = useBlogs(category);
  const [blogs, setBlogs] = useState(data?.blogs);

  useEffect(() => {
    axios
      .get(`/blog?category=${category}`)
      .then((res) => {
        setBlogs(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, axios]);

  if (isLoading) {
    <h2>Loading....</h2>;
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

        {/* search */}
        <div>

          
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {blogs?.map((blog) => (
          <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>
        ))}
      </div>
    </>
  );
};

export default AllBlogs;
