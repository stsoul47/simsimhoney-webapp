import { Outlet } from "react-router-dom";
const HomeLayout = () => {
	return (
		<div className="App home">
			{/* header */}
			{/* <HomeHeader/> */}

			{/* main content */}
			<div className="main_body">
				<Outlet />
			</div>
		</div>
	);
};

export default HomeLayout;