import useAxios from "../../Hooks/useAxios";
import FeaturedBlogsCard from "./FeaturedBlogsCard";
import { Table } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";

const FeaturedBlogs = () => {
  const axios = useAxios();

  const getFeatureBlogs = async () => {
    const response = await axios.get("/top-blog");
    return response;
  };

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getFeatureBlogs,
  });

  if (isLoading) {
    return <div className="h-screen flex items-center  justify-center bg-[#031525]">
    <MoonLoader color="#fff" />
  </div>
  }
  if (isError) {
    return <h2>Something wrong: {error}</h2>;
  }

  return (
    <div className="lg:px-24 mx-auto min-h-screen bg-[#031525]">
      <Table >
        <Table.Head >
          <Table.HeadCell className="bg-[#081b29] text-white py-4">SL.</Table.HeadCell>
          <Table.HeadCell className="bg-[#081b29] text-white">Profile</Table.HeadCell>
          <Table.HeadCell className="bg-[#081b29] text-white">Name</Table.HeadCell>
          <Table.HeadCell className="bg-[#081b29] text-white">Title</Table.HeadCell>
        </Table.Head>
      </Table>
      <div className="">
        {data?.data?.map((topBlog, index) => (
          <FeaturedBlogsCard
            topBlog={topBlog}
            key={index}
            index={index}
          ></FeaturedBlogsCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
