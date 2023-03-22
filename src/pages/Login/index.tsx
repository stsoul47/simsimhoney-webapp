import { ReactComponent as ChevronLeft } from '@assets/Icons/chevron-left.svg';
import '@styles/pages/login/login.scss';
import GoogleButton from '@components/button/GoogleButton';
import NaverButton from '@components/button/NaverButton';
import KakaoButton from '@components/button/KakaoButton';
const Login = () => {
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
						<input type="checkbox" id='checkbox'/>
						<label htmlFor="checkbox"><p><span>서비스 이용약관</span>&nbsp;및&nbsp;<span>개인정보취급방침</span>에 동의하며, </p><p>&nbsp;만 14세 이상입니다.</p></label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;