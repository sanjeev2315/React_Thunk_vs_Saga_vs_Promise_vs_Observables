import * as actions from './../actions/actionTypes'

const initalState = {
	error: '',
	images: []
}

const imageReducer = (state, action) => {
	switch (action.type) {
		case actions.LOAD_IMAGE_SUCCESS:
			return {
				...state,
				images: action.payload,
				error: ''
			}
		case actions.LOAD_IMAGE_FAILURE:
			return {
				...state,
				error: action.payload,
				images: initalState
			}
		default:
			return initalState
	}

}

export default imageReducer