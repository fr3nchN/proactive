import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"

const Community = () => (
    <div>
        <div className="jumbotron jumbotron-fluid background-image">
            <div className="container">
                <div className="row">
                    <div className="col-8 text-white">
                        <h1 className="display-1">Community</h1>
                        <p className="h2">Our approach to product development is tied to the community needs. Understand current & future ecosystem states are key to guide long term development.</p>
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
                        Pre-made workflows to get you started. Integrate in no time! <br />
                        Do not hesitate to contribute and submit your own.<br/>
                        <Link to={links.external.hub.home} target="_blank">Activeeon Hub</Link>
                    </p>
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
        <div className="background-grey">
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-8 text-center">
                        <h2>Use Cases</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src="images/usecases/usecase-homeoffice.jpeg" alt="uk government" />
                            <div className="card-body text-center">
                                <h4 className="card-title">UK Government</h4>
                                <p className="card-text text-muted">Orchestrate Visa application and criminality rate analysis</p>
                                <a href="#" className="btn btn-outline-secondary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src="images/usecases/usecase-komatsu.jpeg" alt="komatsu" />
                            <div className="card-body text-center">
                                <h4 className="card-title">IoT</h4>
                                <p className="card-text text-muted">IoT analytics managed through ProActive</p>
                                <a href="#" className="btn btn-outline-secondary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src="images/usecases/usecase-var.jpeg" alt="var" />
                            <div className="card-body text-center">
                                <h4 className="card-title">Insurance & Fintech</h4>
                                <p className="card-text text-muted">Faster results and transition to the cloud</p>
                                <a href="#" className="btn btn-outline-secondary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src="images/usecases/usecase-cnes.jpeg" alt="cnes" />
                            <div className="card-body text-center">
                                <h4 className="card-title">R&D</h4>
                                <p className="card-text text-muted">CNES, space agency improves user experience with cloud bursting for Big Compute</p>
                                <a href="#" className="btn btn-outline-secondary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-8 text-center">
                    <h2>Events</h2>
                    <hr/>
                    <p>Next events</p>

                    <h2>Technology</h2>
                    <hr/>
                    <p>
                        ProActive source code is hosted on <a href={links.external.repo.proactive} target="_blank">Github</a>
                    </p>
                    <p>
                        To get access to the current Git repository, and contribute to the next release of ProActive.<br /><br />
                        <pre><code>
                            git clone https://github.com/ow2-proactive/scheduling.git scheduling
                        </code></pre>
                        <pre><code>
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
);

export default Community;
