import React, {Component} from 'react';
import Membership from "./Membership";
import {Helmet} from "react-helmet";
import FreeCourseContact from '../contact/FreeCourseContact';

class Index extends Component {
    render() {
        return (
            <>
                <Helmet title={'Membership'}/>
                <Membership/>
                <FreeCourseContact/>
            </>
        );
    }
}

export default Index;