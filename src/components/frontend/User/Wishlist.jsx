import React from "react";
import { Link } from "react-router-dom";
import UserLayout from "./UserLayout";
import Img1 from "../../../assets/images/course/course-online-01.jpg";
import Img2 from "../../../assets/images/course/course-online-02.jpg";
import Img3 from "../../../assets/images/course/course-online-03.jpg";
import Img4 from "../../../assets/images/course/course-online-04.jpg";
import Img5 from "../../../assets/images/course/course-online-06.jpg";
import Img6 from "../../../assets/images/course/course-online-05.jpg";


export default function Wishlist() {
  return (
    <>
      <UserLayout>
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
          <div className="content">
            <div className="section-title">
              <h4 className="rbt-title-style-3">Wishlist</h4>
            </div>
            <div className="row g-5">
              {/*Start Single Course */}
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
                        <Link className="rbt-round-btn" title="Bookmark" to="#">
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

                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$60</span>
                        <span className="off-price">$120</span>
                      </div>
                      <Link className="rbt-btn-link" to="/course-details">
                        Learn More
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Course */}

              {/*Start Single Course */}
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
                        <Link className="rbt-round-btn" title="Bookmark" to="#">
                          <i className="feather-bookmark" />
                        </Link>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <Link to="/course-details">PHP Beginner + Advanced</Link>
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

                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$20</span>
                        <span className="off-price">$43</span>
                      </div>
                      <Link className="rbt-btn-link" to="/course-details">
                        Learn More
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Course */}

              {/*Start Single Course */}
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
                        <Link className="rbt-round-btn" title="Bookmark" to="#">
                          <i className="feather-bookmark" />
                        </Link>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <Link to="/course-details">Angular Zero to Mastery</Link>
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

                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$23</span>
                        <span className="off-price">$45</span>
                      </div>
                      <Link className="rbt-btn-link" to="/course-details">
                        Learn More
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Course */}

              {/*Start Single Course */}
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
                        <Link className="rbt-round-btn" title="Bookmark" to="#">
                          <i className="feather-bookmark" />
                        </Link>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <Link to="/course-details">English Langiage Club</Link>
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
              {/*End Single Course */}

              {/*Start Single Course */}
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
                        <Link className="rbt-round-btn" title="Bookmark" to="#">
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
              {/*End Single Course */}

              {/*Start Single Course */}
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
                        <Link className="rbt-round-btn" title="Bookmark" to="#">
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
              {/*End Single Course */}
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
}
