import NextButton from '@components/button/NextButton';
import { ReactComponent as Search } from '@assets/Icons/search.svg';
import RecommendItem from '@components/item/RecommendItem';
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
				<div className='locationSearch'>
					<p className='locationSearch__title'>새로움을 경험할 장소는 어디인가요?</p>
					<div className='locationSearch__input'>
						<input className='locationSearch__input--input' type='text'/>
						<div className='locationSearch__input--icon'><Search/></div>
					</div>
					<a className='locationSearch__link'>내 위치 검색</a>
				</div>
				<div className='recommend'>
					<p className='recommend__title'>여기는 어떠세요?</p>
					<div className='recommend__wrapper'>
						<RecommendItem label='강원도 철원 (추천)'/>
						<RecommendItem label='강원도 속초 (추천)'/>
						<RecommendItem label='강원도 양양 (추천)'/>
					</div>
				</div>
			</div>
			<NextButton/>
		</div>
	);
};

export default Home;