import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav/Nav";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div className="font-grotesk max-w-7xl mx-auto">
			<Nav></Nav>
			<Outlet/>
			<Toaster/>
		</div>
	);
};

export default MainLayout;