import React, { Component } from "react";
import Counter from "../Counter";
import SearchForm from "../SearchForm";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="div-container">
        <Counter />
        <SearchForm />
      </div>
    );
  }
}

export default Header;
