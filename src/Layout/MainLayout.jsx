import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav/Nav";

const MainLayout = () => {
	return (
		<div className="font-grotesk">
			<Nav></Nav>
			<Outlet/>
		</div>
	);
};

export default MainLayout;