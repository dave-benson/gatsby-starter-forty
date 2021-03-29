import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic16 from '../assets/images/pic16.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sarah & Dave - Gifts</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Gifts</h1>
                    </header>

   
                    <p>Your presence at our wedding is the greatest gift of all</p>
					<p>However, should you wish to honour us with a gift, a contribution to  help to us create an unforgettable adventure on our honeymoon would be appreciated but not required.</p>
					<p>If you would like to contribute, please <a href="https://www.paypal.me/sarahdave2020" className="button icon fab fa-paypal" target="_blank">Paypal</a> us, or we can give you our bank details.</p>
                
		     <span className="image main"><img src={pic16} alt="" /></span>
	</div>
            </section>
        </div>

    </Layout>
)

export default Generic