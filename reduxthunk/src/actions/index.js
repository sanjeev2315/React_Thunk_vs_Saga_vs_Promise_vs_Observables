import * as actionTypes from './actionTypes'

//Thunk Middleware in Action
// Thunk makes below async call to be a part of function with a param as dispatch which helps dispatching a action once the async request get resolved
export const fetchImages = () => {
	return (dispatch, getState) => {
		fetch('https://api.unsplash.com/search/photos?client_id=172ab828ff61404421431f0ce988ce43f2e1625bac519b15815d29374abe6a37&query=flowers&page=1').then(response => {
			response.json().then(images => {
				console.log('images', images)
				if (images && images.errors && images.errors.length > 0) {
					dispatch(loadError())
				}
				else {
					dispatch(putImages(images.results))
				}
			})
		})

	}
}

export const putImages = (images) => {
	return { type: actionTypes.LOAD_IMAGE_SUCCESS, payload: images }
}


export const loadError = () => {
	return { type: actionTypes.LOAD_IMAGE_FAILURE, payload: 'Error while loading images' }
}