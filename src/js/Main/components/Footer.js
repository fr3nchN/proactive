import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"

const Footer = () => (
    <footer>
        <div className="container pt-2">
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
        <hr />
        <div className="row justify-content-center">
            <div className="col-2">
                <img className="card-img-top" src="images/about/about-activeeon.png" alt="ActiveEon Logo" />
            </div>
            <div className="col-2">
                <img className="card-img-top" src="images/about/about-inria.png" alt="Inria Logo" />
            </div>
            <div className="col-2">
                <img className="card-img-top" src="images/about/about-university-sophia.png" alt="Universite Nice Sophia Logo" />
            </div>
        </div>
        </div>
    </footer>
);

export default Footer;