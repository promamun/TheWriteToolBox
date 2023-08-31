import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Brodcamp from "../brodcamp/style2";
import Membership from "./Membership";
import FreeCourseContact from '../contact/FreeCourseContact';

class Index extends Component {
    render() {
        return (
            <div>
                <Helmet title="Membership"/>
                <Brodcamp Title="Membership" SubTile="Membership Plan" />
                <Membership/>
                <FreeCourseContact/>
            </div>
        );
    }
}

export default Index;
