import { CheckboxProps } from "@interface/index";

const LoginCheckbox = ({name, onClick, checked, size}: CheckboxProps) => {
	return (
		<div className="login-checkbox">
			<div className="login-checkbox__wrapper">
				<input type="checkbox" 
					name = { name }
					onClick={(event)=>onClick(event)}
				/>
				<p className="login-checkbox--label">
					<span>서비스 이용약관</span>및<span>개인정보취급방침</span>에 동의하며, <span>만 14세 이상입니다.</span>
				</p>
			</div>
		</div>
	);
};

export default LoginCheckbox;