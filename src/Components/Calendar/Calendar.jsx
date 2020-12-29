import React, { useState, useEffect } from 'react'
import { Main } from '../Main/Main'
import FetchData from '../../service/FetchData'
import './calendar.scss'
import { Link } from 'react-router-dom'

export const Calendar = () => {

	const fetchData = new FetchData()

	const [data, setData] = useState(null)

	useEffect(() => {
		fetchData.getLaunches()
			.then(data => setData(data))
	}, [])

    return<>
	<Main />
        <section className="calendar">
		<div className="container">
			<ul className="calendar-list">
				{data?.map((item, i )=> (
					<li key={i} className="calendar-item">
					<article className="launches">
						<div className="launches-image">
							<img src={item?.links.patch.small} alt='images'/>
						</div>
						<div className="launches-content">
							<h2 className="launches-title">{item?.name}</h2>
							<Link to='/details' className="button launches-details">Подробнее</Link>
						</div>
					</article>
				</li>
				))}
			</ul>
		</div>
	</section>

    </>
}