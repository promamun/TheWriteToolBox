import React, { Component } from "react";
import Testimonial from "./Testimonial";
import {Helmet} from "react-helmet";

class Index extends Component {
    render() {
        return (
            <div>
                <Helmet title={'Testimonials'}/>
                <Testimonial/>
            </div>
        );
    }
}

export default Index;
