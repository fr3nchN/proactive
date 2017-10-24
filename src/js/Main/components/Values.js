import React from 'react'
import links from "./../links"

const Value = ({ valueItem }) => {
    const imagePath = "images/values/"+valueItem.image;
    const image =
        <div className="col-md-4">
            <img src={imagePath} alt={valueItem.name} className="value-image" />
        </div>
    ;
    const content =
        <div className="col-md-6 text-center">
            <h2>{ valueItem.name }</h2>
            <ul className="list-unstyled">
                { valueItem.descriptions.map( (description) => (<li key={description}>{description}</li>) ) }
            </ul>
        </div>
    ;
    let separator = null;
    if (valueItem.key !== 6) {
        separator =
            <div className="col-md-8">
                <hr />
            </div>
        ;
    }
    const rowClass = "row align-items-center justify-content-md-center";
    if ( valueItem.key % 2 === 1 ) {
        return (
            <div className={rowClass}>
                {image}
                {content}
                {separator}
            </div>
        )
    } else {
        return (
            <div className={rowClass}>
                {content}
                {image}
                {separator}
            </div>
        )
    }
};

const Values = () => {
    const valuesItems = [
        {
            "key": 1,
            "name": "Controlled Execution and Scheduling",
            "descriptions": ["User friendly scheduling system", "Error management system", "Priority management", "Event driven execution"],
            "image": "value-control.png"
        },
        {
            "key": 2,
            "name": "Controlled Scalability",
            "descriptions": ["Multi, hybrid, private & public cloud", "Dynamic scaling on workload"],
            "image": "value-scalable.png"
        },
        {
            "key": 3,
            "name": "Expressive Workflows",
            "descriptions": ["Graphical workflows and dependencies", "Powerful replication system", "Variable and file sharing"],
            "image": "value-wf.png"
        },
        {
            "key": 4,
            "name": "Execution Analysis",
            "descriptions": ["Check deviations", "Log fetching"],
            "image": "value-monitor.png"
        },
        {
            "key": 5,
            "name": "Workflow as Code",
            "descriptions": ["Full revision control", "Integrate into existing CI/CD pipelines", "Catalog"],
            "image": "value-wfascode.png"
        },
        {
            "key": 6,
            "name": "Seamless Integration",
            "descriptions": ["Transition to the Cloud", "Translate existing workflows", "Comprehensive Rest API"],
            "image": "value-integrate.png"
        }
    ];
    return (
        <div>
            { valuesItems.map((valueItem) => (
                <Value key={valueItem.key} valueItem={valueItem} />
            )) }
        </div>
    )
};

export default Values;