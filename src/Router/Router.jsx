import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Wishlist from "../Pages/Wishlist/Wishlist";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "add-blog",
				element: <AddBlog></AddBlog>
			},
			{
				path: "all-blogs",
				element: <AllBlogs></AllBlogs>
			},
			{
				path: "featured-blogs",
				element: <FeaturedBlogs></FeaturedBlogs>
			},
			{
				path: "wishlist",
				element: <Wishlist></Wishlist>
			},
			{
				path: "login",
				element: <Login></Login>
			},
			{
				path: "register",
				element: <Register></Register>
			}
		]
	}
])

export default router;