import React from 'react'
import Brodcamp from "../brodcamp/style2";
import {Link} from "react-router-dom";

export default function Cart() {
  return (
    <>
      <Brodcamp Title='Your Cart' SubTile='Cart' />
      <div className="rbt-cart-area bg-color-white rbt-section-gap">
        <div className="cart_area">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8 col-8">
                <form action="#">
                   {/*Cart Table */}
                  <div className="cart-table table-responsive mb--60">
                    <table className="table" id="cartReload1">
                      <thead>
                      <tr>
                        <th className="pro-thumbnail">Image</th>
                        <th className="pro-title">Product</th>
                        <th className="pro-price">Price</th>
                        <th className="pro-remove">Remove</th>
                      </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pro-thumbnail"><a href="/course-details"><img
                              src="/assets/images/product/1.jpg" alt="Course"/></a>
                          </td>
                          <td className="pro-title"><a href="/course-details">title</a>
                          </td>
                          <td className="pro-price"><span>$0.00</span></td>
                          <td className="pro-remove" onClick="cart_destroy({{$data}})">
                            <a href="#"><i className="feather-x"/>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-4">
                <div className="cart-summary">
                  <div className="cart-summary-wrap">
                    <div className="section-title text-start">
                      <h4 className="title mb--30">Cart Summary</h4>
                    </div>
                    <p>Sub Total <span id="subtotal1">$0.00</span></p>
                  </div>

                  <div className="rbt-button-group float-md-end">
                    <Link className="rbt-btn btn-gradient icon-hover" to="/checkout">
                      <span className="btn-text">Checkout</span>
                      <span className="btn-icon"><i className="feather-arrow-right"/></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}