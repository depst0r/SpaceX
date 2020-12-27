import React from 'react'
import logo from '../../logo.svg'
import './header.scss'

export const Header = ({ rockets, changeRocket }) => {
    return<>
        <header className="header">
		<img
            src={logo}
            alt="Logo Space X"
            className="logo"
		/>
		<nav className="main-nav nav">
			<ul className="list">
				{rockets.map((rocket, i) => (
					<li 
					className="item"
					key={i}
					>
					<a 
					href="#" 
					onClick={e => {
						e.preventDefault()
						changeRocket(rocket)
					}} 
					className="item-link">
						{rocket}
					</a>
					</li>
				))}
			</ul>
		</nav>
		<nav className="secondary-nav">
			<ul className="list">
				<li className="item">
					<a href="/" className="item-link">Home</a>
				</li>
				<li className="item">
					<a href="calendar.html" className="item-link">Calendar</a>
				</li>
			</ul>
		</nav>
	</header>
    </>
}