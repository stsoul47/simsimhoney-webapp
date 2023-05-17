import { ReactComponent as ChevronRight } from '@assets/Icons/chevron-right.svg';

import '@styles/components/button/nextButton.scss';
const NextButton = () => {
	return (
		<div className='button'>
      <p className='button__title'>다음 단계</p>
      <div className='button__icon'><ChevronRight/></div>
		</div>
	);
};

export default NextButton;