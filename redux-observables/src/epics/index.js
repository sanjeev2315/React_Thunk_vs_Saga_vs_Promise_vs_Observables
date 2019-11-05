import { LOAD_IMAGES } from './../actions/actionTypes'
import { putImages, loadError } from './../actions'
import { Observable } from 'rxjs/Observable'
import { switchMap } from 'rxjs/add/operator/switchMap'
import { ofType } from 'redux-observable';
import 'rxjs';

const fetchImageEpic = action$ => {
	action$
		.pipe(
			ofType(LOAD_IMAGES),
			switchMap(() =>
				fetch('https://api.unsplash.com/search/photos?client_id=172ab828ff61404421431f0ce988ce43f2e1625bac519b15815d29374abe6a37&query=flowers&page=1').then(response => {
					return response.json()
				})
					.map(response => putImages(response.images))
					.catch(error => Observable.of(loadError(error)))))

}
export default fetchImageEpic