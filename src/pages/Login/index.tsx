import { ReactComponent as ChevronLeft } from '@assets/Icons/chevron-left.svg';
import '@styles/pages/login/login.scss';

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
						<button>카카오 로그인/회원가입</button>
						<button>네이버 로그인/회원가입</button>
						<button>구글 로그인/회원가입</button>
					</div>
					<div className="login__bottom">
						<input type="checkbox" id='checkbox' />
						<label htmlFor="checkbox"><p>서비스 이용약관</p>&nbsp;및&nbsp;<p>개인정보취급방침</p>에 동의하며, 만 14세 이상입니다.</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;