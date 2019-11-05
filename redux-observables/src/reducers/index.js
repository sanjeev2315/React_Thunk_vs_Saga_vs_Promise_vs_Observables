import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import { createEpicMiddleware } from 'redux-observable'
import fetchImageEpic from './../epics'


const epicMiddleware = createEpicMiddleware()

const store = createStore(rootReducer, compose(
	applyMiddleware(epicMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

epicMiddleware.run(fetchImageEpic)

export default store
