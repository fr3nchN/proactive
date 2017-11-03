import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"
import ContentReleaseNotes from "./../../../content/releasenotes/ContentReleaseNotes"

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
                {item.enterpriseitems.map((eitem) => (
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
                {console.log(ContentReleaseNotes)}
                {ContentReleaseNotes.map(releasenote => (
                    <ReleaseNote key={releasenote.version} item={releasenote} />
                ))}
            </div>
        </div>
    </div>
);

export default ReleaseNotes;
