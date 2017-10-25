import React from 'react'
import Values from './Values'
import Features from './Features'
import { Link } from 'react-router-dom'
import links from "./../links"

const App = () => (
    <div>
        <div className="jumbotron jumbotron-fluid background-image">
            <div className="container">
                <div className="row">
                    <div className="col-8 text-white">
                        <h1 className="display-1">Activeeon</h1>
                        <p className="h2">Workflow engine for scheduling, <br /> meta-scheduling and orchestration</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mb-3">
            <Values/>
        </div>
        <div className="background-home-request">
            <div className="background-orange-transparent">
                <div className="container">
                    <div className="row row-setheight align-items-center">
                        <div className="col-6 text-center">
                            <h2 className="display-3 text-white">Get in touch</h2>
                            <a href="mailto:contact@activeeon.com?Subject=[ProActive]%20Request%20for%20information" className="btn btn-light">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-4">
            <div className="row justify-content-md-center">
                <div className="col-8 text-center">
                    <h2>A few Features</h2>
                    <hr />
                </div>
            </div>
            <Features />
        </div>
        <div className="background-home-try">
            <div className="background-white">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-8 text-center">
                            <h2>Try Online</h2>
                            <hr/>
                            <p className="h4">
                                Try it for free <a href={links.external.try.home} target="_blank">here</a> and follow this tutorial in <Link to={links.getstarted}>3 steps</Link>.
                            </p>
                            <div>
                                <a className="btn btn-outline-primary" href={links.external.try.home} target="_blank">Try It</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="background-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-3">
                                <img src="images/alliance/alliance-aws.png" alt="aws" className="img-thumbnail mb-2"/>
                            </div>
                            <div className="col-3">
                                <img src="images/alliance/alliance-azure.png" alt="azure" className="img-thumbnail mb-2"/>
                            </div>
                            <div className="col-3">
                                <img src="images/alliance/alliance-capgemini.png" alt="capgemini" className="img-thumbnail mb-2"/>
                            </div>
                            <div className="col-3">
                                <img src="images/alliance/alliance-devoteam.png" alt="devoteam" className="img-thumbnail mb-2"/>
                            </div>
                            <div className="col-3">
                                <img src="images/alliance/alliance-docker.png" alt="docker" className="img-thumbnail mb-2"/>
                            </div>
                            <div className="col-3">
                                <img src="images/alliance/alliance-gcp.png" alt="gcp" className="img-thumbnail mb-2"/>
                            </div>
                            <div className="col-3">
                                <img src="images/alliance/alliance-sap.png" alt="sap" className="img-thumbnail mb-2"/>
                            </div>
                            <div className="col-3">
                                <img src="images/alliance/alliance-suse.png" alt="suse" className="img-thumbnail mb-2"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 className="display-4">Strategic Alliances</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;
