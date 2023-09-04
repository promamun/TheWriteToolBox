import React, { Component } from "react";
import { Link } from "react-router-dom";
import BlogImg from "../../../assets/images/blog/blog-card-01.jpg";
import BlogImg1 from "../../../assets/images/blog/blog-card-02.jpg";
import BlogImg2 from "../../../assets/images/blog/blog-card-03.jpg";
import BlogImg3 from "../../../assets/images/blog/blog-card-03.jpg";

class Blog extends Component {
  render() {
    return (
      <>
        <div>
          <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
            <div className="container">
              <div className="row g-5 align-items-center mb--30">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="section-title">
                    <span className="subtitle bg-pink-opacity">Blog Post</span>
                    <h2 className="title">Post Popular Post.</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="read-more-btn text-start text-md-end">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      to="/blog"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">See All Articles</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/*// <!-- Start Card Area -->*/}
              <div className="row row--15">
                {/*// <!-- Start Single Card  -->*/}
                <div
                  className="col-lg-6 col-md-12 col-sm-12 col-12 mt--30"
                  // data-sal-delay="150"
                  // data-sal="slide-up"
                  // data-sal-duration="800"
                >
                  <div className="rbt-card variation-02 height-330 rbt-hover">
                    <div className="rbt-card-img">
                      <Link to="/blog-details">
                        <img src={BlogImg} alt="Card image" />
                      </Link>
                    </div>
                    <div className="rbt-card-body">
                      <h3 className="rbt-card-title">
                        <Link to="/blog-details">React</Link>
                      </h3>
                      <p className="rbt-card-text">
                        It is a long established fact that a reader.
                      </p>
                      <div className="rbt-card-bottom">
                        <Link className="transparent-button" to="/blog-details">
                          Learn More
                          <i>
                            <svg
                              width="17"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#27374D"
                                fill="none"
                                // fillRule="evenodd"
                              >
                                <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                                <path
                                  // strokeLinecap="square"
                                  d="M.663 5.572h14.594"
                                />
                              </g>
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*// <!-- End Single Card  -->*/}
                <div
                  className="col-lg-6 col-md-12 col-sm-12 col-12 mt--30"
                  // data-sal-delay="150"
                  // data-sal="slide-up"
                  // data-sal-duration="800"
                >
                  {/*// <!-- Start Single Card  -->*/}
                  <div className="rbt-card card-list variation-02 rbt-hover">
                    <div className="rbt-card-img">
                      <Link to="/blog-details">
                        <img src={BlogImg1} alt="Card image" />
                      </Link>
                    </div>
                    <div className="rbt-card-body">
                      <h5 className="rbt-card-title">
                        <Link to="/blog-details">
                          Why Is Education So Famous?
                        </Link>
                      </h5>
                      <div className="rbt-card-bottom">
                        <Link className="transparent-button" to="/blog-details">
                          Read Article
                          <i>
                            <svg
                              width="17"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#27374D"
                                fill="none"
                                // fillRule="evenodd"
                              >
                                <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                                <path
                                  strokeLinecap="square"
                                  d="M.663 5.572h14.594"
                                />
                              </g>
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*// <!-- End Single Card  -->*/}

                  {/*// <!-- Start Single Card  -->*/}
                  <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                    <div className="rbt-card-img">
                      <Link to="/blog-details">
                        <img src={BlogImg2} alt="Card image" />
                      </Link>
                    </div>
                    <div className="rbt-card-body">
                      <h5 className="rbt-card-title">
                        <Link to="/blog-details">
                          Difficult Things About Education.
                        </Link>
                      </h5>
                      <div className="rbt-card-bottom">
                        <Link className="transparent-button" to="/blog-details">
                          Read Article
                          <i>
                            <svg
                              width="17"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#27374D"
                                fill="none"
                                // fillRule="evenodd"
                              >
                                <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                                <path
                                  // strokeLinecap="square"
                                  d="M.663 5.572h14.594"
                                />
                              </g>
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*// <!-- End Single Card  -->*/}

                  {/*// <!-- Start Single Card  -->*/}
                  <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                    <div className="rbt-card-img">
                      <Link to="/blog-details">
                        <img src={BlogImg3} alt="Card image" />
                      </Link>
                    </div>
                    <div className="rbt-card-body">
                      <h5 className="rbt-card-title">
                        <Link to="/blog-details">
                          Education Is So Famous, But Why?
                        </Link>
                      </h5>
                      <div className="rbt-card-bottom">
                        <Link className="transparent-button" to="/blog-details">
                          Read Article
                          <i>
                            <svg
                              width="17"
                              height="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#27374D"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                                <path
                                  // strokeLinecap="square"
                                  d="M.663 5.572h14.594"
                                />
                              </g>
                            </svg>
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*// <!-- End Single Card  -->*/}
                </div>
              </div>
              {/*// <!-- End Card Area -->*/}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
