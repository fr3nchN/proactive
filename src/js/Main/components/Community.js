import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"
import UseCases from './UseCases'

const Community = () => (
    <div>
        <div className="background-orange">
        <div className="jumbotron jumbotron-fluid background-image-community">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-white">
                        <h1 className="display-1">Community</h1>
                        <p className="h2">Our approach to product development is tied to the community needs. Understand current & future ecosystem states are key to guide long term development.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-8 text-center">
                    <h2>Hub</h2>
                    <hr/>
                    <p className="h4 mb-3">
                        Pre-made workflows to get you started. <br />
                        Integrate in no time! <br />
                    </p>
                    <Link className="btn btn-outline-primary mb-3" to={links.external.hub.home} target="_blank">Activeeon Hub</Link>
                    <ul className="list-unstyled text-muted">
                        <li>Azure, AWS, GCP</li>
                        <li>OpenStack, VmWare</li>
                        <li>Tensorflow</li>
                        <li>Kafka, Storm</li>
                        <li>Spark, Hadoop</li>
                        <li>Docker</li>
                        <li>...</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="background-usecase">
            <div className="container-fluid">
                <UseCases />
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-md-center pt-3 pb-3">
                <div className="col-md-4 text-center">
                    <h2>Events</h2>
                    <hr/>
                    <p>Come and meet us on some worldwide <a href={links.external.activeeon.events} target="_blank">events</a></p>
                </div>
                <div className="col-md-4 text-center">
                    <h2>Users and Partners</h2>
                    <hr/>
                    <p>A few of our <a href={links.external.activeeon.customers} target="_blank">customers & partners</a></p>
                    <div className="row justify-content-md-center">
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
                <div className="col-md-4 text-center">
                    <h2>Github Trackers</h2>
                    <hr/>
                    <p>Follow our roadmap and fixes on <a href={links.external.repo.bugtracker} target="_blank">Github</a></p>
                </div>
            </div>
        </div>

        <div className="background-home-try">
            <div className="background-white">
                <div className="container">
                    <div className="row align-items-center justify-content-md-center">
                        <div className="col-md-7">
                            <h2>Technology</h2>
                            <hr/>
                            <p>
                                ProActive source code is hosted on <a href={links.external.repo.proactive} target="_blank">Github</a>
                            </p>
                            <p>
                                To get access to the current Git repository, and contribute to the next release of ProActive.
                            </p>
                            <pre className="background-white pl-2 pr-2"><code>
                                git clone https://github.com/ow2-proactive/scheduling.git scheduling <br />
                                git clone git@github.com:ow2-proactive/scheduling.git scheduling
                            </code></pre>
                        </div>
                        <div className="col-md-4">
                            <p className="h4 text-center">
                                Try it for free <a href={links.external.try.home} target="_blank">here</a> and follow this tutorial in <Link to={links.getstarted}>3 steps</Link>. <br/><br/>
                                <a className="btn btn-outline-primary" href={links.external.try.home} target="_blank">Try It</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Community;
