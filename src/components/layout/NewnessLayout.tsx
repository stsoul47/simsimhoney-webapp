import { Outlet } from "react-router-dom";
import NewnessHeader from "./NewnessHeader";

import '@styles/components/layout/NewnessLayout.scss'

const NewnessLayout = () => {
	return (
		<div className="App newness">
			{/* header */}
			<NewnessHeader/>

			{/* main content */}
			<div className="main_body">
				<Outlet />
			</div>
		</div>
	);
};

export default NewnessLayout;