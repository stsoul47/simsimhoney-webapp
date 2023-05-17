import { ReactComponent as ChevronRight } from '@assets/Icons/chevron-right.svg';

import '@styles/components/button/nextButton.scss';
/**
 * Next Button
 * 
 * @author 2ee000
 * @since 2023.05.17
 */
const NextButton = () => {
	return (
		<div className='nextButton'>
      <p className='nextButton__title'>다음 단계</p>
      <div className='nextButton__icon'><ChevronRight/></div>
		</div>
	);
};

export default NextButton;