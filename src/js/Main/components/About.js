import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"

const About = () => (
    <div>
        <div className="jumbotron jumbotron-fluid background-image-worldmap">
            <div className="container">
                <div className="row">
                    <div className="col-8 text-white">
                        <h1 className="display-1">About us</h1>
                        <p className="h2">France, UK, USA, Germany,<br/> Bulgaria, Senegal</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h2>Acknowledgment</h2>
                    <hr/>
                    <p>The solution is edited by the ActiveEon company, with contributions from the INRIA OASIS Team (INRIA - University of Nice Sophia Antipolis).</p>
                    <div className="row">
                        <div className="col-4">
                            <div className="card acknowledgment-card">
                                <img className="card-img-top" src="images/about/about-activeeon.png" alt="ActiveEon Logo" />
                                <div className="card-body">
                                    <p className="card-text text-muted">Business support, Business features, Main contributor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card acknowledgment-card">
                                <img className="card-img-top" src="images/about/about-inria.png" alt="Inria Logo" />
                                <div className="card-body">
                                    <p className="card-text text-muted">User and contributor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card acknowledgment-card">
                                <img className="card-img-top" src="images/about/about-university-sophia.png" alt="Universite Nice Sophia Logo" />
                                <div className="card-body">
                                    <p className="card-text text-muted">User and contributor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="mt-4">Contact</h2>
                    <hr/>
                    <p>For specific enquiries, demos, documentation, etc. do not hesitate to <a href="mailto:contact@activeeon.com?Subject=[ProActive]%20Request%20for%20information" target="_top">contact us</a>.</p>

                    <address>
                        <strong>ActiveEon</strong><br/>
                        12000 route des lucioles<br/>
                        Les Algorithmes, Pythagore B2<br/>
                        06560 Sophia Antipolis<br/>
                        FRANCE<br/>
                        <abbr title="Phone">P:</abbr> +33 988 777 660
                    </address>

                    <p>
                        For international addresses and phone <Link to={links.external.activeeon.contact} target="_blank">here</Link>.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default About;
