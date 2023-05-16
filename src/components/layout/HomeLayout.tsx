import { Outlet } from "react-router-dom";
import HomeHeader from "./HomeHeader";

import '@styles/components/layout/Layout.scss'
/**
 * Logo가 있는 Header를 포함한 layout
 * 
 * @author 2ee
 * @since 2023.05.16
 */
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