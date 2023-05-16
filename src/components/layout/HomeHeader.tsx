import '@styles/components/layout/Header.scss'
/**
 * Logo가 있는 Header
 * 
 * @author 2ee000
 * @since 2023.05.16
 */
const HomeHeader = () => {
	return (
		<div className='header home-header'>
			<i className='header--logo'/> // 페이지 이동 추후 추가(home)
			<div className='header--button__login'>Login</div>	// 로그인 시 스토리지or쿠키 확인 후 로그인이 되었다면 header--button__login 대신 profile image로 변경, login page로 이동
		</div>
	);
};

export default HomeHeader;