import React, {Component} from 'react';

class FreeCourseContact extends Component {
    render() {
        return (
            <div>
                <div className="rbt-banner-area rbt-banner-3 bg-gradient-6 header-transperent-spacer">
                    <div className="wrapper">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-7 order-2 order-lg-1">
                                    <div className="banner-content ">
                                        <div className="inner">
                                            <div className="section-title text-start">
                                                <span className="subtitle bg-pink-opacity">THE OFFER FOR YOU</span>
                                            </div>
                                            <h1 className="title">Online Learning <br/> Management System</h1>
                                            <p className="description">We are experienced in educational platform and
                                                skilled strategies
                                                for
                                                the success of our online learning.</p>
                                            <div className="rating mb--20">
                                                <a href="#"><i className="fa fa-star"/></a>
                                                <a href="#"><i className="fa fa-star"/></a>
                                                <a href="#"><i className="fa fa-star"/></a>
                                                <a href="#"><i className="fa fa-star"/></a>
                                                <a href="#"><i className="fa fa-star"/></a>
                                            </div>
                                            <div className="rbt-like-total">
                                                <div className="profile-share">
                                                    <a href="#" className="avatar" data-tooltip="Mark JOrdan"
                                                       tabIndex="0"><img
                                                        src="assets/images/testimonial/client-03.png"
                                                        alt="education"/>
                                                    </a>
                                                    <a href="#" className="avatar" data-tooltip="Mark" tabIndex="0"><img
                                                        src="assets/images/testimonial/client-04.png"
                                                        alt="education"/>
                                                    </a>
                                                    <a href="#" className="avatar" data-tooltip="Jordan"
                                                       tabIndex="0"><img
                                                        src="assets/images/testimonial/client-06.png"
                                                        alt="education"/>
                                                    </a>
                                                    <div className="more-author-text">
                                                        <h5 className="total-join-students">Join Over 3000+
                                                            Students</h5>
                                                        <p className="subtitle">Have a new ideas every week.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-1 order-lg-2">
                                    <div className="rbt-contact-form contact-form-style-1">
                                        <h3 className="title">Get a Free TWT Online Course</h3>
                                        <form id="contact-form">
                                            <div className="form-group">
                                                <input name="con_name" type="text"/>
                                                <label>Name</label>
                                                <span className="focus-border"/>
                                            </div>
                                            <div className="form-group">
                                                <input name="con_email" type="email"/>
                                                    <label>Email</label>
                                                    <span className="focus-border"/>
                                            </div>
                                            <div className="form-group">
                                                <input name="con_email" type="email"/>
                                                {/*<textarea></textarea>*/}
                                                <label>Message</label>
                                                <span className="focus-border"/>
                                            </div>
                                            <div className="form-submit-group">
                                                <button type="submit"
                                                        className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round w-100">
                                                    <div className="icon-reverse-wrapper">
                                                        <span className="btn-text">Get It Now</span>
                                                        <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                                        <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                                    </div>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-wrapper">
                        <div className="left-shape">
                            <img src="assets/images/icons/three-shape.png" alt="Shape Images"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FreeCourseContact;