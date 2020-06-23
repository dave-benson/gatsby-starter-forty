import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sarah & Dave - RSVP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>RSVP</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
   
                    <p>Please RSVP by May 1st by using the links below</p>
					<p<a href="#" className="button icon fas fa-calendar-check" target="_blank">RSVP Day</a></p>
					<p<a href="#" className="button icon fas fa-calendar-check" target="_blank">RSVP Day</a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic