import React, { Component } from "react";

class SearchBar extends Component {
  //   constructor(props) {
  //     super(props);

  //     // this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  state = {
    term: "",
  };

  handleChange(e) {
    console.log(e.target.value);
  }

  //     console.log(this.state.term);
  //     this.setState({ term: "" });
  //   }

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(this.state.term);
  //     this.setState({ term: "" });
  //   };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          //   onSubmit={(e) => this.handleSubmit(e)}
          onSubmit={this.handleSubmit}
        >
          <div className="field">
            <label>Image Search Bar</label>
            <input
              className="inp"
              type="text"
              value={this.state.term}
              //   onChange={this.handleChange}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
