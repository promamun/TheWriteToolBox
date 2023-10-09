import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import axios from "../../../helper/axios";
import message from "../../../helper/message";
import { Link, useParams } from "react-router-dom";
import { BUCKET_DOMAIN } from "../../../helper/helper";
import moment from "moment";

export default function CourseDetails() {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({});

  const id = useParams()?.id;

  useEffect(() => {
    setLoading(true);

    axios
      .get(`/course/${id}`)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          let { course } = res.data;
          setCourse(course);
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("Something Went Wrong!!!");
      });
  }, [id]);

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <div className="breadcrumb-inner">
          <img src="/assets/images/bg/bg-image-10.jpg" alt="Education Images" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content text-start">
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right" />
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">Course</li>
                </ul>
                <h2 className="title">{course.title}</h2>
                <p className="description">{course.desc}</p>

                <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">
                  <div className="feature-sin best-seller-badge">
                    <span className="rbt-badge-2">
                      <span className="image">
                        <img
                          src="/assets/images/icons/card-icon-1.png"
                          alt="Best Seller Icon"
                        />
                      </span>{" "}
                      Bestseller
                    </span>
                  </div>

                  <div className="feature-sin rating">
                    <Link to="#">4.8</Link>
                    <Link to="#">
                      <i className="fa fa-star"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star"></i>
                    </Link>
                  </div>

                  <div className="feature-sin total-rating">
                    <Link className="rbt-badge-4" to="#">
                      215,475 rating
                    </Link>
                  </div>

                  <div className="feature-sin total-student">
                    <span>616,029 students</span>
                  </div>
                </div>
                <ul className="rbt-meta">
                  <li>
                    <i className="feather-calendar" />
                    {moment(course.createdAt).format("YYYY-MM-DD")}
                  </li>
                  <li>
                    <i className="feather-globe" />
                    English
                  </li>
                  <li>
                    <i className="feather-award" />
                    Certified Course
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-course-details-area ptb--60">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
                  <img
                    className="w-100"
                    src={BUCKET_DOMAIN + course.thumbnail}
                    alt="Course image"
                  />
                </div>
                <div className="rbt-inner-onepage-navigation sticky-top mt--30">
                  <nav className="mainmenu-nav onepagenav">
                    <ul className="mainmenu">
                      <li className="current">
                        <Link to="#overview">Overview</Link>
                      </li>
                      <li>
                        <Link to="#coursecontent">Course Content</Link>
                      </li>
                      <li>
                        <Link to="#details">Details</Link>
                      </li>
                      <li>
                        <Link to="#review">Review</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more"
                  id="overview"
                >
                  <div className="rbt-course-feature-inner has-show-more-inner-content">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">What you'll learn</h4>
                    </div>
                    description
                  </div>
                  <div className="rbt-show-more-btn">Show More</div>
                </div>
                <div
                  className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
                  id="coursecontent"
                >
                  <div className="rbt-course-feature-inner">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">Course Content</h4>
                    </div>
                    <div className="rbt-accordion-style rbt-accordion-02 accordion">
                      <div className="accordion" id="accordionExampleb2">
                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo1"
                          >
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo1"
                              aria-expanded="true"
                              aria-controls="collapseTwo1"
                            >
                              Intro to Course and TWT{" "}
                              <span className="rbt-badge-5 ml--10">
                                1hr 30min
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingTwo1"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="min-lable">30 min</span>
                                      <span className="rbt-badge variation-03 bg-primary-opacity">
                                        <i className="feather-eye"></i> Preview
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">
                                        Watch Before Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="min-lable">0.5 min</span>
                                      <span className="rbt-badge variation-03 bg-primary-opacity">
                                        <i className="feather-eye"></i> Preview
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo2"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo2"
                              aria-expanded="false"
                              aria-controls="collapseTwo2"
                            >
                              Course Fundamentals{" "}
                              <span className="rbt-badge-5 ml--10">
                                2hr 30min
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo2"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo2"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">
                                        Why You Should Not Go To Education.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">
                                        Ten Factors That Affect Education's
                                        Longevity.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo3"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo3"
                              aria-expanded="false"
                              aria-controls="collapseTwo3"
                            >
                              You can develop skill and setup{" "}
                              <span className="rbt-badge-5 ml--10">
                                1hr 50min
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo3"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo3"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">
                                        Why You Should Not Go To Education.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">
                                        Ten Factors That Affect Education's
                                        Longevity.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo4"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo4"
                              aria-expanded="false"
                              aria-controls="collapseTwo4"
                            >
                              15 Things To Know About Education?{" "}
                              <span className="rbt-badge-5 ml--10">
                                2hr 60min
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo4"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo4"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">
                                        Why You Should Not Go To Education.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">
                                        Ten Factors That Affect Education's
                                        Longevity.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item card">
                          <h2
                            className="accordion-header card-header"
                            id="headingTwo5"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo5"
                              aria-expanded="false"
                              aria-controls="collapseTwo5"
                            >
                              Course Description{" "}
                              <span className="rbt-badge-5 ml--10">
                                2hr 20min
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo5"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo5"
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body pr--0">
                              <ul className="rbt-course-main-content liststyle">
                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">Course Intro</span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">
                                        Why You Should Not Go To Education.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-play-circle"></i>{" "}
                                      <span className="text">
                                        Ten Factors That Affect Education's
                                        Longevity.
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>

                                <li>
                                  <Link to="#">
                                    <div className="course-content-left">
                                      <i className="feather-file-text"></i>{" "}
                                      <span className="text">
                                        Read Before You Start
                                      </span>
                                    </div>
                                    <div className="course-content-right">
                                      <span className="course-lock">
                                        <i className="feather-lock"></i>
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
                  id="details"
                >
                  <div className="row g-5">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Details</h4>
                      </div>
                      description
                    </div>
                  </div>
                </div>
                <div
                  className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
                  id="review"
                >
                  <div className="course-content">
                    <div className="section-title">
                      <h4 className="rbt-title-style-3">Review</h4>
                    </div>
                    <div className="row g-5 align-items-center">
                      <div className="col-lg-3">
                        <div className="rating-box">
                          <div className="rating-number">5.0</div>
                          <div className="rating">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </div>
                          <span className="sub-title">Course Rating</span>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="review-wrapper">
                          <div className="single-progress-bar">
                            <div className="rating-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                // style="width: 63%"
                                aria-valuenow="63"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                            <span className="value-text">63%</span>
                          </div>

                          <div className="single-progress-bar">
                            <div className="rating-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                // style="width: 29%"
                                aria-valuenow="29"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                            <span className="value-text">29%</span>
                          </div>

                          <div className="single-progress-bar">
                            <div className="rating-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                // style="width: 6%"
                                aria-valuenow="6"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                            <span className="value-text">6%</span>
                          </div>

                          <div className="single-progress-bar">
                            <div className="rating-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                // style="width: 1%"
                                aria-valuenow="1"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                            <span className="value-text">1%</span>
                          </div>

                          <div className="single-progress-bar">
                            <div className="rating-text">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                // style="width: 1%"
                                aria-valuenow="1"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                            <span className="value-text">1%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
                <div className="inner">
                  {/*Start Viedo Wrapper  */}
                  <Link
                    className="video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15"
                    to="/course-preview"
                  >
                    <div className="video-content">
                      <img
                        className="w-100 rbt-radius"
                        src="/assets/images/others/video-01.jpg"
                        alt="Video Images"
                      />
                      <div className="position-to-top">
                        <span className="rbt-btn rounded-player-2 with-animation">
                          <span className="play-icon"></span>
                        </span>
                      </div>
                      <span className="play-view-text d-block color-white">
                        <i className="feather-eye"></i> Preview this course
                      </span>
                    </div>
                  </Link>

                  <div className="content-item-content">
                    <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                      <div className="rbt-price">
                        <span className="current-price">${course.price}</span>
                        <span className="off-price">$84.99</span>
                      </div>
                      <div className="discount-time">
                        <span className="rbt-badge color-danger bg-color-danger-opacity">
                          <i className="feather-clock"></i> 3 days left!
                        </span>
                      </div>
                    </div>

                    <div className="add-to-card-button mt--15">
                      <Link
                        className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                        to="#"
                      >
                        <span className="btn-text">Add to Cart</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>

                    <div className="buy-now-btn mt--15">
                      <Link
                        className="rbt-btn btn-border icon-hover w-100 d-block text-center"
                        to="#"
                      >
                        <span className="btn-text">Buy Now</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>

                    <span className="subtitle">
                      <i className="feather-rotate-ccw"></i> 30-Day Money-Back
                      Guarantee
                    </span>

                    <div className="rbt-widget-details has-show-more">
                      <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                        <li>
                          <span>Start Date</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            5 Hrs 20 Min
                          </span>
                        </li>
                        <li>
                          <span>Enrolled</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            100
                          </span>
                        </li>
                        <li>
                          <span>Lectures</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            50
                          </span>
                        </li>
                        <li>
                          <span>Skill Level</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Basic
                          </span>
                        </li>
                        <li>
                          <span>Language</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            English
                          </span>
                        </li>
                        <li>
                          <span>Quizzes</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            10
                          </span>
                        </li>
                        <li>
                          <span>Certificate</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Yes
                          </span>
                        </li>
                        <li>
                          <span>Pass Percentage</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            95%
                          </span>
                        </li>
                      </ul>
                      <div className="rbt-show-more-btn">Show More</div>
                    </div>

                    <div className="social-share-wrapper mt--30 text-center">
                      <div className="rbt-post-share d-flex align-items-center justify-content-center">
                        <ul className="social-icon social-default transparent-with-border justify-content-center">
                          <li>
                            <Link to="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.twitter.com/">
                              <i className="feather-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.linkdin.com/">
                              <i className="feather-linkedin"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <hr className="mt--20" />
                      <div className="contact-with-us text-center">
                        <p>For details about the course</p>
                        <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                          <i className="feather-phone mr--5"></i> Call Us:{" "}
                          <Link to="#">
                            <strong>+444 555 666 777</strong>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
}
