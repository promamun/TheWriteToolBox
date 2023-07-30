import React, {Component} from 'react';

class JaninBook extends Component {
    render() {
        return (
            <div>
                <div className="rbt-about-area bg-color-white rbt-section-gap" id="about">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 rbt-cat-box-1 order-2 order-lg-1 ">
                                <div className="content">
                                    <a href="#" target="_blank">
                                        <img data-parallax='{"x": 0, "y": 80}'
                                             src="assets/images/about/book-cover.png"
                                             alt="About Images"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="inner">
                                    <div className="section-title text-start" data-parallax='{"x": 0, "y": 80}'>
                                        <h2 className="title theme-gradient rbt-display-1">Awaken Your LIMITLESS
                                            Self</h2>
                                        <div className="pricing-right position-relative mt-5">
                                            <div className="pricing-offer">
                                                <div className="single-list">
                                                    <ul className="plan-offer-list">
                                                        <li>
                                                            <i className="feather-check"/> THERE IS MORE
                                                        </li>
                                                        <li>
                                                            <i className="feather-check"/> THERE IS BETTER
                                                        </li>
                                                        <li>
                                                            <i className="feather-check"/> YOU ARE DESTINED FOR
                                                            GREATNESS
                                                        </li>
                                                    </ul>
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
        );
    }
}

export default JaninBook;