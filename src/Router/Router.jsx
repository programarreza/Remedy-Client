import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import BlogUpdate from "../Pages/BlogUpdate/BlogUpdate";
import Error from "../Pages/Error/Error";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Wishlist from "../Pages/Wishlist/Wishlist";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "add-blog",
				element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
			},
			{
				path: "all-blogs",
				element: <AllBlogs></AllBlogs>
			},
			{
				path: "featured-blogs",
				element: <PrivateRoute><FeaturedBlogs></FeaturedBlogs></PrivateRoute>
			},
			{
				path: "wishlist",
				element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
			},
			{
				path: "login",
				element: <Login></Login>
			},
			{
				path: "register",
				element: <Register></Register>
			},
			{
				path: "/blog-details/:id",
				element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
				loader: ({params}) => fetch(`https://remedy-server.vercel.app/blog-details/${params.id}`)
			},
			{
				path: "/blog-update/:id",
				element: <BlogUpdate></BlogUpdate>,
				loader: ({params}) => fetch(`https://remedy-server.vercel.app/blog-update/${params.id}`)
			}
		]
	}
])

export default router;