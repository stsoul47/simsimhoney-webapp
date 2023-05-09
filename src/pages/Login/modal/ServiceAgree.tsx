import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as X } from '@assets/Icons/x.svg';
import { ReactComponent as Check } from '@assets/Icons/check.svg';
import { loginModalSetting } from '@store/index';
import { useDispatch } from 'react-redux';
import { AgreeCheckBox, NormalButton } from '@components/index';
import '@styles/components/modal/serviceAgree/serviceAgree.scss';
const ServiceAgree = () => {

	const dispatch = useDispatch();
	const [requiredCheck, setRequiredCheck] = useState(false);

	/**
	 * modal close button
	 * 
	 * @author colen
	 */
	const closeModal = () => dispatch(loginModalSetting({content: null, open: false}));
	

	const _onClickHandler = () => {
		console.log("[Service Agree modal] click");
	}

	const _onCancelHandler = () => {
		console.log("[Service Agree] cancel handler");
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
				<div className="agree-body__wrapper">
					<div className='agree-body__main'>
						<p>심심하니 서비스 내 이용자 식별, 회원관리 및 서비스 제공을 위해 zzzgogo5@naver.com 님의 개인정보를 제공합니다. 정보는 개인정보 제3자 제공 동의 시 부터 서비스 탈퇴 시 지체없이 파기됩니다.</p>
						<p className="agree-body--title">개인정보 제3자 제공동의</p>
						<div className="agree-body--checkbox">
							<div className='agree-body--checkbox-left'>
								<Check className={classNames({"on": requiredCheck})} onClick={() => setRequiredCheck(!requiredCheck)}/>
								<p>[필수] 필수 제공 항목</p>
							</div>
							<p>보기</p>
						</div>
						<div className="agree-body--description">
							<p>프로필 정보(닉네임/프로필 사진), 카카오계정(이메일), 플러스 친구 추가상태 및 내역</p>
						</div>
						<p className="agree-body--title">SIMSIMHONEY 서비스 동의</p>
						<div className="agree-body--checkbox">
							<div className='agree-body--checkbox-left'>
								<Check className={classNames({"on": requiredCheck})}/>
								<p>[필수] 서비스 이용약관 동의</p>
							</div>
							<p>보기</p>
						</div>
						<div className="agree-body--checkbox">
							<div className='agree-body--checkbox-left'>
								<Check className={classNames({"on": requiredCheck})}/>
								<p>[필수] 개인정보 수집 및 이용 동의</p>
							</div>
							<p>보기</p>
						</div>
						<div className="agree-body--checkbox">
							<div className='agree-body--checkbox-left'>
								<Check className={classNames({"on": requiredCheck})}/>
								<p>[선택] 마케팅 활용 및 광고성 정보 수신 동의</p>
							</div>
						</div>
						<div className="agree-body--checkbox">
							<div className='agree-body--checkbox-left'>
								<Check className={classNames({"on": requiredCheck})}/>
								<p>[선택] 마케팅 활용 및 광고성 정보 수신 동의</p>
							</div>
						</div>
						<div className="agree-body--checkbox">
							<div className='agree-body--checkbox-left'>
								<Check className={classNames({"on": requiredCheck})}/>
								<p>[선택] 마케팅 활용 및 광고성 정보 수신 동의</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="agree-footer">
				<NormalButton title='취소' onClick={closeModal} buttonClass='cancel-button'/>
				<NormalButton title='동의하고 계속하기' onClick={_onCancelHandler} buttonClass='next-button'/>
			</div>
		</>
	);
};

export default ServiceAgree;