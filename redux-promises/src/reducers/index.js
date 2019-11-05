import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import promiseMiddleware from 'redux-promise-middleware';

const store = createStore(rootReducer, compose(
	applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))



export default store
