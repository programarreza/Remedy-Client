import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav/Nav";
import { Toaster } from "react-hot-toast";
import BlogFooter from "../components/BlogFooter/BlogFooter";

const MainLayout = () => {
	return (
		<div className="font-grotesk mx-auto">
			<Nav></Nav>
			<Outlet/>
			<BlogFooter></BlogFooter>
			<Toaster/>
		</div>
	);
};

export default MainLayout;