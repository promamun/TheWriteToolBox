import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Contact from './Contact';
import Brodcamp from "../brodcamp/style2";


class Index extends Component {
    render() {
        return (
            <div>
                <Helmet title={'Contact'}/>
                <Brodcamp Title="Contact" SubTile="Contact Us"/>
                <Contact/>
            </div>
        );
    }
}

export default Index;