
import classNames from 'classnames';
import { CheckboxProps } from "@interface/index";
import '@styles/components/checkbox/loginCheckbox.scss';

const AgreeCheckBox = ({name, onClick, checked, label, size="sm"}: CheckboxProps) => {
	return (
		<div className="login-checkbox">
			<div className="login-checkbox__wrapper">
				<input type="checkbox"
					id= { name }
					name = { name }
					onClick={(event)=>onClick(event)}
				/>
				<label htmlFor={ name } className={classNames(size)}>{label}</label>
			</div>
		</div>
	);
};

export default AgreeCheckBox;