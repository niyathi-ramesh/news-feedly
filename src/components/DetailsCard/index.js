import React, { Component } from 'react';
import './details-card.scss';
import { Icon } from 'react-icons-kit';
import { heart } from 'react-icons-kit/feather/heart';
import { NavLink } from 'react-router-dom';

export default class DetailsCard extends Component {
    render() {
        const { article } = this.props;
        return (
            <div className='details-card'>
                <NavLink className='card-link' to={'/article/' + article.id}>
                    <div className='img-bg'></div>
                    <div className='content'>
                        <h3>An introduction to Git</h3>
                        <div className='row-1'>
                            <div>TECHNOLOGY</div>
                            <div>18 MAY 2019</div>
                        </div>
                        <p>Git is an Open Source Distributed Version Control System. Now that’s a lot of words to define Git.</p>
                    </div>
                    <div className='card-footer'>
                        <Icon size={24} icon={heart} />
                        <div>150</div>
                    </div>
                </NavLink>
            </div>
        );
    }
}
