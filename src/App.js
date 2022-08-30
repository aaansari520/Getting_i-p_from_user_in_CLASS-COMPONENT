import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { render } from "@testing-library/react";
import { Component } from "react";
import axios from "axios";
import unsplash from "./api/unsplash";

class App extends Component {
  // handleSubmit(term) {
  //   console.log(term);
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           "Client-ID P56U2MF2QU0XJZ6Qnn4-a5Ztsz0YcOxBvce88P1gdCg",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.results);
  //     });
  // }

  state = {
    images: [],
  };

  // handleSubmit = async (term) => {
  //   console.log(term);
  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: { query: term },
  //     headers: {
  //       Authorization: "Client-ID P56U2MF2QU0XJZ6Qnn4-a5Ztsz0YcOxBvce88P1gdCg",
  //     },
  //   });
  //   // console.log("Response", response.data.results);
  //   this.setState({ images: response.data.results });
  // };

  handleSubmit = async (term) => {
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log("Response", response.data.results);
    this.setState({ images: response.data.results });
    localStorage.setItem(JSON.stringify("Response", this.state.images));
    console.log("Response", response.data.results);
  };

  render() {
    return (
      <div className="ui container">
        Hello
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.images ? <h3>Found : {this.state.images.length}</h3> : ""}
        <div>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;

// (

// ,
