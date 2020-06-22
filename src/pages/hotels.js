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
                                <p>Gonville Place</p>
									<p>Cambridge</p>
									<p>Cambridgeshire</p>
									<p>CB1 1LY</p>
	
					</div>
	<div className="col-3">
				<h4>Premier Inn</h4>
                                <p>Newmarket Road</p>
									<p>Cambridge</p>
									<p>Cambridgeshire</p>
									<p>CB1 3EP</p>
	</div>
<div className="col-3">
				<h4>Gonville3</h4>
                                <p>Gonville Place</p>
									<p>Cambridge</p>
									<p>Cambridgeshire</p>
									<p>CB1 1LY</p>
	</div>
<div className="col-3">
				<h4>Gonville4</h4>
                                <p>Gonville Place</p>
									<p>Cambridge</p>
									<p>Cambridgeshire</p>
									<p>CB1 1LY</p>
	</div>
	</div>
	 
     
	
	</div>
</section>
</div>
    </Layout>
)

export default Generic