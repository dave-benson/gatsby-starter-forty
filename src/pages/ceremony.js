import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sarah & Dave - Venue & Ceremony</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Venue & Ceremony</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
	<h4 id="content">Venue</h4>
                    <p>The Secret Garden Wedding Marquee</p>
					<p>Burwash Manor, New Road, Barton</p>
					<p>Cambridge CB23 7EY</p>
	<ul className="actions">
	                    <li><a href="http://www.burwashweddings.com/" className="button special small">Website</a></li>
                </ul>
	
	
    <div className="grid-wrapper">   
	<div className="col-6">
				<h4>Timings</h4>
                                <div className="table-wrapper">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Arrive</td>
                                                <td>14:00</td>
                                         	</tr>
                                            <tr>
                                                <td>Start</td>
                                                <td>14:30</td>
                                            </tr>
                                            <tr>
                                                <td>Food</td>
                                                <td>17:00</td>
                                            </tr>
                                            <tr>
                                                <td>Dancing</td>
                                                <td>19:30</td>
                                            </tr>
                                            <tr>
                                                <td>Finish</td>
                                                <td>24:00</td>
                                            </tr>
                                        </tbody>
                                     </table>
                                </div>
					</div>
	<div className="col-6">
				<h4>Dress Code</h4>
                      <ul className="alt">
						<li>smart casual/dressy casual</li>
                      	<li>ties optional</li>
                    </ul>
	</div>
	</div>
	   <h4>Other Information</h4>    
  <div className="grid-wrapper">
		<div className="col-4">
				
                      <p>The wedding breakfast will start at 5pm, please have lunch before if you'll get hungry</p>

	</div>
	<div className="col-4">
					<p>If you would like to bring confetti, only biodegradable petal confetti is allowable by the venue</p>
	</div>
	<div className="col-4">
					<p>To allow all guests to relax and enjoy themselves, we have chosen to make our special day adults only. We thank you for your understanding</p>
	</div>
	</div>                     
                     
	
	
	
	
	
	
	</div>
</section>
</div>
    </Layout>
)

export default Generic