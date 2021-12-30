import React from "react";
//PAGES
//COMPONENTS
import CollectionItem from "../collection-item/collection-item.component";
//STYLES
import "./collection-preview.styles.scss";
//DATA
////

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4) // idx = index
          .map(({ id, ...otherItemProps }) => (
            /* <div key={item.id}>{item.name}</div> */
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
