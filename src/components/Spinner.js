import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center text-primary">
        <div className="spinner-border my-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Spinner;
