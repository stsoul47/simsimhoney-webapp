import classNames from 'classnames';
import { CheckboxProps } from "@interface/index";
import '@styles/components/checkbox/loginCheckbox.scss';
import { useDispatch } from 'react-redux';
import { loginModalSetting } from '@store/index';
import ServiceAgree from '@pages/Login/modal/ServiceAgree';


const LoginCheckbox = ({name, onClick, checked, size="sm"}: CheckboxProps) => {

	const dispatch = useDispatch();

	const openServiceModal = () => {
		dispatch(loginModalSetting({content: <ServiceAgree />, open: true}));
	}

	return (
		<div className="login-checkbox">
			<div className="login-checkbox__wrapper">
				<input type="checkbox"
					id= { name }
					name = { name }
					onClick={openServiceModal}
					checked={ false }
				/>
				<label htmlFor={ name } className={classNames(size)}></label>
				<p className="login-checkbox--label">
					<span className="login-checkbox--link" onClick={openServiceModal}>서비스 이용약관</span> 및 <span className="login-checkbox--link">개인정보취급방침</span>에 동의하며, <span>만 14세 이상입니다.</span>
				</p>
			</div>
		</div>
	);
};

export default LoginCheckbox;