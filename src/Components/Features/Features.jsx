import React from 'react'
import RellaxWrapper from 'react-rellax-wrapper'
import { Main } from '../Main/Main'

import './features.scss'

const rocketImages = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship'
}

export const Features = ({ rocketFeatures }) => {

    return<>
	<Main />
        <section className="features">
		<h2 className="features-title">
			{rocketFeatures?.name} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{rocketFeatures?.height.meters} m / {rocketFeatures?.height.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{rocketFeatures?.diameter.meters} m / {rocketFeatures?.diameter.feet}</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{rocketFeatures?.mass.kg} kg / {rocketFeatures?.mass.lb} lb</td>
					</tr>
					{rocketFeatures?.payload_weights.map(item => (
						<tr key={item.id}>
							<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
							<td className="table-column">{item.kg} kg / {item.lb} lb</td>
						</tr>
					))}
	
				</thead>
			</table>
			<RellaxWrapper spped={14}>
			<img
				src="img/falcon-1.png"
				alt="rocket"
				className="rocket"
			/>
			</RellaxWrapper>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{rocketFeatures?.description}
				</p>
			</article>
		</div>
	</section>
    </>
}