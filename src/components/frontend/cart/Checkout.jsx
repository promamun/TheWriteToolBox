import React from 'react'

export default function Checkout() {
  return (
    <>
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
                      <label>Country <span className="text-danger">*</span></label>
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
                      <label>Zip Code <span className="text-danger">*</span></label>
                      <input type="text" placeholder="Zip Code"/>
                    </div>
                  </div>
                  <h4 className="checkout-title">Payment Method</h4>
                  <div className="single-method">
                    <input type="radio" id="payment_paypal" name="payment-method" value="paypal"/>
                      <label htmlFor="payment_paypal">Paypal</label>
                      <p data-method="paypal">Please send a Check to Store name with
                        Store Street, Store Town, Store State, Store Postcode,
                        Store Country.
                      </p>
                  </div>
                  <div className="single-method">
                    <input type="radio" id="payment_payoneer" name="payment-method" value="payoneer"/>
                      <label htmlFor="payment_payoneer">Payoneer</label>
                      <p data-method="payoneer">Please send a Check to Store name
                        with Store Street, Store Town, Store State, Store Postcode,
                        Store Country.
                      </p>
                  </div>
                  <div className="single-method">
                    <input type="checkbox" id="accept_terms"/>
                      <label htmlFor="accept_terms">I’ve read and accept the terms & conditions
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
                    <h4>Product <span>Total</span></h4>
                    <ul>
                      <li>Samsome Notebook Pro 5 X 01 <span>$295.00</span></li>
                      <li>Aquet Drone D 420 X 02 <span>$550.00</span></li>
                      <li>Play Station X 22 X 01 <span>$295.00</span></li>
                      <li>Roxxe Headphone Z 75 X 01 <span>$110.00</span></li>
                    </ul>
                    <p>Sub Total <span>$1250.00</span></p>
                    <p>Shipping Fee <span>$00.00</span></p>
                    <h4 className="mt--30">Grand Total <span>$1250.00</span></h4>
                  </div>
                </div>
                 {/*Payment Method */}
                <div className="col-12 mb--60">
                  <div className="plceholder-button mt--50">
                    <button className="rbt-btn btn-gradient hover-icon-reverse">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Place order</span>
                        <span className="btn-icon"><i className="feather-arrow-right"/></span>
                        <span className="btn-icon"><i className="feather-arrow-right"/></span>
                      </span>
                    </button>
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