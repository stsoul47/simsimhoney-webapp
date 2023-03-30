import { SocialProps } from "@interface/socialProps";
import '@styles/components/socialLogin/socialLogin.scss';

const KakaoButton = ({title}: SocialProps) => {
	return (
		<div className="social-login__wrapper kakao">
			<i className="social-login__icon kakao"></i>
			<div className="social-login__title kakao">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default KakaoButton;