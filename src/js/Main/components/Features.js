import React from 'react'
import links from "./../links"

const Feature = ({ featureItem }) => {
    return (
        <div className="col-4 text-center m-3">
            <h3>{featureItem.name}</h3>
            <p className="text-muted">
                <ul className="list-unstyled">
                    { featureItem.descriptions.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </p>
        </div>
)};

const Features = () => {
     const featureItems = [
        {
            "key": 1,
            "name": "Error Management",
            "descriptions": ["Keep intermediary results", "Global error policy", "Granular policy"],
        },
        {
            "key": 2,
            "name": "Resource Agnostic",
            "descriptions": ["Public, Private Cloud", "On-prem datacenter & HPC", "Any multi, hybrid, etc. strategy"],
        },
        {
            "key": 3,
            "name": "Efficient Distribution",
            "descriptions": ["Replicate control", "Low overhead"],
        },
        {
            "key": 4,
            "name": "Resource Preemption",
            "descriptions": ["Prioritize", "Get important results first"],
        },
        {
            "key": 5,
            "name": "Open",
            "descriptions": ["Rest API", "Web portal and CLI"],
        },
        {
            "key": 6,
            "name": "Docker",
            "descriptions": ["Container deployment", "Container environment"],
        }
    ];
    return (
        <div className="row justify-content-md-center">
            { featureItems.map((featureItem) => (
                <Feature key={featureItem.key} featureItem={featureItem} />
            )) }
        </div>
    )
};

export default Features;