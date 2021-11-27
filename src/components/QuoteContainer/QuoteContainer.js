import React from "react";
import "./QuoteContainer.css";

const quoteContainer = (props) => {
  return (
    <div className="quote-container">
      <div className="quote-text">
        <i className="fas fa-quote-left"></i>
        <span id="quote">{props.kot}</span>
      </div>

      <div className="quote-author">
        <span id="quote-author">{props.author}</span>
      </div>

      <div className="button-container">
        <button
          className="twitter-button btn btn-primary"
          id="twitter"
          title="Tweet this quote"
          onClick={props.tweet}
        >
          <i className="fab fa-twitter"></i>
        </button>
        <button
          className="new-quote btn btn-success"
          onClick={props.requestQuoteFromApi}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default quoteContainer;
