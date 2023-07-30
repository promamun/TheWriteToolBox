import React, { Component } from "react";
import Slider from "../slider/Slider";
import AboutJanin from "../about/AboutJanin";
import Testimonial from "../testimonial/Testimonial";
import CourseAdvice from "../Course/CourseAdvice";
import ActionOne from "./ActionOne";

class Index extends Component {
  render() {
    return (
      <div>
        <Slider />
        <AboutJanin />
        <Testimonial />
        <CourseAdvice />
        <ActionOne />
      </div>
    );
  }
}

export default Index;
