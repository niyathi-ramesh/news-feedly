import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './navigation.scss';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/fa/home';
import { plusRound } from 'react-icons-kit/ionicons/plusRound';
import { heart } from 'react-icons-kit/feather/heart';

export default class Navigation extends Component {
	render() {
		return (
			<div className='navbar'>
				<NavLink exact activeClassName='active' to="/">
					<Icon size={32} icon={home} />
				</NavLink>
				<NavLink activeClassName='active' to="/most-popular">
					<Icon size={32} icon={heart} />
				</NavLink>
				<NavLink activeClassName='active' to="/create">
					<Icon size={32} icon={plusRound} />
				</NavLink>
			</div>
		);
	}
}
