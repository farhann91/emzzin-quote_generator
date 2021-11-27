import React, { Component } from "react";
import "./App.css";
import QuoteContainer from "../components/QuoteContainer/QuoteContainer";

class App extends Component {
  // Set the state
  state = {
    kote: "When it comes to your husstle, exhibit exellence",
    author: "Rick Ross",
    DataisLoaded: false,
  };

  // The function to fetch the data from the API
  fetchQuoteFromApi = async () => {
    // let response = await fetch(
    //   "http://quotes.stormconsultancy.co.uk/random.json"
    // );
    let response = await fetch("https://free-quotes-api.herokuapp.com/");
    let data = await response.json();

    // Set the data to the state
    this.setState({
      kote: data.quote,
      author: data.author,
      DataisLoaded: true,
    });
  };

  // Sending a tweet about the quote
  tweet = async () => {
    let quote = this.state.kote;
    let author = this.state.author;
    const twitterUlr = `https://twitter.com/intent/tweet?text=${quote}. ... By,  ${author}`;
    window.open(twitterUlr, "_blank");
  };

  // Fetching the data from the API
  componentDidMount() {
    this.fetchQuoteFromApi();
  }
  componentWillUnmount() {
    this.setState({
      DataisLoaded: false,
    });
  }
  render() {
    if (!this.state.DataisLoaded) {
      return (
        <div className="loadingText">
          <div className="loader" id="loader"></div>
        </div>
      );
    }
    return (
      <div className="App">
        <QuoteContainer
          kot={this.state.kote}
          author={this.state.author}
          requestQuoteFromApi={this.fetchQuoteFromApi}
          tweet={this.tweet}
        />
      </div>
    );
  }
}

export default App;
