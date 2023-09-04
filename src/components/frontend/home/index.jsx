import React, { Component } from "react";
import Slider from "../slider/Slider";
import AboutJanin from "../about/AboutJanin";
import Testimonial from "../testimonial/Testimonial";
import CourseAdvice from "../Course/CourseAdvice";
import ActionOne from "./ActionOne";
import Course from "../Course/Course";
import JaninFbStory from "./JaninFbStory";
import FreeCourseContact from "../contact/FreeCourseContact";
import Blog from "../blog/Blog";
import JaninBook from "./JaninBook";
import Newsletter from "./Newsletter";
import { Helmet } from "react-helmet";
import { getAllCourses } from "../../../app/action/CourseAction";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";

const mapStateToProps = (state) => {
  let { courses } = state;
  return { courses };
};

const mapActionToProps = (dispatch) => {
  return {
    getAllCourses: () => dispatch(getAllCourses()),
  };
};

class Index extends Component {
  componentDidMount = () => {
    this.props.getAllCourses();
  };

  render() {
    let { loading } = this.props.courses;

    return (
      <LoadingOverlay active={loading} spinner text="Loading ...">
        <Helmet title={"Home"} />
        <Slider />
        <AboutJanin />
        <Testimonial />
        <CourseAdvice />
        <ActionOne />
        <Course
          title="GET STARTED NOW"
          display="none"
          buttonTitle="All Courses"
        />
        <JaninFbStory />
        <FreeCourseContact />
        <JaninBook />
        <Blog />
        <Newsletter />
      </LoadingOverlay>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Index);
