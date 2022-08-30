import React, { Component } from "react";
import ImageCard from "./ImageCard";
import "./imageList.css";

class ImageList extends Component {
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image) => {
          return (
            // <img
            //   key={image.id}
            //   src={image.urls.regular}
            //   alt={image.current_user_collections.description}
            // />
            <ImageCard key={image.id} image={image} />
          );
        })}
      </div>
    );
  }
}

export default ImageList;
