import React, {Component} from 'react';
import Slider from "../slider/Slider";
import AboutJanin from "../about/AboutJanin";
import Testimonial from "../testimonial/Testimonial";
import CourseAdvice from "../Course/CourseAdvice";
import ActionOne from "./ActionOne";
import Course from "../Course/Course";
import JaninFbStory from "./JaninFbStory";
import FreeCourseContact from "../contact/FreeCourseContact";
import Blog from "../blog/blog";
import JaninBook from "./JaninBook";
import Newsletter from "./Newsletter";

class Index extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <AboutJanin/>
                <Testimonial/>
                <CourseAdvice/>
                <ActionOne/>
                <Course/>
                <JaninFbStory/>
                <FreeCourseContact/>
                <JaninBook/>
                <Blog/>
                <Newsletter/>
            </div>
        );
    }
}

export default Index;