import React from "react";
import Cart from "./Cart";
import { Helmet } from "react-helmet";
import Bordcamp from "../brodcamp/style2";

function Index() {
  return (
    <div>
      <Helmet title="Cart" />
      <Bordcamp Title="Cart" SubTile="Cart" />
      <Cart/>
    </div>
  );
}

export default Index;
