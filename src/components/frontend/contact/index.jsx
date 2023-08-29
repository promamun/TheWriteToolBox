import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Contact from './Contact';
import Brodcamp from "../brodcamp/style2";


class Index extends Component {
    render() {
        return (
            <>
                <Helmet title={'Contact'}/>
                <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--60">
                                    <span className="subtitle bg-secondary-opacity">Contact Us</span>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up"
                                 data-sal-delay="150" data-sal-duration="800">
                                <div className="rbt-address">
                                    <div className="icon">
                                        <i className="feather-headphones"/>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact Phone Number</h4>
                                        <p><a href="tel:+444555666777">+444 555 666 777</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up"
                                 data-sal-delay="200" data-sal-duration="800">
                                <div className="rbt-address">
                                    <div className="icon">
                                        <i className="feather-mail"/>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Email Address</h4>
                                        <p><a href="mailto:support@thewritetoolboxforyou.com">support@thewritetoolboxforyou.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up"
                                 data-sal-delay="250" data-sal-duration="800">
                                <div className="rbt-address">
                                    <div className="icon">
                                        <i className="feather-map-pin"/>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Location</h4>
                                        <p>2124 NE19th Street, #F240 Gresham, <br/>OR 97030</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-contact-address">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100 radius-6" src="/assets/images/about/contact.jpg"
                                         alt="Contact Images"/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                    <div className="section-title text-start">
                                        <span className="subtitle bg-primary-opacity">EDUCATION FOR EVERYONE</span>
                                    </div>
                                    <h3 className="title">Get a Free Course You Can Contact With Me</h3>
                                    <form id="contact-form" method="POST"
                                          action="https://rainbowit.net/html/histudy/mail.php"
                                          className="rainbow-dynamic-form max-width-auto">
                                        <div className="form-group">
                                            <input name="contact-name" id="contact-name" type="text"/>
                                                <label>Name</label>
                                                <span className="focus-border"/>
                                        </div>
                                        <div className="form-group">
                                            <input name="contact-phone" type="email"/>
                                                <label>Email</label>
                                                <span className="focus-border"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="subject" name="subject"/>
                                                <label>Your Subject</label>
                                                <span className="focus-border"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea name="contact-message" id="contact-message"/>
                                            <label>Message</label>
                                            <span className="focus-border"/>
                                        </div>
                                        <div className="form-submit-group">
                                            <button name="submit" type="submit" id="submit"
                                                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">GET IT NOW</span>
                                    <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                    <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                    </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-google-map bg-color-white rbt-section-gapTop">
                    <iframe className="w-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44738.30643313996!2d-122.51225474170523!3d45.507176713059195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54959862444fdee9%3A0xc159bec8581d73ec!2sGresham%2C%20OR%2097030%2C%20USA!5e0!3m2!1sen!2sbd!4v1692509350809!5m2!1sen!2sbd"
                            height="600"
                            // style="border:0"
                    />
                </div>
            </>
        );
    }
}

export default Index;