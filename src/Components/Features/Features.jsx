import React from 'react'
import RellaxWrapper from 'react-rellax-wrapper'

import './features.scss'

export const Features = ({ rocketFeatures }) => {

    return<>
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
							<td className="table-column">PAYLOAD TO {item.id}</td>
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
					The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
				</p>
			</article>
		</div>
	</section>
    </>
}