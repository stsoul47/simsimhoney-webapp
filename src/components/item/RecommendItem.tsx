import { RecommendItemProps } from "@interface/index";
import { ReactComponent as MapPin } from '@assets/Icons/map-pin.svg';

import '@styles/components/item/recommendItem.scss';
/**
 * Recommend item component
 * 
 * @author 2ee000
 * @since 2023.05.17
 */
const RecommendItem = ({ label }: RecommendItemProps) => {
	return (
    <div className='recommend__item'>
      <i className='recommend__item--icon'><MapPin/></i>
      <p className='recommend__item--title'>{label}</p>
    </div>
	);
};

export default RecommendItem;