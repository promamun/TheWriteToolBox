import React, { Component } from "react";
import CourseAdvice from "./CourseAdvice";
import Course from "./Course";
import { Helmet } from "react-helmet";

class Index extends Component {
  render() {
    return (
      <div>
        <Helmet title={"Course"} />
        <CourseAdvice />
          <Course title='GET STARTED NOW' display='none' buttonTitle='All Courses'/>
      </div>
    );
  }
}

export default Index;
