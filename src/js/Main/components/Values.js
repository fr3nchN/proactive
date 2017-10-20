import React from 'react'

const Value = ({ valueItem }) => {
    const image =
        <div className="col-6">
            <img src="images/windmills-orange.jpeg" alt={valueItem.name} className="img-thumbnail" />
        </div>
    ;
    const content =
        <div className="col-6 text-center">
            <h2>{ valueItem.name }</h2>
            <ul className="list-unstyled">
                { valueItem.descriptions.map( (description) => (<li key={description}>{description}</li>) ) }
            </ul>
        </div>
    ;
    if ( valueItem.key % 2 === 1 ) {
        return (
            <div className="row align-items-center">
                {image}
                {content}
            </div>
        )
    } else {
        return (
            <div className="row align-items-center">
                {content}
                {image}
            </div>
        )
    }
};

const Values = () => {
    const valuesItems = [
        {
            "key": 1,
            "name": "Controlled Execution and Scheduling",
            "descriptions": ["User friendly scheduling system", "Error management system", "Priority management", "Event driven execution"]
        },
        {
            "key": 2,
            "name": "Expressive Workflows",
            "descriptions": ["Graphical workflows and dependencies", "Powerful replication system", "Variable and file sharing"]
        },
        {
            "key": 3,
            "name": "Controlled Scalability",
            "descriptions": ["Multi, hybrid, private & public cloud", "Dynamic scaling on workload"]
        },
        {
            "key": 4,
            "name": "Execution Analysis",
            "descriptions": ["Check deviations", "Log fetching"]
        },
        {
            "key": 5,
            "name": "Workflow as Code",
            "descriptions": ["Full revision control", "Integrate into existing CI/CD pipelines", "Catalog"]
        },
        {
            "key": 6,
            "name": "Seamless Integration",
            "descriptions": ["Transition to the Cloud", "Translate existing workflows", "Comprehensive Rest API"]
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