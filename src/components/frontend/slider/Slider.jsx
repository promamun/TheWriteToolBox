import React, { Component } from "react";
import { Link } from "react-router-dom";
import SliderImg from "../../../assets/image/the-write-toolbox.png";
import SliderImg1 from "../../../assets/images/shape/shape-01.png";
import SliderImg2 from "../../../assets/images/shape/shape-02.png";
import SliderImg3 from "../../../assets/images/course/course-01.jpg";



class Slider extends Component {
  render() {
    return (
      <div>
        <div className="rbt-banner-area rbt-banner-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pb--120 pt--70">
                <div className="content">
                  <div className="inner">
                    <div className="rbt-new-badge rbt-new-badge-one">
                      <span className="rbt-new-badge-icon">🏆</span> The Leader
                      in Online Learning
                    </div>
                    <h1 className="title">
                      We Help You Write
                      <br />
                      <span className="header-caption">
                        <span className="cd-headline clip is-full-width">
                          <span className="cd-words-wrapper">
                            <b className="is-visible theme-gradient">Blogs.</b>
                            <b className="is-hidden theme-gradient">Books.</b>
                            <b className="is-hidden theme-gradient">
                              Articles.
                            </b>
                            <b className="is-hidden theme-gradient">
                              Guest Blog Posts.
                            </b>
                            <b className="is-hidden theme-gradient">
                              Website Contents.
                            </b>
                            <b className="is-hidden theme-gradient">
                              Email Campaigns.
                            </b>
                            <b className="is-hidden theme-gradient">
                              Social Media Posts.
                            </b>
                          </span>
                        </span>
                      </span>
                    </h1>
                    <p className="description">
                      Increasing Confidence, Clarity & Publicity for Self-Made
                      Industry Leaders and Influencers Who Want to Uplevel Their
                      Expert Status Through Real,
                      <strong>Story-Based Written Content.</strong>
                    </p>
                    <div className="slider-btn">
                      <Link
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        to=""
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">View Course</span>
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
                  <div className="shape-wrapper" id="scene">
                    <img
                      src={SliderImg}
                      alt="Hero Image"
                    />
                    <div className="hero-bg-shape-1 layer" data-depth="0.4">
                      <img
                        src={SliderImg1}
                        alt="Hero Image Background Shape"
                      />
                    </div>
                    <div className="hero-bg-shape-2 layer" data-depth="0.4">
                      <img
                        src={SliderImg2}
                        alt="Hero Image Background Shape"
                      />
                    </div>
                  </div>

                  <div className="banner-card pb--60 mb--50 swiper mySwiper rbt-dot-bottom-center banner-swiper-active">
                    <div className="swiper-wrapper ">
                      {/*// <!-- Start Single Card  -->*/}
                      <div className="swiper-slide">
                        <div className="rbt-card variation-01 rbt-hover">
                          <div className="rbt-card-img">
                            <Link to="">
                              <img
                                src={SliderImg3}
                                alt="Course image"
                              />
                              <div className="rbt-badge-3 bg-white">
                                <span>-40%</span>
                                <span>Off</span>
                              </div>
                            </Link>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-book" />
                                12 Lessons
                              </li>
                              <li>
                                <i className="feather-users" />
                                50 Students
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <Link to="">title</Link>
                            </h4>
                            <p className="rbt-card-text">description</p>
                            <div className="rbt-review">
                              <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <span className="rating-count">
                                {" "}
                                (15 Reviews)
                              </span>
                            </div>
                            <div className="rbt-card-bottom">
                              <div className="rbt-price">
                                <span className="current-price">$70</span>
                                <span className="off-price">$120</span>
                              </div>
                              <Link
                                className="rbt-btn-link left-icon"
                                onClick=""
                                // style="cursor: pointer"
                              >
                                <i className="feather-shopping-cart" />
                                Add To Cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
