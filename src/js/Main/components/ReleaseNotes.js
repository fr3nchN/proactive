import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"

const releasenotes = [
    {
        "version": "7.30",
        "date": new Date("2017-10-01"),
        "communityitems": [
            "Secure catalog by user groups",
            "Job permissions per user groups",
            "Fully configure Proactive in WAS",
            "MAAS integration in the Connector-iaas",
            "Centralize all workflows in a single place",
            "Nodes Recovery",
            "Scheduler-aware-rm-policy",
            "Reorganised The Studio Menu",
            "Added new workflows for anomaly detection on log files, and updated Image Analysis workflows for object segmentation in images"
            ],
        "enterpriseitems": []
    },
    {
        "version": "7.29",
        "date": new Date("2017-08-11"),
        "communityitems": [
            "New Generic catalog with full workflows revision functionality",
            "Workflow-catalog: bucket creation",
            "Display of project names in scheduling portal",
            "New security policy to give permission on job based on the user group",
            "Job planner",
            "Generic Information & Documentation in Studio",
            "Documentation url for machine learning workflows",
            "Editable Job Description, and an better display when activated",
            "Bug fixes"
        ],
        "enterpriseitems": []
    },
    {
        "version": "7.27",
        "date": new Date("2017-05-16"),
        "communityitems": [
            "ProActive Workflows & Scheduling embeds all ProActive components to design workflows and execute them on distributed resources. The news release of ProActive 7.27 includes:",
            "New user portal: Cloud Automation workflows",
            "Job planner new service",
            "Perl script engine",
            "Models and quality checks for workflow variables at job submission",
            "Restart and fix an in-error task an unlimited number of times",
            "Native scheduler node source infrastructure policy",
            "Extended Azure connector with Azure Stack integration",
            "DevOps: workflow synchronization (import/export) between schedulers environments (dev, test, prod)",
        ],
        "enterpriseitems": []
    },
    {
        "version": "7.25",
        "date": new Date("2017-03-15"),
        "communityitems": [
            "New LDAP query task, available in Studio predefined tasks",
            "Email validation and notification with LDAP connection users, groups, projects",
            "Workflow Studio catalog with many new features",
            "Remote visualization task: see example in Studio template",
            "Resource management: new node locking and node unlocking features",
            "Agile, DevOps: Workflow sync between schedulers Dev, Test, Prod, etc. with import/export",
            "Declarative rule based model for workflow variables",
            "Advanced task termination control for Bash and Python",
            "File Trigger: new tasks for file event monitoring and job triggering (new file, new directory, file change, etc.)"
        ],
        "enterpriseitems": []
    },
    {
        "version": "7.23",
        "date": new Date("2017-01-10"),
        "communityitems": [
            "New powerful GraphQL data-fetching API: get read access to scheduling information from your ProActive Scheduler in an easy and efficient manner",
            "Generic info interface upgraded with job variable and task variable definition features to improve user experience",
            "New chaining of workflows added in the Control menu: \"SubmitJobNoWait\": submit a Job from the current one, and proceed to the next task without waiting for its completion (asynchronous submission); and \"SubmitJobAndWait\": submit a Job from the current one, then wait for its completion before proceeding to the next task (synchronous submission)."
        ],
        "enterpriseitems": []
    }
];

const ReleaseNote = ({item}) => {
    const communityItems = item.communityitems.length === 0 ? null : (
        <div>
            <h3>Community Version</h3>
            <ul>
                {item.communityitems.map((citem) => (
                    <li key={citem}>{citem}</li>
                ))}
            </ul>
        </div>
    );
    const enterpriseItems = item.enterpriseitems.length === 0 ? null : (
        <div>
            <h3>Enterprise Version</h3>
            <ul>
                {item.entepriseitems.map((eitem) => (
                <li key={eitem}>{eitem}</li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="col-md-8">
            <h2>Version {item.version} <small>- {item.date.toDateString()}</small></h2>
            {communityItems}
            {enterpriseItems}
            <hr />
        </div>
    )
};

const ReleaseNotes = () => (
    <div>
        <div className="jumbotron jumbotron-fluid background-image-getstarted">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-white">
                        <h1 className="display-1">Release Notes</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {releasenotes.map(releasenote => (
                    <ReleaseNote key={releasenote.version} item={releasenote} />
                ))}
            </div>
        </div>
    </div>
);

export default ReleaseNotes;
