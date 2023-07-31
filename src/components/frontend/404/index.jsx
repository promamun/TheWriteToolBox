import React, { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div>
        <div className="rbt-error-area bg-gradient-11 rbt-section-gap">
          <div className="error-area">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-10">
                  <h1 className="title">
                    4<strong className={"text-danger"}>0</strong>4!
                  </h1>
                  <h3 className="sub-title">Page not found</h3>
                  <p>The page you were looking for could not be found.</p>
                  <Link className="rbt-btn btn-gradient icon-hover" to="/">
                    <span className="btn-text">Back To Home</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
