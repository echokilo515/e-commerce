import React from "react";
import "../menu-item/menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${match.link}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
