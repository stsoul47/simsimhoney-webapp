import { Outlet } from "react-router-dom";
import NewnessHeader from "./NewnessHeader";

import '@styles/components/layout/Layout.scss'
/**
 * 뒤로가기 button이 있는 Header를 포함한 layout
 * 
 * @author 2ee
 * @since 2023.05.16
 */
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