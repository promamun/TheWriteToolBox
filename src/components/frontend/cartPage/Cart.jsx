import React from "react";

function Cart() {
  return (
    <>
      {" "}
      <div className="rbt-cart-area bg-color-white rbt-section-gap">
        <div className="cart_area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="cart-table table-responsive mb--60">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Image</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Total</th>
                          <th className="pro-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pro-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product/1.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td className="pro-title">
                            <a href="#">Miracle Morning</a>
                          </td>
                          <td className="pro-price">
                            <span>$48.00</span>
                          </td>
                          <td className="pro-quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </td>
                          <td className="pro-subtotal">
                            <span>$100.00</span>
                          </td>
                          <td className="pro-remove">
                            <a href="#">
                              <i className="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pro-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product/7.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td className="pro-title">
                            <a href="#">Happy Strong</a>
                          </td>
                          <td className="pro-price">
                            <span>$100.00</span>
                          </td>
                          <td className="pro-quantity">
                            <div className="pro-qty">
                              <input type="text" value="2" />
                            </div>
                          </td>
                          <td className="pro-subtotal">
                            <span>$120.00</span>
                          </td>
                          <td className="pro-remove">
                            <a href="#">
                              <i className="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pro-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product/3.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td className="pro-title">
                            <a href="#">Rich Dad Poor Dad</a>
                          </td>
                          <td className="pro-price">
                            <span>$59.00</span>
                          </td>
                          <td className="pro-quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </td>
                          <td className="pro-subtotal">
                            <span>$150.00</span>
                          </td>
                          <td className="pro-remove">
                            <a href="#">
                              <i className="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pro-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product/4.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td className="pro-title">
                            <a href="#">Momentum Theorem</a>
                          </td>
                          <td className="pro-price">
                            <span>$250.00</span>
                          </td>
                          <td className="pro-quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </td>
                          <td className="pro-subtotal">
                            <span>$270.00</span>
                          </td>
                          <td className="pro-remove">
                            <a href="#">
                              <i className="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>

                <div className="row g-5">
                  <div className="col-lg-6 col-12">
                    <div className="calculate-shipping edu-bg-shade">
                      <div className="section-title text-start">
                        <h4 className="title mb--30">Calculate Shipping</h4>
                      </div>
                      <form action="#">
                        <div className="row">
                          <div className="col-md-6 col-12 mb--25">
                            <div className="rbt-modern-select bg-transparent height-45">
                              <select className="w-100">
                                <option>Bangladesh</option>
                                <option>China</option>
                                <option>country</option>
                                <option>India</option>
                                <option>Japan</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mb--25">
                            <div className="rbt-modern-select bg-transparent height-45">
                              <select className="w-100">
                                <option>Dhaka</option>
                                <option>Barisal</option>
                                <option>Khulna</option>
                                <option>Comilla</option>
                                <option>Chittagong</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mb--25">
                            <input type="text" placeholder="Postcode / Zip" />
                          </div>
                          <div className="col-md-6 col-12 mb--25">
                            <a
                              className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                              href="#"
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Estimate</span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="discount-coupon edu-bg-shade">
                      <div className="section-title text-start">
                        <h4 className="title mb--30">Discount Coupon Code</h4>
                      </div>
                      <form action="#">
                        <div className="row">
                          <div className="col-md-6 col-12 mb--25">
                            <input type="text" placeholder="Coupon Code" />
                          </div>
                          <div className="col-md-6 col-12 mb--25">
                            <button className="rbt-btn btn-gradient hover-icon-reverse btn-sm">
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Apply Code</span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="feather-arrow-right"></i>
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-5 offset-lg-1 col-12">
                    <div className="cart-summary">
                      <div className="cart-summary-wrap">
                        <div className="section-title text-start">
                          <h4 className="title mb--30">Cart Summary</h4>
                        </div>
                        <p>
                          Sub Total <span>$1250.00</span>
                        </p>
                        <p>
                          Shipping Cost <span>$00.00</span>
                        </p>
                        <h2>
                          Grand Total <span>$1250.00</span>
                        </h2>
                      </div>

                      <div className="cart-submit-btn-group">
                        <div className="single-button w-50">
                          <button className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100">
                            <span data-text="Checkout">Checkout</span>
                          </button>
                        </div>
                        <div className="single-button w-50">
                          <button className="rbt-btn rbt-switch-btn rbt-switch-y w-100 btn-border">
                            <span data-text="Update Cart">Update Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
