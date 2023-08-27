import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";

class Index extends Component {
  render() {
    return (
      <div>
        <footer className="rbt-footer footer-style-1">
          <div className="footer-top">
            <div className="container">
              <div className="row row--15 mt_dec--30">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <div className="logo">
                      <Link to="/index">
                        <img
                          src={Logo}
                          alt="Edu-cause"
                        />
                      </Link>
                    </div>
                    <p className="description mt--20">
                      We’re always in search for talented and motivated people.
                      Don’t be shy introduce yourself!
                    </p>

                    <div className="contact-btn mt--30">
                      <Link
                        className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                        to="/contact"
                      >
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">Contact With Us</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <h5 className="ft-title">Important Links</h5>
                    <ul className="ft-link">
                      <li>
                        <Link to="/courses">Course</Link>
                      </li>
                      <li>
                        <Link to="/memberships">Membership</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="https://devtechmasters.com/service">Services</Link>
                      </li>
                      <li>
                        <Link to="/about-janine">About Janine</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <h5 className="ft-title">TWT Useful Links</h5>
                    <ul className="ft-link">
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/faqs">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms-of-condition">Terms of Condition</Link>
                      </li>
                      <li>
                        <Link to="/refund-policy">Refund Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <h5 className="ft-title">Get Contact</h5>
                    <ul className="ft-link">
                      <li>
                        <span>E-mail:</span>
                        <Link to="mailto:support@thewritetoolboxforyou.com">
                          support@thewritetoolboxforyou.com
                        </Link>
                      </li>
                      <li>
                        <span>Location:</span> 2124 NE19th Street, #F240 Gresham, OR 97030
                      </li>
                    </ul>
                    <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                      <li>
                        <Link to="https://www.facebook.com/">
                          <i className="feather-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.twitter.com/">
                          <i className="feather-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/">
                          <i className="feather-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkdin.com/">
                          <i className="feather-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Index;
