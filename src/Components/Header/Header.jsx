/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../logo.svg'

import './header.scss'


export const Header = ({ rockets, changeRocket }) => {
return<>
	<header className="header">
		<Link to='/'>
		<img 
		src={logo} 
		alt="Logo Space X" 
		className="logo" />
		</Link>
		<nav className="main-nav nav">
			<ul className="list">
				{rockets.map((rocket, i) => (
				<li className="item" key={i}>
					<Link 
					to='/rocket' 
					onClick={() => {
						changeRocket(rocket)
						}}
						className="item-link">
						{rocket}
					</Link>
				</li>
				))}
			</ul>
		</nav>
		<nav className="secondary-nav">
			<ul className="list">
				<li className="item">
					<NavLink exact to='/' 
					className="item-link"
					activeClassName='active'
					>
						Home
						</NavLink>
				</li>
				<li className="item">
					<NavLink 
					to='/calendar' 
					className="item-link"
					activeClassName='active'
					>
						Calendar
						</NavLink>
				</li>
			</ul>
		</nav>
	</header>
</>
}