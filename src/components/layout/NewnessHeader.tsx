import { ReactComponent as ChevronLeft } from '@assets/Icons/chevron-left.svg';

import '@styles/components/layout/Header.scss'
/**
 * 뒤로가기 button이 있는 Header
 * 
 * @author 2ee000
 * @since 2023.05.16
 */
const NewnessHeader = () => {
	return (
		<div>
			<div className='header home-header'>
				<div className='header--button__back'> // 페이지 이동 추후 추가(이전 페이지)
					<ChevronLeft/>
				</div>
				<div className='header--button__login'>Login</div>	// 로그인 시 스토리지or쿠키 확인 후 로그인이 되었다면 header--button__login 대신 profile image로 변경, login page로 이동
			</div>			
		</div>
	);
};

export default NewnessHeader;