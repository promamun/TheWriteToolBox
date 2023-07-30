import React, { Component } from "react";
import {Link} from "react-router-dom";
import CourseImg from "../../../assets/images/course/develop-voice.png";
import CourseImg1 from "../../../assets/images/course/story.png";
import CourseImg2 from "../../../assets/images/course/Expert.png";

class CourseAdvice extends Component {
  render() {
    return (
      <div>
        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
          <div className="container">
            {/*// <!-- Start Card Area -->*/}
            <div className="row g-5">
              {/*// <!-- Start Single Course  -->*/}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <Link to="">
                      <img
                        src={CourseImg}
                        alt="Card image"
                      />
                    </Link>
                  </div>
                  <div className="rbt-card-body">
                    <h4 className="rbt-card-title text-center">
                      <Link>Develop Your Voice</Link>
                    </h4>
                    <p className="rbt-card-text text-center">
                      Learn How to Design Your <br />
                      Unforgettable Brand Personal
                    </p>
                  </div>
                </div>
              </div>

              {/*// <!-- End Single Course  -->*/}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <Link to="">
                      <img
                        src={CourseImg1}
                        alt="Card image"
                      />
                    </Link>
                  </div>
                  <div className="rbt-card-body">
                    <h4 className="rbt-card-title text-center">
                      <Link>Connect With Your Story</Link>
                    </h4>
                    <p className="rbt-card-text text-center">
                      Get Our TWT Story Blueprint <br />
                      for Effortless Writing
                    </p>
                  </div>
                </div>
              </div>
              {/*// <!-- Start Single Course  -->*/}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <Link to="">
                      <img
                        src={CourseImg2}
                        alt="Card image"
                      />
                    </Link>
                  </div>
                  <div className="rbt-card-body">
                    <h4 className="rbt-card-title text-center">
                      <Link>Uplevel Your Expert Status</Link>
                    </h4>
                    <p className="rbt-card-text text-center">
                      Create a Sacred Up leveling Ritual <br />
                      That Exponentially Explodes Your Business
                    </p>
                  </div>
                </div>
              </div>
              {/*// <!-- End Single Course  -->*/}
            </div>
            {/*// <!-- End Card Area -->*/}
          </div>
        </div>
      </div>
    );
  }
}

export default CourseAdvice;
