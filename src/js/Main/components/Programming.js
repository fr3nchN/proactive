import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"

const features = [
    {
        "title": "Master-Worker",
        "description": "a Task-Based API for solving Master-Worker type computations (one Master, many workers)."
    },
    {
        "title": "Monte-Carlo",
        "description": "a Task-based API similar to Master-Worker, specialized for monte-carlo simulations"
    },
    {
        "title": "Legacy Code Wrapping",
        "description": "Efficient methods to wrap, couple, and gridify legacy code with ProActive, including MPI or other native codes"
    },
    {
        "title": "SPMD",
        "description": "SPMD technique is perfect for solving tightly-coupled parallel problems requiring intensive communications (CFD, Maxwell,...). This is an alternative to MPI in Java"
    },
    {
        "title": "File Transfer",
        "description": "Files can be transmitted from or to a remote node at different stage of the application lifecycle"
    },
    {
        "title": "Web Services",
        "description": "ProActive Programming Active Objects and GCM components can be exposed as web services without any additional development"
    },
    {
        "title": "Data Spaces",
        "description": "a virtual file system layer that allow files to be accessed among all Active Objects, accross networks and computers"
    },
    {
        "title": "Security",
        "description": "Communications can be encrypted using a private/public key mechanism to ensure fully secure data transmissions"
    },
    {
        "title": "GCM",
        "description": "Grid Component Model API is based on and extends the Fractal model to enable component programming in ProActive."
    },
    {
        "title": "Fault Tolerance",
        "description": "Application can be configured to be self-healing and restart automatically from latest valid checkpoint."
    },
    {
        "title": "Asynchrony",
        "description": "Calls on Active Objects are asynchronous: an answer, a future, is provided without waiting for the end of the result processing."
    },
    {
        "title": "Mobility",
        "description": "Active Objects have the ability to migrate between nodes while the application is running."
    },
    {
        "title": "Remote Accessibility",
        "description": "Methods defined by active objects can be called from any point of the application."
    }
];

const Programming = () => (
    <div>
        <div className="jumbotron jumbotron-fluid background-image-getstarted">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-white">
                        <h1 className="display-1">Programming</h1>
                        <p className="h2">A Java Active Objects APIs for Parallel, Distributed and Multi-Core Computing</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="card-columns">
                <div className="card text-center">
                    <img className="card-img-top" src="images/proactive-programming.png" alt="ProActive Programming" />
                </div>
                {features.map(feature => (
                    <div key={feature.title} className="card">
                        <div className="card-body">
                            <h2 className="h4 card-title">{feature.title}</h2>
                            <p className="card-text">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Programming;
