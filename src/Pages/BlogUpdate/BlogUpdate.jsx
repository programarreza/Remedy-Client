import { useLoaderData } from "react-router-dom";
import { Button, TextInput, Textarea } from "flowbite-react";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

const BlogUpdate = () => {
  const axios = useAxios();
  const blogs = useLoaderData();
  const { _id, title, image, shortDescription, longDescription, category } =
    blogs;
  console.log(title);

  const handleUpdateBlog = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const image = form.get("image");
    const category = form.get("category");
    const shortDescription = form.get("shortDescription");
    const longDescription = form.get("longDescription");

    const blog = {
      title,
      image,
      category,
      shortDescription,
      longDescription,
    };

    axios
      .put(`/blog-update/${_id}`, blog)
      .then((res) => {
        console.log(res.data);
        toast.success("Updated Successfully 👏");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-24">
      <h2 className="text-5xl text-center font-semibold mt-12 mb-8">
        Update Blog
      </h2>
      <form onSubmit={handleUpdateBlog}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <TextInput
              name="title"
              defaultValue={title}
              id="input-gray"
              placeholder="Title"
              required
              color="gray"
            />
          </div>
          <div>
            <TextInput
              defaultValue={image}
              name="image"
              id="input-gray"
              placeholder="image URL"
              required
              color="gray"
            />
          </div>
          <select
            defaultValue={category}
            name="category"
            className="select select-bordered rounded-md border border-gray-300"
            required
          >
            <option disabled selected>
              Category
            </option>
            <option>Development</option>
            <option>Food</option>
            <option>Business </option>
            <option>Travel</option>
            <option>Health </option>
            <option>Fashion </option>
          </select>
          <div>
            <TextInput
              defaultValue={shortDescription}
              name="shortDescription"
              id="input-gray"
              placeholder="Short Description"
              required
              color="gray"
            />
          </div>
        </div>
        <div className="max-w-7xl mt-4">
          <Textarea
            defaultValue={longDescription}
            name="longDescription"
            id="comment"
            placeholder="Long Description"
            required
            rows={4}
          />
        </div>

        <div className="flex justify-center mt-4">
          <Button type="submit" color="gray">
            Update Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogUpdate;
