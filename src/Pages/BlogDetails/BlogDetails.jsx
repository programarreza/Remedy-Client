import { useLoaderData } from "react-router-dom";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import Comments from "../../components/Comments/Comments";
import useBlogs from "../../Hooks/useBlogs";
import { useEffect } from "react";

const BlogDetails = () => {
  const [comments, setComments] = useState([]);
  const blogs = useLoaderData();
  const axios = useAxios();
  const { user } = useAuth();
  const [newComment, setNewComment] = useState();
  const { _id, title, image, shortDescription, longDescription } = blogs;
  const { data, isLoading, isFetching, refetch } = useBlogs();

  if (isLoading) {
    <h2>Loading...</h2>;
  }
  useEffect(() => {
    axios
      .get(`/comment/?blog_id=${_id}`)
      .then((res) => {
        refetch();
        console.log(res.data);
        setComments(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id, axios, refetch]);

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
        refetch();
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
          <div className="flex gap-12">
            <Button
              onClick={handleComment}
              type="submit"
              outline
              gradientDuoTone="purpleToPink"
            >
              Post Now
            </Button>
            <Link to={`/blog-details/${_id}`}>
              <Button outline gradientDuoTone="purpleToPink">
                Update
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      <div>
        <section className="bg-white dark:bg-gray-900 pt-8 lg:pt-16 antialiased">
          <div className="max-w-3xl  px-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                Discussion ({data?.comment?.length})
                <div>
                  {comments.map((blogComment, i) => (
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
