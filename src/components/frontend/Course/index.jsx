import React, {Component} from 'react';
import CourseAdvice from "./CourseAdvice";
import Course from "./Course";

class Index extends Component {
    render() {
        return (
            <div>
                <Course/>
                <CourseAdvice/>
            </div>
        );
    }
}

export default Index;