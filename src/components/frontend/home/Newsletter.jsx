import React, {Component} from 'react';

class Newsletter extends Component {
    render() {
        return (
            <div>
                <div className="rbt-newsletter-area bg-gradient-6 ptb--50">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5 col-md-12 col-12">
                                <div className="inner">
                                    <div className="section-title text-center text-lg-start">
                                        <h4 className="title"><strong>Subscribe</strong> <br/> <span className="w-400">Our Newsletter</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-12 text-start text-sm-end">
                                <form action="#" className="newsletter-form-1 me-0">
                                    <input type="email" placeholder="Enter Your E-Email"/>
                                        <button type="submit"
                                                className="rbt-btn btn-md btn-gradient hover-icon-reverse">
                            <span className="icon-reverse-wrapper">
                        <span className="btn-text">Subscribe</span>
                            <span className="btn-icon"><i className="feather-arrow-right"/></span>
                            <span className="btn-icon"><i className="feather-arrow-right"/></span>
                            </span>
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsletter;