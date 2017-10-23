import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"

const Footer = () => (
    <footer>
        <hr />
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link">
                    © 2017 ActiveEon <span className="heart">❤️</span>
                </a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={links.external.activeeon.home} target="_blank">
                    <span>ActiveEon</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={links.external.try.home} target="_blank">
                    <span>Try it</span>
                </Link>
            </li>
        </ul>
    </footer>
);

export default Footer;