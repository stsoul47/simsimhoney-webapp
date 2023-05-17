import NextButton from '@components/button/NextButton';
import { ReactComponent as MapPin } from '@assets/Icons/map-pin.svg';
import { ReactComponent as Search } from '@assets/Icons/search.svg';
import '@styles/pages/home/home.scss';
/**
 * Home Page
 * 
 * @author 2ee000
 * @since 2023.05.17
 */
const Home = () => {
	return (
		<div className='home__wrapper'>
			<div className='home__content'>
				<div className='search'>
					<p className='search__title'>새로움을 경험할 장소는 어디인가요?</p>
					<div className='search__input'>
						<input className='search__input--input' type='text'/>
						<div className='search__input--icon'><Search/></div>
					</div>
					<a className='search__link'>내 위치 검색</a>
				</div>
				<div className='recommend'>
					<p className='recommend__title'>여기는 어떠세요?</p>
					<div className='recommend__wrapper'>
						<div className='list'>
							<i className='list__icon'><MapPin/></i>
							<p className='list__title'>강원도 철원 (추천)</p>
						</div>
						<div className='list'>
							<i className='list__icon'><MapPin/></i>
							<p className='list__title'>강원도 속초 (추천)</p>
						</div>
						<div className='list'>
							<i className='list__icon'><MapPin/></i>
							<p className='list__title'>강원도 양양 (추천)</p>
						</div>
					</div>
				</div>
			</div>
			<NextButton/>
		</div>
	);
};

export default Home;