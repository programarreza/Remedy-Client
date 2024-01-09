import { Card, Button } from "flowbite-react";
import PropTypes from "prop-types";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const WishlistCart = ({ item, refetch }) => {
  const { _id, blog_id, title, image, shortDescription, category } = item;
  const axios = useAxios();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/delete-wishlist/${_id}`)
        .then((res) => {
          refetch();
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Blog has been deleted.",
              icon: "success",
            });
          }
        });
      
      }
    });
  };

  return (
    <div className="bg-[#031525]">
      <Card className="bg-[#081b29] text-white">
        <img
          src={image}
          alt="Meaningful alt text for an image that is not purely decorative"
          className="h-[250px]"
        />
        <h5 className="text-2xl font-bold tracking-tight">
        {
					title.length > 25 ? <p> {title.slice(0, 26)} </p> : <p>{title}</p>
          }
        </h5>
        <p className="font-normal">
          Category: {category}
        </p>
        <p className="font-normal">
        {
					shortDescription.length > 60 ? <p> {shortDescription.slice(0, 65)} <span className='text-blue-700'>.....</span></p> : <p>{"shortDescription"}</p>
          }
        </p>
        <div className="flex justify-between">
          <Button onClick={handleDelete} outline gradientDuoTone="purpleToPink">
            Remove Wishlist
          </Button>
          <Link to={`/blog-details/${blog_id}`}>
            <Button outline gradientDuoTone="purpleToPink">
              Details
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default WishlistCart;
WishlistCart.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.object,
};
