import { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

import { config } from '@config/env';
import { SocialProps } from '@interface/socialProps';

import '@styles/components/socialLogin/socialLogin.scss';

const GoogleButton = ({title}: SocialProps) => {

	useEffect(()=> {
		function start() {
      gapi.client.init({
        clientId: config.GOOGLE_API_KEY,
        scope: 'email',
      });
		}
    gapi.load('client:auth2', start);
	},[])

	const _responseGoogleSuccess = (response: any) => {
		console.log("[Google Login] success", response);	
	}

	const _responseGoogleFail = (response: any) => {
		console.log("[Google Login] failed", response);	
	}

	/**
	 * 
	 * @param renderProps google login api가 제공하는 props
	 * @param title google button의 명칭
	 * @returns 
	 */
	const googleRender = (renderProps: { onClick: () => void, disabled?: boolean }) => {
		return (
			<div className="social-login__wrapper google" onClick={renderProps.onClick}>
				<i className="social-login__icon google"></i>
				<div className="social-login__title google">
					<p>{title}</p>
				</div>
			</div>
		)
	}

	return (
		<GoogleLogin
    clientId={config.GOOGLE_API_KEY}
    buttonText="Login"
    onSuccess={_responseGoogleSuccess}
    onFailure={_responseGoogleFail}
    cookiePolicy={'single_host_origin'}
		render={(renderProps) => googleRender(renderProps)}
  />
	);
};

export default GoogleButton;