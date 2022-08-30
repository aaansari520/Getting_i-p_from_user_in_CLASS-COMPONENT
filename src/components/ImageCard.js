import React, { Component, createRef } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imgRef = createRef();
  }

  state = {
    show: false,
    span: 0,
  };

  //   componentDidMount() {
  //     console.log("Ref", this.imgRef);
  //     console.log("RefGht", this.imgRef.current.clientHeight);
  //   }

  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    console.log(this.imgRef.current.clientHeight);
    const height = this.imgRef.current.clientHeight;
    console.log("height", height);
    const spans = Math.ceil(height / 10);
    this.setState({ span: spans });
    console.log("spans", spans);
  };

  render() {
    const { description, urls, id } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imgRef} key={id} src={urls.regular} alt={description} />
        {/* {this.state.show
          ? description
          : `${
              description ? description.substring(0, 5) : "No Description"
            }...`}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Show Less" : "Read More"}
        </button> */}
      </div>
    );
  }
}

export default ImageCard;

//  {readMore ? info : `${info.substring(0, 210)}...`}
//           <button onClick={() => setReadMore(!readMore)}>
//             {readMore ? "Show Less" : "Read More"}
//           </button>
