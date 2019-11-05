import * as actionTypes from './actionTypes'

//Thunk Middleware in Action
// Thunk makes below async call to be a part of function with a param as dispatch which helps dispatching a action once the async request get resolved
export const fetchImages = () => {
	return { type: actionTypes.LOAD_IMAGES, payload: [] }
}



export const putImages = (images) => {
	return { type: actionTypes.LOAD_IMAGE_SUCCESS, payload: images }
}


export const loadError = () => {
	return { type: actionTypes.LOAD_IMAGE_FAILURE, payload: 'Error while loading images' }
}
