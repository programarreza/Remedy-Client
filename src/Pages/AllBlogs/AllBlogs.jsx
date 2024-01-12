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
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    axios
      .get(`/blog?category=${category}&title=${searchValue}`)
      .then((res) => {
        setBlogs(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, axios, searchValue]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center  justify-center bg-[#031525]">
        <MoonLoader color="#fff" />
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
      <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-6 bg-[#031525] py-4 px-4">
      <div className="bg-[#031525] hidden md:block">
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
              className="border py-2 w-full md:w-auto px-12 rounded-lg border-[#D1A054] outline-[#D1A054]"
              type="text"
              placeholder="Search by Title"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
      </div>
      </div>

      {blogs.length < 1 ? <div className="bg-[#031525] h-[90vh] px-4 md:px-8 lg:px-12"><h1 className="text-white flex justify-center items-center">Data Not Found </h1></div>: <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#031525] px-4 md:px-8 lg:px-12 min-h-screen">
        {blogs?.map((blog) => (
          <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>
        ))}
      </div>}
      
    </>
  );
};

export default AllBlogs;
