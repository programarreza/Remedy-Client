import PropTypes from "prop-types";
import { Card, Button } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AllBlogsCard = ({ blog }) => {
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
    };
    console.log(wishlist);

    axios.post("/add-wishlist", wishlist)
    .then((res) => {
      toast.success("added successfully 👏")
      console.log(res.data);
    });
  };

  return ( 
    <div className="bg-[#031525] text-white">
      <Card className="bg-[#031525] text-white">
        <img
          src={image}
          alt="Meaningful alt text for an image that is not purely decorative"
          className="h-[250px]"
        />
        <h5 className="text-2xl font-bold tracking-tight">
          {title}
        </h5>
        <p className="font-normal">
          Category: {category}
        </p>
        <p className="font-normal">
        {
					shortDescription.length > 60 ? <p> {shortDescription.slice(0, 80)} <span className='text-blue-700'>.....</span></p> : <p>{"shortDescription"}</p>
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

export default AllBlogsCard;
AllBlogsCard.propTypes = {
  blog: PropTypes.object,
}
