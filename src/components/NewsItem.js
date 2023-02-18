import React from 'react'

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, time, author, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{height:"100%"}}>
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2023/02/17/1600x900/heart_and_soul_nebula_1676366700288_1676616496707_1676616496707.jpg" : imageUrl} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{!description ? "No Description given by the source" : description}...</p>
          <p className="card-text"><small className="text-muted"><strong>by :</strong> {!author ? "unknown" : author} on {new Date(time).toGMTString()}</small></p>
          <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}
