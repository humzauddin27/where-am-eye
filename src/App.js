import React, { Component } from 'react';
import styles from './styles/App.css';
import MapContainer from './components/MapContainer';

export default class App extends Component {
	render() {
		return (
			<div className={styles.root}>
				<MapContainer />
			</div>
		);
	}
}
