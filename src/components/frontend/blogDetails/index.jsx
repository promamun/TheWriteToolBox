import React from 'react';
import BlogDetails from './BlogDetails';
import Brodcamp from "../brodcamp/style2";
import { Helmet } from "react-helmet";


export default function Index() {
  return (
    <div>
    <Helmet title="Blogs" />
    <Brodcamp Title="Details" SubTile="Blogs-Details" />
    <BlogDetails />
    </div>
  )
}
