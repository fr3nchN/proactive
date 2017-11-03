import React from 'react'
import { Link } from 'react-router-dom'
import links from "./../links"
import ContentLatestNews from "./../../../content/homepage/ContentLatestNews"

const News = ({ item }) => {
    return (
        <div className="col-sm-4 text-center">
            <h3 className="h4 text-orange">{item.title}</h3>
            <p>{item.text}</p>
        </div>
    )
};

const LatestNews = () => {
    return (
        <div>
            <div className="row justify-content-md-center">
                <div className="col-md-8 text-center">
                    <h2>Latest News</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                { ContentLatestNews.map((item) => (
                    <News key={item.title} item={item} />
                )) }
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-8 text-center">
                    <hr />
                    <Link className="btn btn-outline-secondary" to={links.releasenotes}>Latest Releases</Link>
                </div>
            </div>
        </div>
    )
};

export default LatestNews;