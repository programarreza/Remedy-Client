import { Card, Button } from "flowbite-react";
import PropTypes from "prop-types";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const WishlistCart = ({ item, refetch }) => {
  const { _id, title, image, shortDescription, category } = item;
  const axios = useAxios();

  const handleDelete = () => {
    console.log(_id);
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
    <div>
      <Card>
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
          {shortDescription}
        </p>
        <div className="flex justify-between">
          <Button onClick={handleDelete} outline gradientDuoTone="purpleToPink">
            Remove Wishlist
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

export default WishlistCart;
WishlistCart.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.object,
};
