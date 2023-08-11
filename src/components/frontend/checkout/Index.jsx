import React from 'react';
import CheckOut from './CheckOut';
import Brodcamp from "../brodcamp/style2";
import {Helmet} from "react-helmet";

function index() {
  return (
    <div>
    <Helmet title="CheckOut"/>
    <Brodcamp Title="Checkout" SubTile="Checkout"/>
    <CheckOut/>
    </div>
  )
}

export default index;