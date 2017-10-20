import React from 'react'
import { Link } from 'react-router-dom'

const Community = () => (
    <div>
        <div className="jumbotron jumbotron-fluid background-image">
            <div className="container">
                <div className="row">
                    <div className="col-8 text-white">
                        <h1 className="display-1">Community</h1>
                        <p className="h2">Our approach to product development is tied to the community needs. Understand current ecosystem state and its future are key to guide long term development.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h2>Hub</h2>
                    <hr/>
                    <p>Our <Link to="http://hub.activeeon.com" target="_blank">hub</Link> includes pre-made workflows to get you started. It simplify customer integration with workflows used in other industries. Do not hesitate to contribute and submit your own.</p>
                </div>
            </div>
        </div>
        <div className="background-blue">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Use Cases</h2>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src="images/activeeon-logo.png" alt="uk government" />
                            <div className="card-body">
                                <h4 className="card-title">UK Government</h4>
                                <p className="card-text">Orchestrate Visa application and criminality rate analysis</p>
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src="images/activeeon-logo.png" alt="iot" />
                            <div className="card-body">
                                <h4 className="card-title">IoT</h4>
                                <p className="card-text">IoT analytics managed through ProActive</p>
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src="images/activeeon-logo.png" alt="test" />
                            <div className="card-body">
                                <h4 className="card-title">Insurance & Fintech</h4>
                                <p className="card-text">Faster results and transition to the cloud</p>
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src="images/activeeon-logo.png" alt="test" />
                            <div className="card-body">
                                <h4 className="card-title">R&D</h4>
                                <p className="card-text">CNES, space agency improves user experience with cloud bursting for Big Compute</p>
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h2>Events</h2>
                    <hr/>
                    <p>Next events</p>

                    <h2>Technology</h2>
                    <hr/>
                    <p>Git repo, release notes</p>
                </div>
            </div>
        </div>
    </div>
);

export default Community;
