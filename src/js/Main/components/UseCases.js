import React from 'react'
import links from "./../links"
import ContentUseCases from "./../../../content/community/ContentUseCases"

const UseCaseCard = ({ useCaseItem }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={useCaseItem.image} alt={useCaseItem.name} />
            <div className="card-body text-center">
                <h4 className="card-title">{useCaseItem.name}</h4>
                <p className="card-text text-muted">{useCaseItem.description}</p>
                <a href={useCaseItem.link} className="btn btn-outline-secondary" target="_blank">Download</a>
            </div>
        </div>
    )
};

const UseCases = () => {
    return (
        <div>
            <div className="row justify-content-md-center">
                <div className="col-md-8 text-center">
                    <h2>Use Cases</h2>
                    <hr />
                </div>
            </div>
            <div className="card-deck">
                { ContentUseCases.map((useCaseItem) => (
                    <UseCaseCard key={useCaseItem.key} useCaseItem={useCaseItem} />
                )) }
            </div>
        </div>
    )
};

export default UseCases;