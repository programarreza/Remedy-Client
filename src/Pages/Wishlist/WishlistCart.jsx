import { Card, Button } from "flowbite-react";
import PropTypes from "prop-types";



const WishlistCart = ({ item }) => {
  const { _id, title, image, shortDescription, category } = item;

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
          <Button
            outline
            gradientDuoTone="purpleToPink"
          >
            Remove Wishlist
          </Button>
            <Button outline gradientDuoTone="purpleToPink">
              Details
            </Button>
        </div>
      </Card>
    </div>
  );
};

export default WishlistCart;
WishlistCart.propTypes = {
	item: PropTypes.object,
}
