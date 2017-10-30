import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"

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
    const items = [
        {
            "key": 1,
            "name": "ProActive Workflows & Scheduling",
            "summary": "Reduce execution time. Reduce infrastructure costs",
            "descriptions": ["Easy to use with web portals", "Rich APIs: Java, REST, CLI", "Extensible"],
            "image": "images/proactive-logos/logo-proactive-workflows-scheduling.png",
            "link": links.external.activeeon.product.workflowsscheduling
        },
        {
            "key": 2,
            "name": "ProActive Big Data Automation",
            "summary": "Accelerate Scientific and Statistical Computing",
            "descriptions": ["Parallelization for your toolbox", "Integrated in your environment", "Benefit from many resources: desktop, cluster and clouds"],
            "image": "images/proactive-logos/logo-proactive-big-data-automation.png",
            "link": links.external.activeeon.product.bigdata
        },
        {
            "key": 3,
            "name": "ProActive Cloud Automation",
            "summary": "Your Open Automation Platform to Optimize your IT operations",
            "descriptions": ["Automatic scaling", "Ensure fault tolerance", "Ease maintenance"],
            "image": "images/proactive-logos/logo-proactive-cloud-automation.png",
            "link": links.external.activeeon.product.cloudautomation
        },
        {
            "key": 4,
            "name": "ProActive Programming",
            "summary": "Java middleware for parallel and distributed computing",
            "descriptions": ["SPMD model", "Fault tolerance", "Java SDK"],
            "image": "images/proactive-logos/logo-proactive-programming.png",
            "link": links.programming
        }
    ];
    return (
        <div>
            <div className="row mt-5 mb-5 align-items-center">
                <div className="col-lg-7">
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                        ProActive Parallel Suite is an innovative project, member of the OW2 Open Source Community, for <strong>acceleration and orchestration</strong> of applications, <strong>seamlessly integrated with the management of high-performance Clouds</strong> (Private and Public with bursting capabilities).
                    </p>
                    <p>
                        ProActive Parallel Suite platforms features High-Performance Workflows and Application Parallelization, together with enterprise Scheduling and Orchestration coupled with the dynamic management of private Heterogeneous Grids and Clouds. With a ProActive platform, our users tackle at once the acceleration and orchestration of all demanding enterprise applications, and the management of their own Enterprise Cloud.
                    </p>
                    <p>
                        Professional support and services are delivered by <a href={links.external.activeeon.home} target="_blank">ActiveEon company.</a>
                    </p>
                </div>
                <div className="col-lg-5">
                    <div className="row">
                        { items.map((item) => (
                            <ProActiveProduct key={item.key} item={item} />
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProActiveProject;