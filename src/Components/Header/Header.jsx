import React from 'react'
import logo from '../../logo.svg'
import './header.scss'

export const Header = ({ rokets }) => {
    return<>
        <header className="header">
		<img
            src={logo}
            alt="Logo Space X"
            className="logo"
		/>
		<nav className="main-nav nav">
			<ul className="list">
				{rokets.map((roket, i) => (
					<li 
					className="item"
					key={i}
					>
						<a href="#" className="item-link">
							{roket}
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