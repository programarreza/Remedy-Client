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
    return <div className="h-screen flex items-center  justify-center">
    <MoonLoader color="#000" />
  </div>
  }
  if (isError) {
    return <h2>Something wrong: {error}</h2>;
  }

  return (
    <div className="lg:w-[1000px] mx-auto min-h-screen">
      <Table>
        <Table.Head>
          <Table.HeadCell>SL.</Table.HeadCell>
          <Table.HeadCell>Profile</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
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
