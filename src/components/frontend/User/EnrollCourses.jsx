import React from "react";
import UserLayout from "./UserLayout";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/images/course/course-online-01.jpg";
import Img2 from "../../../assets/images/course/course-online-02.jpg";
import Img3 from "../../../assets/images/course/course-online-03.jpg";
import Img4 from "../../../assets/images/course/course-online-04.jpg";
import Img5 from "../../../assets/images/course/course-online-06.jpg";
import Img6 from "../../../assets/images/course/course-online-05.jpg";

export default function EnrollCourses() {
  return (
    <>
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
                  {/*Start Single Course  */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <Link to="/course-details">
                          <img src={Img1} alt="Card image" />
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
                            <span className="rating-count"> (15 Reviews)</span>
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
                          <Link to="/course-details">React Front To Back</Link>
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
                        <div className="rbt-card-bottom">
                          <Link
                            className="rbt-btn btn-sm bg-primary-opacity w-100 text-center"
                            to="#"
                          >
                            Download Certificate
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single Course  */}

                  {/*Start Single Course  */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <Link to="/course-details">
                          <img src={Img2} alt="Card image" />
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
                            <span className="rating-count"> (15 Reviews)</span>
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
                          <Link to="/course-details">
                            PHP Beginner + Advanced
                          </Link>
                        </h4>
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-book" />
                            10 Lessons
                          </li>
                          <li>
                            <i className="feather-users" />
                            30 Students
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
                                // style="width: 40%"
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                              <span className="rbt-title-style-2 progress-number">
                                40%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="rbt-card-bottom">
                          <Link
                            className="rbt-btn btn-sm bg-primary-opacity w-100 text-center"
                            to="#"
                          >
                            Download Certificate
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single Course  */}

                  {/*Start Single Course  */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <Link to="/course-details">
                          <img src={Img3} alt="Card image" />
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
                            <span className="rating-count"> (4 Reviews)</span>
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
                          <Link to="/course-details">
                            Angular Zero to Mastery
                          </Link>
                        </h4>
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-book" />
                            14 Lessons
                          </li>
                          <li>
                            <i className="feather-users" />
                            26 Students
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
                                // style="width: 65%"
                                aria-valuenow="65"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                              <span className="rbt-title-style-2 progress-number">
                                65%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="rbt-card-bottom">
                          <Link
                            className="rbt-btn btn-sm bg-primary-opacity w-100 text-center"
                            to="#"
                          >
                            Download Certificate
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single Course  */}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="profile-4"
                role="tabpanel"
                aria-labelledby="profile-tab-4"
              >
                <div className="row g-5">
                  {/*Start Single Course  */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <Link to="/course-details">
                          <img src={Img4} alt="Card image" />
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
                            <span className="rating-count"> (3 Reviews)</span>
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
                          <Link to="/course-details">
                            English Langiage Club
                          </Link>
                        </h4>
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-book" />
                            20 Lessons
                          </li>
                          <li>
                            <i className="feather-users" />
                            30 Students
                          </li>
                        </ul>

                        <div className="rbt-card-bottom">
                          <div className="rbt-price">
                            <span className="current-price">$40</span>
                            <span className="off-price">$86</span>
                          </div>
                          <Link className="rbt-btn-link" to="/course-details">
                            Learn More
                            <i className="feather-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single Course  */}

                  {/*Start Single Course  */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <Link to="/course-details">
                          <img src={Img5} alt="Card image" />
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
                            <span className="rating-count"> (3 Reviews)</span>
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
                          <Link to="/course-details">Graphic Courses Club</Link>
                        </h4>
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-book" />
                            50 Lessons
                          </li>
                          <li>
                            <i className="feather-users" />
                            10 Students
                          </li>
                        </ul>

                        <div className="rbt-card-bottom">
                          <div className="rbt-price">
                            <span className="current-price">$40</span>
                            <span className="off-price">$86</span>
                          </div>
                          <Link className="rbt-btn-link" to="/course-details">
                            Learn More
                            <i className="feather-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single Course  */}

                  {/*Start Single Course  */}
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <Link to="/course-details">
                          <img src={Img6} alt="Card image" />
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
                            <span className="rating-count"> (3 Reviews)</span>
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
                          <Link to="/course-details">Wed Design Club</Link>
                        </h4>
                        <ul className="rbt-meta">
                          <li>
                            <i className="feather-book" />
                            20 Lessons
                          </li>
                          <li>
                            <i className="feather-users" />
                            30 Students
                          </li>
                        </ul>
                        <div className="rbt-card-bottom">
                          <div className="rbt-price">
                            <span className="current-price">$40</span>
                            <span className="off-price">$86</span>
                          </div>
                          <Link className="rbt-btn-link" to="/course-details">
                            Learn More
                            <i className="feather-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Single Course  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
}
