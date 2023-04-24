import { RootState } from "@store/index";
import { ModalState } from "@store/modal";
import { useSelector } from "react-redux";

const LoginModal = () => {
	const modal:ModalState = useSelector((state:RootState) => state.modal);

	return (
		<div className="dim login-terms">
			<div className="login-terms__container">
				{ modal.loginContent }
			</div>
		</div>
	);
};

export default LoginModal;