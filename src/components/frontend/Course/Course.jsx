import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../../helper/axios";

import message from "../../../helper/message";
import { BUCKET_DOMAIN } from "../../../helper/helper";

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      courses: [],
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });

    axios
      .get("/all-courses")
      .then((res) => {
        this.setState({ isLoading: true });

        if (res.data.success) {
          let { courses } = res.data;
          this.setState({ courses });
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
  };

  render() {
    let { courses } = this.state;
    return (
      <div>
        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    Build My Expert Status
                  </span>
                  <h2 className="title">Explode My Expert Status</h2>
                </div>
              </div>
            </div>

            <div className="row g-5">
              {courses.map((item, key) => {
                return (
                  <div className="col-lg-3 col-md-6 col-12" key={key}>
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <Link to={`/course-details/${item._id}`}>
                          <img
                            src={BUCKET_DOMAIN + item.thumbnail}
                            alt="Card image"
                          />
                          <div className="rbt-badge-3-custom bg-white">
                            <span>-50%</span>
                            <span>Off</span>
                          </div>
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
                          <Link to={`/course-details/${item._id}`}>
                            {item.title}
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
                        <p className="rbt-card-text">{item.desc}</p>
                        <div className="rbt-card-bottom">
                          <div className="rbt-price">
                            <span className="current-price">${item.price}</span>
                            <span className="off-price">$120</span>
                          </div>
                          <Link
                            className="rbt-btn-link left-icon"
                            // style="cursor: pointer"
                          >
                            <i className="feather-shopping-cart" /> Add To Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="load-more-btn mt--60 text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                    to="/courses"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">All Course (4)</span>
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
          </div>
        </div>
      </div>
    );
  }
}
