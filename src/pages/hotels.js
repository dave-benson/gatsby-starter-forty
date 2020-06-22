import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sarah & Dave - Hotels & Taxis</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Hotels & Taxis</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
    <div className="grid-wrapper">   
	<div className="col-3">
	<h4>Gonville</h4>
                                        <ul className="alt">
                                            <li>Gonville Place</li>
                                            <li>Cambridge</li>
                                            <li>CB1 1LY</li>
	<li><a href="https://www.gonvillehotel.co.uk/" className="button special fit small fas fa-map-marker" target="_blank">Google Maps</a></li>
                                        </ul>
	
					</div>
	<div className="col-3">
		<h4>Premier Inn</h4>
                                        <ul className="alt">
                                            <li>Newmarket Road</li>
                                            <li>Cambridge</li>
                                            <li>CB1 3EP</li>
                                        </ul>
	</div>
<div className="col-3">
		<h4>Travelodge</h4>
                                        <ul className="alt">
                                            <li>180-190 Newmarket Road</li>
                                            <li>Cambridge</li>
                                            <li>CB5 8HF</li>
	</div>
<div className="col-3">
		<h4>More ...</h4>
                                        <ul className="alt">
                                            <li>Search for</li>
                                            <li>more hotels</li>
                                            <li>in Cambridge</li>
	</div>
	</div>
	 
     
	
	</div>
</section>
</div>
    </Layout>
)

export default Generic