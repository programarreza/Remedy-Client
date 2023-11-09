import { Button, Card } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Comments from "../../components/Comments/Comments";
import { useQuery } from "@tanstack/react-query";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const axios = useAxios();
  const { user } = useAuth();
  const [newComment, setNewComment] = useState();
  const { _id, title, image, shortDescription, longDescription, email } = blogs;
  console.log(image);


  
  const getComment = async() => {
    const response = await axios.get(`/comment/?blog_id=${_id}`);
    return response;
  }
  
    const { data: comment, isLoading, isError, error, refetch } = useQuery({
      queryKey: ["blogs"],
      queryFn: getComment,
    });
  
    if(isLoading){
      return <h2>Loading...</h2>
    }
    if(isError){
      return <h2>Something wrong: {error}</h2>
    }


  const handleComment = () => {
    const userName = user.displayName;
    const userProfile = user.photoURL;
    const postDate = new Date();
    const currentComment = newComment;

    const commentInfo = {
      userName,
      userProfile,
      postDate,
      currentComment,
      blog_id: _id,
    };

    axios
      .post("/comment", commentInfo)
      .then((res) => {
        refetch()
        console.log(res.data);
        toast.success("added successfully 👏");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <Card>
          <img
            src={image}
            alt="Meaningful alt text for an image that is not purely decorative"
            className="h-[450px]"
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {shortDescription}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {longDescription}
          </p>
          {user?.email === email ? (
            ""
          ) : (
            <div className="w-full mt-4">
              <textarea
                className="w-full"
                onChange={(e) => setNewComment(e.target.value)}
                id="comment"
                placeholder="Comment Now"
                required
                rows={4}
              />
            </div>
          )}
          <div className="flex gap-12">
            {user?.email === email ? (
              <div className="border rounded-md flex items-center p-2 font-bold">
                Sorry can not comment on own blog
              </div>
            ) : (
              <Button
                onClick={handleComment}
                type="submit"
                outline
                gradientDuoTone="purpleToPink"
              >
                Post Now
              </Button>
            )}
            {user?.email === email ? (
              <Link to={`/blog-update/${_id}`}>
                <Button outline gradientDuoTone="purpleToPink">
                  Update
                </Button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </Card>
      </div>

      <div>
        <section className="bg-white dark:bg-gray-900 pt-8 lg:pt-16 antialiased">
          <div className="max-w-3xl  px-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                Discussion ({comment?.data?.length})
                <div>
                  {comment?.data?.map((blogComment, i) => (
                    <Comments key={i} blogComment={blogComment}></Comments>
                  ))}
                </div>
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;
