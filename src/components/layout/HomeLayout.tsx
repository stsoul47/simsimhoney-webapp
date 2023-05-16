import { Outlet } from "react-router-dom";
import HomeHeader from "./HomeHeader";

import '@styles/components/layout/HomeLayout.scss'

const HomeLayout = () => {
	return (
		<div className="App home">
			{/* header */}
			<HomeHeader />

			{/* main content */}
			<div className="main_body">
				<Outlet />
			</div>
		</div>
	);
};

export default HomeLayout;