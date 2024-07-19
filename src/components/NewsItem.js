import React, { Component } from "react";

export class NewsItem extends Component {
  toIST = (isoDate) => {
    // Parse the ISO date string to a Date object
    let date = new Date(isoDate);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid ISO date format");
    }

    // Offset for IST (5 hours and 30 minutes in milliseconds)
    let istOffset = 5.5 * 60 * 60 * 1000;

    // Calculate the IST time by adding the offset to the UTC time
    let istTime = new Date(date.getTime() + istOffset);

    // Format the IST date to a readable string
    return istTime.toLocaleString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });
  };

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: "flex", justifyContent: "flex-end", position: "absolute", right:'0'}}>
            <span className="badge rounded-pill bg-dark">{source}</span>
          </div>
          <img
            src={imageUrl ? imageUrl : require("../Images/breakingNews.png")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description} </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on {this.toIST(date)}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
