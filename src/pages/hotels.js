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
   <h3>Hotels</h3>
	<div className="grid-wrapper">
	<div className="col-3">
	<h4>Gonville</h4>
                                        <ul className="alt">
                                            <li>Gonville Place</li>
                                            <li>Cambridge</li>
                                            <li>CB1 1LY</li>
	<li><a href="https://www.gonvillehotel.co.uk/" target="_blank">Website</a></li>
                                        </ul>
	
					</div>
	<div className="col-3">
		<h4>Premier Inn</h4>
                                        <ul className="alt">
                                            <li>Newmarket Road</li>
                                            <li>Cambridge</li>
                                            <li>CB1 3EP</li>
		<li><a href="https://www.premierinn.com/gb/en/hotels/england/cambridgeshire/cambridge/cambridge-city-east.html?cid=GLBC_CAMNEW" target="_blank">Website</a></li>
                                        </ul>
	</div>
<div className="col-3">
		<h4>Travelodge</h4>
                                        <ul className="alt">
                                            <li>180-190 Newmarket Road</li>
                                            <li>Cambridge</li>
                                            <li>CB5 8HF</li>
		<li><a href="https://www.travelodge.co.uk/search/results?location=Cambridge&lat=&long=&action=search&source=l&checkIn=&rooms%5B0%5D%5Badults%5D=1&rooms%5B0%5D%5Bchildren%5D=0&gclid=EAIaIQobChMIld2YttHp4wIVh7HtCh2fDA3WEAAYASAAEgJEEvD_BwE" target="_blank">Website</a></li>
	</ul>
	</div>
<div className="col-3">
		<h4>More ...</h4>
                                        <ul className="alt">
		<li><a href="https://www.trivago.co.uk/?aDateRange%5Barr%5D=2021-07-17&aDateRange%5Bdep%5D=2021-07-18&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=16802%2F200&iViewType=1&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=" className="button special fit small fas fa-external-link-alt" target="_blank">Search for more</a></li>
                                        
	</ul>
	</div>
	</div>
	 <h3>Taxis</h3>	
<div className="grid-wrapper">
	<div className="col-3">
	<h4>Panther</h4>
                                        <ul className="alt">
                                            <li><a href="https.pathertaxis.co.uk" target="_blank">Website</a></li>
                                            <li>01223 715715</li>
											<li>
	<ul className="icons">
                                            <li><a href="https://play.google.com/store/apps/details?id=uk.riide.panther&hl=en_GB" className="icon fab fa-google"><span className="label">Google Play</span></a></li>
                                            <li><a href="https://apps.apple.com/us/app/panther-taxis/id1240884516?ign-mpt=uo4" className="icon fab fa-apple"><span className="label">Apple</span></a></li>
                                        </ul>
	</li>
                                        </ul>
	
					</div>	
	
	</div>

	
	
	
	
     
	
	</div>
</section>
</div>
    </Layout>
)

export default Generic