import { ReactComponent as ChevronLeft } from '@assets/Icons/chevron-left.svg';

import '@styles/components/layout/NewnessHeader.scss'

const NewnessHeader = () => {
	return (
		<div>
			<div className='header home-header'>
				<div className='header--button__back'>
					<ChevronLeft/>
				</div>
				<div className='header--button__login'>Login</div>
			</div>			
		</div>
	);
};

export default NewnessHeader;