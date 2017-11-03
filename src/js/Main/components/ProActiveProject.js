import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"
import ContentProActiveProject from "./../../../content/homepage/ContentProActiveProject"

const ProActiveProduct = ({ item }) => {
    return (
        <div className="col-sm-5 background-verylightgray m-1 pt-2">
            <img src={item.image} alt={item.title} className="img-fluid mb-2"/>
            <p><small>
                {item.summary}
            </small></p>
            <p className="text-muted"><small>
                <ul className="list-unstyled">
                    {item.descriptions.map((desc) => (<li key={desc}>{desc}</li>))}
                    {(item.key === 4) ? (<li><Link to={item.link}>more...</Link></li>) : (<li><a href={item.link} target="_blank">more...</a></li>)}
                </ul>
            </small></p>
        </div>
    )
};

const ProActiveProject = () => {
    return (
        <div>
            <div className="row mt-5 mb-5 align-items-center">
                <div className="col-lg-7 background-image-ow2">
                    {/*<h2><img src="images/ow2_logo.svg" alt="ow2" />Project Overview</h2>*/}
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                        ProActive Parallel Suite is an innovative project, member of the <a href={links.external.ow2.proactive} target="_blank">OW2 Open Source Community</a>, for <strong>acceleration and orchestration</strong> of applications, <strong>seamlessly integrated with the management of high-performance Clouds</strong> (Private and Public with bursting capabilities).
                    </p>
                    <p>
                        ProActive Parallel Suite platforms features High-Performance Workflows and Application Parallelization, together with enterprise Scheduling and Orchestration coupled with the dynamic management of private Heterogeneous Grids and Clouds. With a ProActive platform, our users tackle at once the acceleration and orchestration of all demanding enterprise applications, and the management of their own Enterprise Cloud.
                    </p>
                    <p>
                        Professional support and services are delivered by <a href={links.external.activeeon.home} target="_blank">ActiveEon company.</a>
                    </p>
                    <p className="text-center">
                        <hr/>
                        <a href={links.external.ow2.proactive} target="_blank">
                            <img src="images/ow2_logo.svg" alt="ow2" className="image-ow2"/>
                        </a>
                    </p>
                </div>
                <div className="col-lg-5">
                    <div className="row">
                        { ContentProActiveProject.map((item) => (
                            <ProActiveProduct key={item.key} item={item} />
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProActiveProject;