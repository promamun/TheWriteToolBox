import React, {Component} from 'react';
import Blog from "./blog";
import Brodcamp from "../brodcamp/style2";
import {Helmet} from "react-helmet";

class Index extends Component {
    render() {
        return (
            <div>
                <Helmet title={'Blogs'}/>
                <Brodcamp Title={'Blogs'} SubTile={'All Blogs'}/>
                <Blog/>
            </div>
        );
    }
}

export default Index;