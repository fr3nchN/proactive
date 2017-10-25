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
                    <div className="col-8 text-white">
                        <h1 className="display-1">Community</h1>
                        <p className="h2">Our approach to product development is tied to the community needs. Understand current & future ecosystem states are key to guide long term development.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-8 text-center">
                    <h2>Hub</h2>
                    <hr/>
                    <p className="h4">
                        Pre-made workflows to get you started. <br />
                        Integrate in no time! <br />
                    </p>
                    <Link className="btn btn-outline-primary" to={links.external.hub.home} target="_blank">Activeeon Hub</Link>
                    <ul className="list-unstyled text-muted mt-3">
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
                <div className="row justify-content-md-center">
                    <div className="col-8 text-center">
                        <h2>Use Cases</h2>
                        <hr />
                    </div>
                </div>
                <UseCases />
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-8 text-center">
                    <h2>Events</h2>
                    <hr/>
                    <p>Next events</p>
                </div>
            </div>
        </div>
        <div className="background-home-try">
            <div className="background-white">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h2>Technology</h2>
                            <hr/>
                            <p>
                                ProActive source code is hosted on <a href={links.external.repo.proactive} target="_blank">Github</a>
                            </p>
                            <p>
                                To get access to the current Git repository, and contribute to the next release of ProActive.<br /><br />
                                <pre><code>
                                    git clone https://github.com/ow2-proactive/scheduling.git scheduling <br />
                                    git clone git@github.com:ow2-proactive/scheduling.git scheduling
                                </code></pre>
                            </p>
                            <p className="h4">
                                Try it for free <a href={links.external.try.home} target="_blank">here</a> and follow this tutorial in <Link to={links.getstarted}>3 steps</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Community;
