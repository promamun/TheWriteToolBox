import React, { Component } from "react";

export default class UserDashboardTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
    };
  }
  componentDidMount = () => {
    let userDetails = localStorage.getItem("userDetails");

    userDetails = userDetails ? JSON.parse(userDetails) : {};
    this.setState({ userDetails });
  };

  render() {
    let { userDetails } = this.state;
    return (
      <div className="rbt-dashboard-content-wrapper">
        <div className="tutor-bg-photo bg_image bg_image--23 height-350" />

        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
              <img src="assets/images/team/avatar-2.jpg" alt="Instructor" />
            </div>
            <div className="tutor-content">
              <h5 className="title">{userDetails.name}</h5>
              <ul className="rbt-meta rbt-meta-white mt--5">
                <li>
                  <i className="feather-book" />5 Courses Enroled
                </li>
                <li>
                  <i className="feather-award" />4 Certificate
                </li>
              </ul>
            </div>
          </div>
          <div className="rbt-tutor-information-right">
            <div className="tutor-btn">
              <a className="rbt-btn btn-md hover-icon-reverse" href="#">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Become an Instructor</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
