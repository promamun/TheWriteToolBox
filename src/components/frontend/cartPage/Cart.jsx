import React from "react";

function Cart() {
  return (
    <>
      {" "}
      <div class="rbt-cart-area bg-color-white rbt-section-gap">
        <div class="cart_area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <form action="#">
                  <div class="cart-table table-responsive mb--60">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="pro-thumbnail">Image</th>
                          <th class="pro-title">Product</th>
                          <th class="pro-price">Price</th>
                          <th class="pro-quantity">Quantity</th>
                          <th class="pro-subtotal">Total</th>
                          <th class="pro-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="pro-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product/1.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td class="pro-title">
                            <a href="#">Miracle Morning</a>
                          </td>
                          <td class="pro-price">
                            <span>$48.00</span>
                          </td>
                          <td class="pro-quantity">
                            <div class="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </td>
                          <td class="pro-subtotal">
                            <span>$100.00</span>
                          </td>
                          <td class="pro-remove">
                            <a href="#">
                              <i class="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="pro-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product/7.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td class="pro-title">
                            <a href="#">Happy Strong</a>
                          </td>
                          <td class="pro-price">
                            <span>$100.00</span>
                          </td>
                          <td class="pro-quantity">
                            <div class="pro-qty">
                              <input type="text" value="2" />
                            </div>
                          </td>
                          <td class="pro-subtotal">
                            <span>$120.00</span>
                          </td>
                          <td class="pro-remove">
                            <a href="#">
                              <i class="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="pro-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product/3.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td class="pro-title">
                            <a href="#">Rich Dad Poor Dad</a>
                          </td>
                          <td class="pro-price">
                            <span>$59.00</span>
                          </td>
                          <td class="pro-quantity">
                            <div class="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </td>
                          <td class="pro-subtotal">
                            <span>$150.00</span>
                          </td>
                          <td class="pro-remove">
                            <a href="#">
                              <i class="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="pro-thumbnail">
                            <a href="#">
                              <img
                                src="assets/images/product/4.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td class="pro-title">
                            <a href="#">Momentum Theorem</a>
                          </td>
                          <td class="pro-price">
                            <span>$250.00</span>
                          </td>
                          <td class="pro-quantity">
                            <div class="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </td>
                          <td class="pro-subtotal">
                            <span>$270.00</span>
                          </td>
                          <td class="pro-remove">
                            <a href="#">
                              <i class="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>

                <div class="row g-5">
                  <div class="col-lg-6 col-12">
                    <div class="calculate-shipping edu-bg-shade">
                      <div class="section-title text-start">
                        <h4 class="title mb--30">Calculate Shipping</h4>
                      </div>
                      <form action="#">
                        <div class="row">
                          <div class="col-md-6 col-12 mb--25">
                            <div class="rbt-modern-select bg-transparent height-45">
                              <select class="w-100">
                                <option>Bangladesh</option>
                                <option>China</option>
                                <option>country</option>
                                <option>India</option>
                                <option>Japan</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6 col-12 mb--25">
                            <div class="rbt-modern-select bg-transparent height-45">
                              <select class="w-100">
                                <option>Dhaka</option>
                                <option>Barisal</option>
                                <option>Khulna</option>
                                <option>Comilla</option>
                                <option>Chittagong</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6 col-12 mb--25">
                            <input type="text" placeholder="Postcode / Zip" />
                          </div>
                          <div class="col-md-6 col-12 mb--25">
                            <a
                              class="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                              href="#"
                            >
                              <span class="icon-reverse-wrapper">
                                <span class="btn-text">Estimate</span>
                                <span class="btn-icon">
                                  <i class="feather-arrow-right"></i>
                                </span>
                                <span class="btn-icon">
                                  <i class="feather-arrow-right"></i>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="discount-coupon edu-bg-shade">
                      <div class="section-title text-start">
                        <h4 class="title mb--30">Discount Coupon Code</h4>
                      </div>
                      <form action="#">
                        <div class="row">
                          <div class="col-md-6 col-12 mb--25">
                            <input type="text" placeholder="Coupon Code" />
                          </div>
                          <div class="col-md-6 col-12 mb--25">
                            <button class="rbt-btn btn-gradient hover-icon-reverse btn-sm">
                              <span class="icon-reverse-wrapper">
                                <span class="btn-text">Apply Code</span>
                                <span class="btn-icon">
                                  <i class="feather-arrow-right"></i>
                                </span>
                                <span class="btn-icon">
                                  <i class="feather-arrow-right"></i>
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="col-lg-5 offset-lg-1 col-12">
                    <div class="cart-summary">
                      <div class="cart-summary-wrap">
                        <div class="section-title text-start">
                          <h4 class="title mb--30">Cart Summary</h4>
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

                      <div class="cart-submit-btn-group">
                        <div class="single-button w-50">
                          <button class="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100">
                            <span data-text="Checkout">Checkout</span>
                          </button>
                        </div>
                        <div class="single-button w-50">
                          <button class="rbt-btn rbt-switch-btn rbt-switch-y w-100 btn-border">
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
