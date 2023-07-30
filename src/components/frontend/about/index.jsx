import React, {Component} from 'react';
import AboutJanin from "./AboutJanin";
import {Helmet} from "react-helmet";

class Index extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        About Janin
                    </title>
                </Helmet>
                <AboutJanin/>
            </div>
        );
    }
}

export default Index;