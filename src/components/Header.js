import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Leon Lee</strong></Link>
        <ul className="icons">
            <li><a href="https://www.linkedin.com/in/leon1110/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/leon-lee-jl" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.facebook.com/leonlee1110" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.instagram.com/lee.leon1110/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
