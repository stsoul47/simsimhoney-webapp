import {useEffect} from 'react';
import { RootState } from "@store/index";
import { ModalState } from "@store/modal";
import { useSelector } from "react-redux";
import '@styles/components/modal/loginModal.scss';
const LoginModal = () => {
	const modal:ModalState = useSelector((state:RootState) => state.modal);
	useEffect(() => {
		document.body.style.cssText = `overflow: hidden`;
		return () => {
			document.body.style.cssText = `overflow: auto`;
		}
	},[])
	
	return (
		<div className="dim login-terms">
			<div className="login-terms__container">
				{ modal.loginContent }
			</div>
		</div>
	);
};

export default LoginModal;