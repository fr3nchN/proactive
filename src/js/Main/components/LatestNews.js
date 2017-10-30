import React from 'react'
import links from "./../links"

const News = ({ item }) => {
    return (
        <div className="col-sm-4 text-center">
            <h3 className="h4 text-orange">{item.title}</h3>
            <p>{item.text}</p>
        </div>
    )
};

const LatestNews = () => {
    const items = [
        {
            "title": "AZURE PoC in the BOX",
            "text": "Ask for a PoC on Azure to transition to the cloud and leverage its services.",
            "link": ""
        },
        {
            "title": "Machine Learning",
            "text": "Take advantage of the growth expected from analytics, with a platform optimized for integration and distribution.",
            "link": ""
        },
        {
            "title": "Suse and SAP",
            "text": "Access instant insight based on SAP business data and Suse OS for processing.",
            "link": ""
        }
    ];
    return (
        <div>
            <div className="row justify-content-md-center">
                <div className="col-md-8 text-center">
                    <h2>Latest News</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                { items.map((item) => (
                    <News key={item.title} item={item} />
                )) }
            </div>
        </div>
    )
};

export default LatestNews;