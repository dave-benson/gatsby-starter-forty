import React from 'react'
import clock from './clock'
import Countdown from './countdown'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>17 July 2021</h1>
            </header>
            <div className="content">
                <p>Secret Garden Marquee, Burwash Manor, Barton</p>
                <ul className="actions">
	                    <li><a href="#one" className="button next scrolly" id="day">Days Remaining</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
