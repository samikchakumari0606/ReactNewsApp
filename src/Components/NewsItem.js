import React, { Component } from "react";

export default class NewsItem extends Component {
 
   render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div>
        <div className="card" >
          <img src={!imageUrl?"https://www.ndtv.com/india-news/bengaluru-man-rapes-and-murders-girlfriends-3-year-old-daughter-arrested-3741555":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">by {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}
