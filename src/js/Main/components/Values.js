import React from 'react'
import links from "./../links"
import ContentValues from "./../../../content/homepage/ContentValues"

const Value = ({ valueItem }) => {
    const imagePath = "images/values/"+valueItem.image;
    const image =
        <div className="col-md-3">
            <img src={imagePath} alt={valueItem.name} className="img-fluid" />
        </div>
    ;
    const content =
        <div className="col-md-5 text-center">
            <h3 className="h4 text-blue">{ valueItem.name }</h3>
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
    return (
        <div>
            <div className="row mb-5 justify-content-md-center">
                <div className="col-md-8 text-center">
                    <h2>ProActive from Activeeon</h2>
                    <p className="h4">Job Scheduling, Workload Automation, Orchestration & Metascheduling on-premises and on all clouds</p>
                    <p className="h5">Workflow engine to automate and orchestrate your business processes</p>
                </div>
            </div>
            { ContentValues.map((valueItem) => (
                <Value key={valueItem.key} valueItem={valueItem} />
            )) }
        </div>
    )
};

export default Values;