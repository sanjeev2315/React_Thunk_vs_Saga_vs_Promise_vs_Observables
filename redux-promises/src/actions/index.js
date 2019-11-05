import * as actionTypes from './actionTypes'

//Thunk Middleware in Action
// Thunk makes below async call to be a part of function with a param as dispatch which helps dispatching a action once the async request get resolved
export const fetchImages = () => {
	return {
		type: actionTypes.LOAD_IMAGES,
		payload: fetch('https://api.unsplash.com/search/photos?client_id=172ab828ff61404421431f0ce988ce43f2e1625bac519b15815d29374abe6a37&query=flowers&page=1').then(response => {
			return response.json()
		})
	}
}
