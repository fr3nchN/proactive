import React from 'react'
import links from "./../links"


const UseCaseCard = ({ useCaseItem }) => {
    return (
        <div className="col-3">
            <div className="card usecase-card">
                <img className="card-img-top" src={useCaseItem.image} alt={useCaseItem.name} />
                <div className="card-body text-center">
                    <h4 className="card-title">{useCaseItem.name}</h4>
                    <p className="card-text text-muted">{useCaseItem.description}</p>
                    <a href={useCaseItem.link} className="btn btn-outline-secondary" target="_blank">Download</a>
                </div>
            </div>
        </div>
    )
};

const UseCases = () => {
    const useCaseItems = [
        {
            "key": 1,
            "name": "Uk Government",
            "description": "Orchestrate Visa application and criminality rate analysis",
            "image": "images/usecases/usecase-homeoffice.jpeg",
            "link": links.external.activeeon.usecases.homeoffice
        },
        {
            "key": 2,
            "name": "IoT",
            "description": "IoT analytics managed through ProActive",
            "image": "images/usecases/usecase-komatsu.jpeg",
            "link": links.external.activeeon.usecases.komatsu
        },
        {
            "key": 3,
            "name": "Insurance & Fintech",
            "description": "Faster results and transition to the cloud",
            "image": "images/usecases/usecase-var.jpeg",
            "link": links.external.activeeon.usecases.legalandgeneral
        },
        {
            "key": 4,
            "name": "R&D",
            "description": "CNES, space agency improves user experience with cloud bursting for Big Compute",
            "image": "images/usecases/usecase-cnes.jpeg",
            "link": links.external.activeeon.usecases.cnes
        }
    ];
    return (
        <div className="row">
            { useCaseItems.map((useCaseItem) => (
                <UseCaseCard key={useCaseItem.key} useCaseItem={useCaseItem} />
            )) }
        </div>
    )
};

export default UseCases;