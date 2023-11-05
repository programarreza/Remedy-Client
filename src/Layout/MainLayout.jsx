import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav/Nav";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<div className="font-grotesk">
			<Nav></Nav>
			<Outlet/>
			<Toaster/>
		</div>
	);
};

export default MainLayout;