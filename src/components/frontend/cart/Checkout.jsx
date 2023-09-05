import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import { useSelector } from "react-redux";

export default function Checkout() {
  const { cart_details } = useSelector((state) => {
    return state;
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cartCourses, setCartCourses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    let data = cart_details.cart_details;
    if (data) {
      let { carts } = data;

      let totalPrice = 0;

      let cartCourses = carts.map(({ course_id }) => {
        totalPrice += Number(course_id.price);
        return course_id;
      });

      setTotalPrice(totalPrice);
      setCartCourses(cartCourses);
    }
  }, [cart_details]);

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <div className="checkout_area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5 checkout-form">
            <div className="col-lg-7">
              <div className="checkout-content-wrapper">
                {/*Billing Address */}
                <div id="billing-form">
                  <h4 className="checkout-title">Billing Address</h4>
                  <div className="row">
                    <div className="col-md-6 col-12 mb--20">
                      <label>
                        Country <span className="text-danger">*</span>
                      </label>
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
                    <div className="col-md-6 col-12 mb--20">
                      <label>
                        Zip Code <span className="text-danger">*</span>
                      </label>
                      <input type="text" placeholder="Zip Code" />
                    </div>
                  </div>
                  <h4 className="checkout-title">Payment Method</h4>
                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_paypal"
                      name="payment-method"
                      value="paypal"
                      checked
                    />
                    <label htmlFor="payment_paypal">Paypal</label>
                    <p data-method="paypal">
                      Please send a Check to Store name with Store Street, Store
                      Town, Store State, Store Postcode, Store Country.
                    </p>
                  </div>
                  {/* <div className="single-method">
                  <input
                    type="radio"
                    id="payment_payoneer"
                    name="payment-method"
                    value="payoneer"
                  />
                  <label htmlFor="payment_payoneer">Payoneer</label>
                  <p data-method="payoneer">
                    Please send a Check to Store name with Store Street, Store
                    Town, Store State, Store Postcode, Store Country.
                  </p>
                </div> */}
                  <div className="single-method">
                    <input type="checkbox" id="accept_terms" />
                    <label htmlFor="accept_terms">
                      I’ve read and accept the terms & conditions
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row pl--50 pl_md--0 pl_sm--0">
                {/*Cart Total */}
                <div className="col-12 mb--60">
                  <h4 className="checkout-title">Cart Total</h4>
                  <div className="checkout-cart-total">
                    <h4>
                      Product <span>Total</span>
                    </h4>
                    <ul>
                      {cartCourses.map((course, key) => {
                        return (
                          <li key={key}>
                            {course.title} <span>${course.price}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <p>
                      Sub Total <span>${totalPrice}</span>
                    </p>

                    <h4 className="mt--30">
                      Grand Total <span>${totalPrice}</span>
                    </h4>
                  </div>
                </div>
                {/*Payment Method */}
                <div className="col-12 mb--60">
                  <div className="plceholder-button mt--50">
                    <button className="rbt-btn btn-gradient hover-icon-reverse">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Place order</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
}
