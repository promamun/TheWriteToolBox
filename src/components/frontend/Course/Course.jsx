import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CourseSliderCard from "../slider/CourseSliderCard";

const mapStateToProps = (state) => {
  let { courses, enrolled } = state;
  return { courses, enrolled };
};

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    let { courses } = this.props.courses;

    courses = courses ? courses.courses : [];

    //this is for hide or display content
    const displayNone = {
      display: this.props.display,
    };

    return (
      <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">{this.props.title}</h2>
              </div>
              <div className="text-center mt-5" style={displayNone}>
                <p>
                  Choose the course that fits where you are at
                  <br />
                  <strong>OR</strong>
                  <br />
                  Choose all 4 courses to add a full bundle to your writer’s
                  toolbox.
                  <br />
                  The Writer’s Story Path
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {courses.map((item, key) => {
              return (
                <CourseSliderCard
                  course={item}
                  clasName="col-lg-3 col-md-6 col-12"
                  index={key}
                  key={key}
                />
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
                    <span className="btn-text">
                      {this.props.buttonTitle} (4)
                    </span>
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
    );
  }
}

export default connect(mapStateToProps)(Course);
