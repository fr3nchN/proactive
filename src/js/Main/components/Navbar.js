import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"

// TODO: Change logo to ProActive

const Navbar = () => (
    <nav className="head-bar navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top border-bottom-grey">
        <div className="container">
            <Link className="navbar-brand" to={links.home}>
                <img src="images/activeeon-logo.png" alt="ActiveEon" height="50" className="d-inline-block align-top" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={links.home}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={links.getstarted}>Get Started</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={links.community}>Community</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={links.external.blog.home} target="_blank">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={links.about}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;