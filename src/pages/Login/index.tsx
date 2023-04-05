import { useDispatch, useSelector } from 'react-redux';
import { ModalState, loginModalSetting, RootState } from '@store/index';
import { ReactComponent as ChevronLeft } from '@assets/Icons/chevron-left.svg';
import { GoogleButton, NaverButton, KakaoButton, LoginModal, LoginCheckbox } from '@components/index';
import ServiceAgree from './modal/ServiceAgree';
import '@styles/pages/login/login.scss';
const Login = () => {

	const modal:ModalState = useSelector((state:RootState) => state.modal);
	const dispatch = useDispatch();

	const AgreeService = (event:any) => {
		event.stopPropagation();
		dispatch(loginModalSetting({content: <ServiceAgree />, open: true}));
	}

	const _checkboxHandler = (event: any) => {
		console.log("[checkbox Handler] event", event);
	}

	return (
		<div className="app login">
			<div className="login__back-header">
				<ChevronLeft />
			</div>
			<div className="login__wrapper">
				<i className="login__wrapper--logo"></i>
				<div className="login__content">
					<div className="button__wrapper">
						<KakaoButton title="카카오 로그인/회원가입"/>
						<NaverButton title="네이버 로그인/회원가입"/>
						<GoogleButton title="구글 로그인/회원가입"/>
					</div>
					<div className="login__bottom">
						<LoginCheckbox name='terms' onClick={_checkboxHandler}/>
					</div>
				</div>
			</div>

			{ modal.loginOpen && <LoginModal /> }
		</div>
	);
};

export default Login;