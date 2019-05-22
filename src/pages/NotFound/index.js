import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './not-found.scss';

export default class NotFound extends Component {
	render() {
		return (
			<div className='not-found'>
				<div>
					<h2>You are in the wrong place</h2>
					<NavLink to="/" className="return-home">return home</NavLink>
				</div>
			</div>
		);
	}
}
