import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerFood'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Sarah & Dave - Food</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerFood />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Main</h2>
                    </header>
                                        <h3>Meat</h3>
                                        <ul className="alt">
                                            <li>chargrilled beef burger with wild rocket, red onion & dill pickle</li>
                                            <li>local pork sausages</li>
                                            <li>chicken skewer marinated in garlic, lemon & rosemary</li>
                                        </ul>

                                        <h3>Vegaterian</h3>
                                        <ul className="alt">
                                            <li>chilli bean burger with guacamole & wild rocket</li>
                                            <li>chargrilled marinated halloumi skewers with courgetti & cherry tomato (x2)</li>
                                        </ul>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h2>Served with</h2>
                            </header>
                            <ul className="alt">
                                            <li>chunky potato wedges with chive crème fraiche</li>
                                            <li>roast squash salad with crumbled feta, pesto & pomegranate</li>
                                            <li>panzanella & coleslaw</li>
                                        </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h2>Dessert</h2>
                            </header>
                            <ul className="alt">
                                            <li>pots of homemade gelato</li>
                                        </ul>

                        </div>
                    </div>
                </section>
         </section>
        </div>

    </Layout>
)

export default Landing// JavaScript Document