const MODAL_SETTING = 'modal/MODAL_SETTING' as const;

type ModalAction = 
	| ReturnType<typeof modalSetting>
;


export const modalSetting = (diff: boolean) => ({
	type: MODAL_SETTING,
	payload: diff
});


export type ModalState = {
  open: boolean;
};

const initialState: ModalState = {
	open: false,
}

function modal(
	state: ModalState = initialState,
	action: ModalAction
): ModalState {
	switch (action.type) {
		case MODAL_SETTING:
			return { ...state, open: action.payload };
		default:
			return state;
	}
}

export default modal;