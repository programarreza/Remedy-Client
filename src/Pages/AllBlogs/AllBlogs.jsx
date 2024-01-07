import { useState } from "react";
import useBlogs from "../../Hooks/useBlogs";
import AllBlogsCard from "./AllBlogsCard";
import useAxios from "../../Hooks/useAxios";
import { useEffect } from "react";
import { MoonLoader } from "react-spinners";

const AllBlogs = () => {
  const axios = useAxios();
  const [category, setCategory] = useState("");
  const { data, isLoading } = useBlogs(category);
  const [blogs, setBlogs] = useState(data?.blogs);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`/blog?category=${category}&title=${searchQuery}`)
      .then((res) => {
        setBlogs(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, axios, searchQuery]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center  justify-center">
        <MoonLoader color="#000" />
      </div>
    );
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
    {/* search and filter to category */}
      <div className="flex justify-center  gap-6 bg-[#031525] py-4">
      <div className="bg-[#031525]">
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

      <div>
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-md "
        />
      </div>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#031525] px-12 min-h-screen">
        {blogs?.map((blog) => (
          <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>
        ))}
      </div>
    </>
  );
};

export default AllBlogs;
