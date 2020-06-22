import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Landing</Link></li>
					<li><Link onClick={props.onToggleMenu} to="/ceremony">Ceremony</Link></li>
				<li><Link onClick={props.onToggleMenu} to="/food">Food</Link></li>
					<li><Link onClick={props.onToggleMenu} to="/gifts">Gifts</Link></li>
						<li><Link onClick={props.onToggleMenu} to="/travel">Travel & Parking</Link></li>
						<li><Link onClick={props.onToggleMenu} to="/hotels">Hotels & Taxis</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Generic</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
