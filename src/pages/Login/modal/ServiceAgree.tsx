import { ReactComponent as X } from '@assets/Icons/x.svg';
import { loginModalSetting } from '@store/index';
import { useDispatch } from 'react-redux';
import '@styles/components/modal/serviceAgree/serviceAgree.scss';
import { AgreeCheckBox } from '@components/index';
const ServiceAgree = () => {

	const dispatch = useDispatch();

	/**
	 * modal close button
	 * 
	 * @author colen
	 */
	const closeModal = () => dispatch(loginModalSetting({content: null, open: false}));
	

	const _onClickHandler = () => {
		console.log("[Service Agree modal] click");
	}

	return (
		<>
			<div className="agree-header">
				<div className="agree-header__wrapper">
					<p>개인정보 수집 및 제공 동의</p>
					<X onClick={closeModal}/>
				</div>
			</div>	
			<div className="agree-body">
				<div className="agree-checkbox">
					<AgreeCheckBox name="agree" onClick={_onClickHandler} label='전체 동의하기' />
				</div>
			</div>
			<div className="agree-footer"></div>
		</>
	);
};

export default ServiceAgree;