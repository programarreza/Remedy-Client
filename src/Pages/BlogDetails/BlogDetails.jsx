import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
	const blogs = useLoaderData()
	console.log(blogs);
	return (
		<div>
			blog details
		</div>
	);
};

export default BlogDetails;