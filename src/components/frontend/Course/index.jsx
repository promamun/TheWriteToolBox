import React, {Component} from 'react';
import CourseAdvice from "./CourseAdvice";
import Course from "./Course";
import {Helmet} from "react-helmet";

class Index extends Component {
    render() {
        return (
            <div>
                <Helmet title={'Course'}/>
                <Course/>
                <CourseAdvice/>
            </div>
        );
    }
}

export default Index;