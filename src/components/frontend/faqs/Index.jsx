import React from 'react';
import Faqs from './Faqs';
import Brodcamp from "../brodcamp/style2";
import {Helmet} from "react-helmet";

function index() {
  return (
    <div>
    <Helmet title="Faqs"/>
    <Brodcamp Title="Faqs" SubTile="Faqs"/>
    <Faqs/>
    </div>
  )
}

export default index