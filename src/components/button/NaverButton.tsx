import { SocialProps } from "@interface/index";
import '@styles/components/socialLogin/socialLogin.scss';
const NaverButton = ({ title }: SocialProps) => {
	return (
		<div className="social-login__wrapper naver">
			<i className="social-login__icon naver"></i>
			<div className="social-login__title naver">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default NaverButton;