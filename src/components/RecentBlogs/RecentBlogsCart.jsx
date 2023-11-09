import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

const RecentBlogsCart = ({ blog }) => {
  const axios = useAxios();
  const { _id, title, image, shortDescription, category } = blog;
  const { user } = useAuth();
  const email = user?.email;

  const handleWishlist = () => {
    console.log(_id);
    const wishlist = {
      title,
      image,
      shortDescription,
      category,
      email,
      blog_id: _id,
    };
    console.log(wishlist);

    axios.post("/add-wishlist", wishlist)
    .then((res) => {
      toast.success("added successfully 👏")
      console.log(res.data);
    });
  };

  return (
    <div>
      <Card className="h-[550px]">
        
        <img
          src={image}
          alt="Meaningful alt text for an image that is not purely decorative"
          className="h-[250px]"
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Category: {category}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {
					shortDescription.length > 150 ? <p> {shortDescription.slice(0, 160)} <span className='text-blue-700'>.....</span></p> : <p>{shortDescription}</p>
          }
          </p>
        <div className="flex justify-between">
          <Button
            onClick={handleWishlist}
            outline
            gradientDuoTone="purpleToPink"
          >
            Add to Wishlist
          </Button>
          <Link to={`/blog-details/${_id}`}>
            <Button outline gradientDuoTone="purpleToPink">
              Details
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RecentBlogsCart;
RecentBlogsCart.propTypes = {
  blog: PropTypes.object,
};
