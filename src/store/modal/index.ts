const MODAL_SETTING = 'modal/MODAL_SETTING' as const;
const MODAL_LOGIN_SETTING = 'modal/MODAL_LOGIN_SETTING' as const;
type ModalAction = 
	| ReturnType<typeof modalSetting>
	| ReturnType<typeof loginModalSetting>
;


export const modalSetting = (diff: boolean) => ({
	type: MODAL_SETTING,
	payload: diff
});

/**
 * login 페이지에서 모달창을 관리하기 위한 function
 * 
 * @param diff boolean modal on/off
 * @returns 
 */
export const loginModalSetting = (diff: {content: any, open: boolean}) => ({
	type: MODAL_LOGIN_SETTING,
	payload: diff
})


export type ModalState = {
  open: boolean;
	loginOpen: boolean;
	loginContent: any;
};

const initialState: ModalState = {
	open: false,
	loginOpen: false,
	loginContent: null,
}

function modal(
	state: ModalState = initialState,
	action: ModalAction
): ModalState {
	switch (action.type) {
		case MODAL_SETTING:
			return { ...state, open: action.payload };
		case MODAL_LOGIN_SETTING:
			return { ...state, loginOpen: action.payload.open, loginContent: action.payload.content };
		default:
			return state;
	}
}

export default modal;