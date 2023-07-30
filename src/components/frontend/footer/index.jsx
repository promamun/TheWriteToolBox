import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo.png";

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
                        to="#"
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
                    <h5 className="ft-title">Useful Links</h5>
                    <ul className="ft-link">
                      <li>
                        <Link to="/12-marketplace">Marketplace</Link>
                      </li>
                      <li>
                        <Link to="/04-kindergarten">kindergarten</Link>
                      </li>
                      <li>
                        <Link to="/13-university-classic">University</Link>
                      </li>
                      <li>
                        <Link to="/09-gym-coaching">GYM Coaching</Link>
                      </li>
                      <li>
                        <Link to="/faqs">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <h5 className="ft-title">Our Company</h5>
                    <ul className="ft-link">
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/become-a-teacher">Become Teacher</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/instructor">Instructor</Link>
                      </li>
                      <li>
                        <Link to="/event-list">Events</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="footer-widget">
                    <h5 className="ft-title">Get Contact</h5>
                    <ul className="ft-link">
                      <li>
                        <span>Phone:</span> <Link to="#">(406) 555-0120</Link>
                      </li>
                      <li>
                        <span>E-mail:</span>
                        <Link to="mailto:hr@example.com">
                          rainbow@example.com
                        </Link>
                      </li>
                      <li>
                        <span>Location:</span> North America, USA
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
