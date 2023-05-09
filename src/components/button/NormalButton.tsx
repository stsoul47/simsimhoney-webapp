import { NormalButtonProps } from "@interface/normalButtonProps";
import '@styles/components/normalButton.scss';


const NormalButton = ({title, onClick, buttonClass}:NormalButtonProps) => {
	return (
		<button 
			className={buttonClass}
			onClick={onClick}		
		>{title}</button>
	);
};

export default NormalButton;