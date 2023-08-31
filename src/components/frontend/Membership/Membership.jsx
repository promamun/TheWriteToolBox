import React, { Component } from "react";
import { Link } from "react-router-dom";

class Membership extends Component {
  render() {
    return (
      <div>
        <div className="rbt-pricing-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row g-5 mb--60">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title text-start">
                  <span className="subtitle bg-secondary-opacity">
                    COURSE PRICING
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="pricing-billing-duration text-start text-md-end">
                  <ul>
                    <li className="nav-item">
                      <button
                        className="nav-link yearly-plan-btn"
                        type="button"
                      >
                        Yearly Plan
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link monthly-plan-btn active"
                        type="button"
                      >
                        Monthly Plan
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row g-5">
              {/*// <!-- Start Single Pricing  -->*/}
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="pricing-table style-2">
                  <div className="pricing-header">
                    <h3 className="title color-primary">Basic Plan</h3>
                    <span className="rbt-badge mb--35">Free for a Month</span>
                    <div className="price-wrap">
                      <div
                        className="yearly-pricing"
                        // style="display: none;"
                      >
                        <span className="amount color-primary">$30.99</span>
                        <span className="duration color-primary">/yearly</span>
                      </div>
                      <div
                        className="monthly-pricing"
                        // style="display: block;"
                      >
                        <span className="amount color-primary">$10.00</span>
                        <span className="duration color-primary">/monthly</span>
                      </div>
                    </div>
                  </div>

                  <div className="pricing-btn">
                    <Link
                      className="rbt-btn bg-primary-opacity hover-icon-reverse w-100"
                      to="#"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Join Course Plan</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="pricing-body">
                    <ul className="list-item">
                      <li>
                        <i className="feather-check" /> Unlimited Access Courses
                      </li>
                      <li>
                        <i className="feather-check" /> Certificate After
                        Completion
                      </li>
                      <li className="off">
                        <i className="feather-x" /> 24/7 Dedicated Support
                      </li>
                      <li className="off">
                        <i className="feather-x" /> Unlimited Emails
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*// <!-- End Single Pricing  -->*/}

              {/*// <!-- Start Single Pricing  -->*/}
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="pricing-table style-2 active">
                  <div className="pricing-header">
                    <div className="pricing-badge">
                      <span>Popular</span>
                    </div>
                    <h3 className="title color-secondary">Standard Plan</h3>
                    <span className="rbt-badge mb--35">Most Popular</span>
                    <div className="price-wrap">
                      <div
                        className="yearly-pricing"
                        // style="display: none;"
                      >
                        <span className="amount color-secondary">$100.99</span>
                        <span className="duration color-secondary">
                          /yearly
                        </span>
                      </div>
                      <div
                        className="monthly-pricing"
                        // style="display: block;"
                      >
                        <span className="amount color-secondary">$20.00</span>
                        <span className="duration color-secondary">
                          /monthly
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-btn">
                    <Link
                      className="rbt-btn bg-secondary-opacity hover-icon-reverse w-100"
                      to="#"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Join Course Plan</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="pricing-body">
                    <ul className="list-item">
                      <li>
                        <i className="feather-check" /> Unlimited Access Courses
                      </li>
                      <li>
                        <i className="feather-check" /> Certificate After
                        Completion
                      </li>
                      <li>
                        <i className="feather-check" /> High Resolution Videos
                      </li>
                      <li>
                        <i className="feather-check" /> 24/7 Dedicated Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*// <!-- End Single Pricing  -->*/}

              {/*// <!-- Start Single Pricing  -->*/}
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="pricing-table style-2">
                  <div className="pricing-header">
                    <h3 className="title color-pink">Exclusive Plan</h3>
                    <span className="rbt-badge mb--35">Free for a Month</span>
                    <div className="price-wrap">
                      <div
                        className="yearly-pricing"
                        // style="display: none;"
                      >
                        <span className="amount color-pink">$99.99</span>
                        <span className="duration color-pink">/yearly</span>
                      </div>
                      <div
                        className="monthly-pricing"
                        // style="display: block;"
                      >
                        <span className="amount color-pink">$39.00</span>
                        <span className="duration color-pink">/monthly</span>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-btn">
                    <Link
                      className="rbt-btn bg-pink-opacity hover-icon-reverse w-100"
                      to="#"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Join Course Plan</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="pricing-body">
                    <ul className="list-item">
                      <li>
                        <i className="feather-check" /> Unlimited Access Courses
                      </li>
                      <li>
                        <i className="feather-check" /> Certificate After
                        Completion
                      </li>
                      <li className="off">
                        <i className="feather-x" /> 24/7 Dedicated Support
                      </li>
                      <li className="off">
                        <i className="feather-x" /> Unlimited Emails
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*// <!-- End Single Pricing  -->*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Membership;
