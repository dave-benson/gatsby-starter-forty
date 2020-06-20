import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Sarah & Dave - Ceremony</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Ceremony</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <h4>Timings</h4>
                                        <ul className="alt">
                                            <li>Arrive: 14:00</li>
                                            <li>Start 14:30</li>
                                            <li>Food 17:00</li>
											<li>Dancing 19:30</li>
											<li>Finish 24:00</li>
                                        </ul>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic