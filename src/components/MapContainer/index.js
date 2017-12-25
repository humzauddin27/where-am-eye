import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class MapContainer extends Component {

	getRequest(){
		axios.get('https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&key=AIzaSyCC1hLGclz6ZnsNLW-jBwg5jWNwUgvb8TM');
	}

	render() {
		return (
			<div>

			</div>
		);
	}
}
