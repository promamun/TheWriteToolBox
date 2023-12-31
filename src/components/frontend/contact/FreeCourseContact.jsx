import React, { Component } from "react";
import CustomInput from "../inputComponent/CustomInput";
import TextArea from "../inputComponent/TextArea";
import Button from "../inputComponent/Button";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/testimonial/client-03.png";
import Img1 from "../../../assets/images/testimonial/client-04.png";
import Img2 from "../../../assets/images/testimonial/client-06.png";
import Img3 from "../../../assets/images/icons/three-shape.png";

class FreeCourseContact extends Component {
  render() {
    return (
      <div>
        <div className="rbt-banner-area rbt-banner-3 bg-gradient-6 header-transperent-spacer">
          <div className="wrapper">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-7 order-2 order-lg-1">
                  <div className="banner-content ">
                    <div className="inner">
                      <div className="section-title text-start">
                        <span className="subtitle bg-pink-opacity">
                          THE OFFER FOR YOU
                        </span>
                      </div>
                      <h1 className="title">
                        Online Learning <br /> Management System
                      </h1>
                      <p className="description">
                        We are experienced in educational platform and skilled
                        strategies for the success of our online learning.
                      </p>
                      <div className="rating mb--20">
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
                      <div className="rbt-like-total">
                        <div className="profile-share">
                          <Link
                            to="#"
                            className="avatar"
                            data-tooltip="Mark JOrdan"
                            tabIndex="0"
                          >
                            <img
                              src={Img}
                              alt="education"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="avatar"
                            data-tooltip="Mark"
                            tabIndex="0"
                          >
                            <img
                              src={Img1}
                              alt="education"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="avatar"
                            data-tooltip="Jordan"
                            tabIndex="0"
                          >
                            <img
                              src={Img2}
                              alt="education"
                            />
                          </Link>
                          <div className="more-author-text">
                            <h5 className="total-join-students">
                              Join Over 3000+ Students
                            </h5>
                            <p className="subtitle">
                              Have a new ideas every week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 order-1 order-lg-2">
                  <div className="rbt-contact-form contact-form-style-1">
                    <h3 className="title">Get a Free TWT Online Course</h3>
                    <form id="contact-form">
                      <div className="form-group">
                       <CustomInput Label="Full Name" type="text"  />
                      </div>
                      <div className="form-group">
                      <CustomInput Label="Email" type="email"  />
                      </div>
                      <div className="form-group">
                       <TextArea Label="Message" />
                      </div>
                      <div className="form-submit-group">
                        <Button name="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-wrapper">
            <div className="left-shape">
              <img
                src={Img3}
                alt="Shape Images"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FreeCourseContact;
