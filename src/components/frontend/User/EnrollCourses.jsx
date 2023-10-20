import React, { useEffect } from "react";
import UserLayout from "./UserLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourses } from "../../../app/action/EnrolledAction";
import { BUCKET_DOMAIN } from "../../../helper/helper";

export default function EnrollCourses() {
  const dispatch = useDispatch();
  const enrolled = useSelector((state) => state.enrolled);

  useEffect(() => {
    dispatch(getEnrolledCourses());
  }, []);

  const enrolled_courses =
    !enrolled.loading && enrolled.enrolled
      ? enrolled.enrolled.enrolled_courses
      : [];

  return (
    <UserLayout>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Enrolled Courses</h4>
          </div>
          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="myTab-4"
              role="tablist"
            >
              <li role="presentation">
                <Link
                  to="#"
                  className="tab-button active"
                  id="home-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#home-4"
                  role="tab"
                  aria-controls="home-4"
                  aria-selected="true"
                >
                  <span className="title">Enrolled Courses</span>
                </Link>
              </li>
              <li role="presentation">
                <Link
                  to="#"
                  className="tab-button"
                  id="profile-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-4"
                  role="tab"
                  aria-controls="profile-4"
                  aria-selected="false"
                >
                  <span className="title">Active Courses</span>
                </Link>
              </li>
              <li role="presentation">
                <Link
                  to="#"
                  className="tab-button"
                  id="contact-tab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-4"
                  role="tab"
                  aria-controls="contact-4"
                  aria-selected="false"
                >
                  <span className="title">Completed Courses</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="home-4"
              role="tabpanel"
              aria-labelledby="home-tab-4"
            >
              <div className="row g-5">
                {enrolled_courses.map(({ course_id }, key) => {
                  return (
                    <div key={key} className="col-lg-4 col-md-6 col-12">
                      <div className="rbt-card variation-01 rbt-hover">
                        <div className="rbt-card-img">
                          <Link to={`/course-details/${course_id._id}`}>
                            <img
                              src={BUCKET_DOMAIN + course_id.thumbnail}
                              alt="Card image"
                            />
                          </Link>
                        </div>
                        <div className="rbt-card-body">
                          <div className="rbt-card-top">
                            <div className="rbt-review">
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <span className="rating-count">(15 Reviews)</span>
                            </div>
                            <div className="rbt-bookmark-btn">
                              <Link
                                className="rbt-round-btn"
                                title="Bookmark"
                                to="#"
                              >
                                <i className="feather-bookmark" />
                              </Link>
                            </div>
                          </div>
                          <h4 className="rbt-card-title">
                            <Link to={`/course-details/${course_id._id}`}>
                              {course_id.title}
                            </Link>
                          </h4>
                          <ul className="rbt-meta">
                            <li>
                              <i className="feather-book" />
                              20 Lessons
                            </li>
                            <li>
                              <i className="feather-users" />
                              40 Students
                            </li>
                          </ul>

                          <div className="rbt-progress-style-1 mb--20 mt--10">
                            <div className="single-progress">
                              <h6 className="rbt-title-style-2 mb--10">
                                Complete
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft bar-color-success"
                                  data-wow-duration="0.5s"
                                  data-wow-delay=".3s"
                                  role="progressbar"
                                  // style="width: 90%"
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                                <span className="rbt-title-style-2 progress-number">
                                  90%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
