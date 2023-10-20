import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import axios from "../../../helper/axios";
import message from "../../../helper/message";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BUCKET_DOMAIN } from "../../../helper/helper";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getCartDetails } from "../../../app/action/CartAction";
import config from "../../../helper/config";
import _ from "lodash";
import { getEnrolledCourses } from "../../../app/action/EnrolledAction";

export default function CourseDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartDetails = useSelector((state) => state.cart_details);
  const enrolled = useSelector((state) => state.enrolled);

  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({});
  const [allSection, setAllSections] = useState([]);

  const [isCollapsed, setCollapsed] = useState([]);

  const id = useParams()?.id;

  useEffect(() => {
    setLoading(true);

    axios
      .get(`/course/${id}`)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          let { course, sections } = res.data;
          setCourse(course);
          setAllSections(sections);
          let arr = new Array(sections.length).fill(false);

          if (sections.length > 0) {
            arr[0] = true;
          }
          setCollapsed([...arr]);
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

  const addToCart = (courseId, gotoCheckOut = false) => {
    setLoading(true);

    const formData = {
      course_id: courseId,
    };

    axios
      .post("/add-to-cart", formData, config)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          message.success(res.data.message);
          dispatch(getCartDetails());
          if (gotoCheckOut) {
            navigate({
              pathname: "/checkout",
            });
          }
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
  };

  const enrolledCourse = (courseId) => {
    setLoading(true);

    const formData = {
      course_id: courseId,
    };

    axios
      .post("/enrolled", formData, config)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          message.success(res.data.message);
          dispatch(getEnrolledCourses());
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
  };

  const isPresent = (id, data = []) => {
    return _.findIndex(data, (o) => o.course_id._id === id) !== -1;
  };

  const allCarts =
    !cartDetails.loading && cartDetails.cart_details
      ? cartDetails.cart_details.carts
      : [];

  const enrolled_courses =
    !enrolled.loading && enrolled.enrolled
      ? enrolled.enrolled.enrolled_courses
      : [];

  const isEnrolled = (id, data = []) => {
    return _.findIndex(data, (o) => o.course_id === id) !== -1;
  };

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
                      <i className="fa fa-star" />
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star" />
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star" />
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star" />
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star" />
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
                    alt={course.title}
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

                {/* <div
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
                </div> */}

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
                        {allSection.map((section, key) => {
                          return (
                            <div key={key} className="accordion-item card">
                              <h2
                                className="accordion-header card-header"
                                id={`heading_${key}`}
                              >
                                <button
                                  className={`accordion-button ${
                                    isCollapsed[key] ? "" : "collapsed"
                                  } `}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse_${key}`}
                                  aria-expanded="true"
                                  aria-controls={`collapse_${key}`}
                                  onClick={() => {
                                    let arr = [...isCollapsed];
                                    arr[key] = !arr[key];
                                    setCollapsed([...arr]);
                                  }}
                                >
                                  {section.sec_title}
                                  <span className="rbt-badge-5 ml--10">
                                    {section.total_duration}
                                  </span>
                                </button>
                              </h2>
                              <div
                                id={`collapse_${key}`}
                                className={`accordion-collapse collapse ${
                                  isCollapsed[key] ? "show" : ""
                                }`}
                                aria-labelledby={`heading_${key}`}
                                data-bs-parent="#accordionExampleb2"
                              >
                                <div className="accordion-body card-body pr--0">
                                  <ul className="rbt-course-main-content liststyle">
                                    {section.videos.map((content, c_key) => {
                                      return (
                                        <li key={c_key}>
                                          <Link
                                            to={`/course-preview?id=${id}&sec_pos=${key}&vdo_pos=${c_key}`}
                                          >
                                            <div className="course-content-left">
                                              <i className="feather-play-circle" />
                                              <span className="text">
                                                {content.asset_title ||
                                                  "Demo Title"}
                                              </span>
                                            </div>
                                            <div className="course-content-right">
                                              <span className="min-lable">
                                                {content.duration}
                                              </span>
                                              <span className="rbt-badge variation-03 bg-primary-opacity">
                                                <i className="feather-eye" />
                                                Preview
                                              </span>
                                            </div>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
                      <div dangerouslySetInnerHTML={{ __html: course.desc }} />
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
                    to={`/course-preview?id=${id}&sec_pos=0&vdo_pos=0`}
                  >
                    <div className="video-content">
                      <img
                        className="w-100 rbt-radius"
                        src={BUCKET_DOMAIN + course.thumbnail}
                        alt="Video Images"
                      />
                      <div className="position-to-top">
                        <span className="rbt-btn rounded-player-2 with-animation">
                          <span className="play-icon" />
                        </span>
                      </div>
                      <span className="play-view-text d-block color-white">
                        <i className="feather-eye" /> Preview this course
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
                          <i className="feather-clock" /> 3 days left!
                        </span>
                      </div>
                    </div>

                    {isEnrolled(id, enrolled_courses) ? (
                      <div className="add-to-card-button mt--15">
                        <div className="rbt-btn btn-gradient icon-hover w-100 d-block text-center">
                          <span className="btn-text">ENROLLED</span>
                        </div>
                      </div>
                    ) : course.isFree ? (
                      <div className="add-to-card-button mt--15">
                        <button
                          className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                          onClick={() => enrolledCourse(id)}
                        >
                          ENROLLE NOW
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </button>
                      </div>
                    ) : isPresent(id, allCarts) ? (
                      <div className="add-to-card-button mt--15">
                        <Link
                          className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                          to="/cart"
                        >
                          <span className="btn-text">Go To Cart</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    ) : (
                      <div className="add-to-card-button mt--15">
                        <button
                          className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                          onClick={() => addToCart(id)}
                        >
                          Add To Cart
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </button>
                      </div>
                    )}

                    {!isEnrolled(id, enrolled_courses) && !course.isFree && (
                      <div className="buy-now-btn mt--15">
                        {isPresent(id, allCarts) ? (
                          <Link
                            className="rbt-btn btn-border icon-hover w-100 d-block text-center"
                            to="/checkout"
                          >
                            <span className="btn-text">Buy Now</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                          </Link>
                        ) : (
                          <button
                            className="rbt-btn btn-border icon-hover w-100 d-block text-center"
                            onClick={() => addToCart(id, true)}
                          >
                            Buy Now
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                          </button>
                        )}
                      </div>
                    )}

                    <span className="subtitle">
                      <i className="feather-rotate-ccw" /> 30-Day Money-Back
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
                              <i className="feather-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.twitter.com/">
                              <i className="feather-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.instagram.com/">
                              <i className="feather-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.linkdin.com/">
                              <i className="feather-linkedin" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <hr className="mt--20" />
                      <div className="contact-with-us text-center">
                        <p>For details about the course</p>
                        <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                          <i className="feather-phone mr--5" /> Call Us:{" "}
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
