import '@styles/components/layout/HomeHeader.scss'

const HomeHeader = () => {
	return (
		<div className='header home-header'>
			<i className='header--logo'/>
			<div className='header--button__login'>Login</div>
		</div>
	);
};

export default HomeHeader;