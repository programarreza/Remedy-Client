import { Card, Button } from "flowbite-react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const RecentBlogsCart = ({ blog }) => {
  const { _id, title, image, shortDescription, category } = blog;
  return (
    <div>
      <Card >
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
          <Button outline gradientDuoTone="purpleToPink">
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
RecentBlogsCart.propTypes ={
	blog: PropTypes.node,
}