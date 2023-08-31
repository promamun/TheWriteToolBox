import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import JanineIntro from "./JanineIntro";
import Newsletter from "../home/Newsletter";

class Index extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        About Janin
                    </title>
                </Helmet>
                <JanineIntro/>
                <Newsletter/>
            </div>
        );
    }
}

export default Index;