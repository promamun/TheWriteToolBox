import React, {Component} from 'react';
import Membership from "./Membership";
import {Helmet} from "react-helmet";

class Index extends Component {
    render() {
        return (
            <>
                <Helmet title={'Membership'}/>
                <Membership/>
            </>
        );
    }
}

export default Index;