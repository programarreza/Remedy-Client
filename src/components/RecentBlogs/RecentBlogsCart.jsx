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
      <Card className="min-h-[400px] bg-[#081b29] text-white">
        
        {/* <div className="min-h-[250px]"> */}
        <img
          src={image}
          alt="Meaningful alt text for an image that is not purely decorative"
          className=" min-h-[250px]"
        />
        {/* </div> */}
        <h5 className="text-2xl font-bold  text-white">
        {
					title.length > 30 ? <p> {title.slice(0, 25)} </p> : <p>{title}</p>
          }
        </h5>
        <p className="font-normal dark:text-gray-400 text-white">
          Category: {category}
        </p>
        <p className="font-normal dark:text-gray-400 text-white">
          {
					shortDescription.length > 100 ? <p> {shortDescription.slice(0, 155)} <span className='text-blue-700'>.....</span></p> : <p>{shortDescription}</p>
          }
          </p>
        <div className="flex justify-between">
          <Button
            onClick={handleWishlist}
            outline
            gradientDuoTone="purpleToPink"
            className="bg-red-500 text-white  rounded-md"
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
