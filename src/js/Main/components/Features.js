import React from 'react'
import links from "./../links"
import ContentFeatures from "./../../../content/homepage/ContentFeatures"

const Feature = ({ featureItem }) => {
    return (
        <div className="col-md-4 text-center m-3">
            <h3>{featureItem.name}</h3>
            <p className="text-muted">
                <ul className="list-unstyled">
                    { featureItem.descriptions.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </p>
        </div>
)};

const Features = () => {
    return (
        <div>
            <div className="row justify-content-md-center">
                <div className="col-md-8 text-center">
                    <h2>A few Features</h2>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-md-center">
                { ContentFeatures.map((featureItem) => (
                    <Feature key={featureItem.key} featureItem={featureItem} />
                )) }
            </div>
        </div>
    )
};

export default Features;