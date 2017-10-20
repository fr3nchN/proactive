import React from 'react'
import { Link } from 'react-router-dom'

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
                <Link className="nav-link" to="https://www.activeeon.com/" target="_blank">
                    <span>ActiveEon</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="https://try.activeeon.com/" target="_blank">
                    <span>Try it</span>
                </Link>
            </li>
        </ul>
    </footer>
);

export default Footer;