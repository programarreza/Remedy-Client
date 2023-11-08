import { Button, TextInput, Textarea } from "flowbite-react";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const AddBlog = () => {
  const axios = useAxios();
  const  {user} = useAuth();

  const handleAddBlog = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const image = form.get("image");
    const category = form.get("category");
    const shortDescription = form.get("shortDescription");
    const longDescription = form.get("longDescription");
    const currentDate = new Date();
    const email = user?.email;
    console.log(email);
    console.log(currentDate);

    const blog = {
      title,
      image,
      category,
      shortDescription,
      longDescription,
      currentDate,
      email
    };

    axios
      .post("/blog", blog)
      .then((res) => {
        console.log(res);
        toast.success("added successfully 👏");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="px-24">
      <h2 className="text-5xl text-center font-semibold mt-12 mb-8">
        Add Blog
      </h2>
      <form onSubmit={handleAddBlog}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <TextInput
              name="title"
              id="input-gray"
              placeholder="Title"
              required
              color="gray"
            />
          </div>
          <div>
            <TextInput
              name="image"
              id="input-gray"
              placeholder="image URL"
              required
              color="gray"
            />
          </div>
          <select
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
            name="longDescription"
            id="comment"
            placeholder="Long Description"
            required
            rows={4}
          />
        </div>

        <div className="flex justify-center mt-4">
          <Button type="submit" color="gray">
            Add Blog
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
