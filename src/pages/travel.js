import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sarah & Dave - Travel</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Travel & Parking</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
    <div className="grid-wrapper">   
	<div className="col-6">
				<h4>From Cambridge</h4>
                                <p>TJust 3 miles from the City centre, travel along the Backs, through Newnham onto the Barton Road (A603) and travel out of Cambridge. Go straight over two roundabouts at the Junction with the M11. Then take the first right onto New Road heading towards Barton. Burwash Manor is the first turning on the left down the farm drive.</p>
					</div>
	<div className="col-6">
				<h4>From M11</h4>
                    <p>Burwash is 2 minutes from Junction 12 of the M11. Exit at Junction 12 and head West away from Cambridge on the A603 towards Sandy. As before, take the first right onto New Road heading towards Barton. Burwash Manor is the first turning on the left down the farm drive.</p>
	</div>
	</div>
	   <h4>Parking</h4>
		<p>There is a car park on site available until the following morning.</p>
     
	
	</div>
</section>
</div>
    </Layout>
)

export default Generic