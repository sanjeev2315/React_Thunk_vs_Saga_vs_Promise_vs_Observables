import * as actions from './../actions/actionTypes'

const initalState = {
	error: '',
	images: []
}

const imageReducer = (state, action) => {
	switch (action.type) {
		case 'LOAD_IMAGES_FULFILLED':
			return {
				...state,
				images: action.payload.results,
				error: ''
			}
		case 'LOAD_IMAGE_REJECTED':
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