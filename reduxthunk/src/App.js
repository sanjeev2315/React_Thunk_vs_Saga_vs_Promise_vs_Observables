import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import * as actionTypes from './actions/actionTypes'
import * as actions from './actions'





class App extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.loadImages()
	}

	render() {
		return (
			<div className="App">
				{
					this.props.error ? <div>Error :- {this.props.error}</div> : this.props.images.map(img => {
						return <img key={img.id} src={img.urls.regular} alt={img.alt_description} />
					})
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	images: state.imageReducer.images,
	error: state.imageReducer.error
})

const mapDispatchToProps = (dispatch) => ({
	loadImages: () => dispatch(actions.fetchImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
