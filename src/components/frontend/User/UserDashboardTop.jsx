import React from "react";
import {Link} from "react-router-dom";

export default function UserDashboardTop() {
  return (
    <>
      <div className="rbt-dashboard-content-wrapper">
        <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
        {/*Start Tutor Information  */}
        <div className="rbt-tutor-information">
          <div className="rbt-tutor-information-left">
            <div className="thumbnail rbt-avatars size-lg">
              <img src="assets/images/team/avatar-2.jpg" alt="Instructor" />
            </div>
            <div className="tutor-content">
              <h5 className="title">Emily Hannah</h5>
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
              <Link className="rbt-btn btn-md hover-icon-reverse" to="#">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Become an Instructor</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/*End Tutor Information  */}
      </div>
    </>
  );
}
