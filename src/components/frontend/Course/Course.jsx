import React, {Component} from 'react';

class Course extends Component {
    render() {
        return (
            <div>
                <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
                    <div className="container">
                        <div className="row mb--60">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle bg-secondary-opacity">Build My Expert Status</span>
                                    <h2 className="title">Explode My Expert Status</h2>
                                </div>
                            </div>
                        </div>
                        {/*// <!-- Start Card Area -->*/}
                        <div className="row g-5">
                            {/*// <!-- Start Single Course  -->*/}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <a href="/course-details">
                                            <img src="assets/images/course/course-01.jpg" alt="Card image"/>
                                                <div className="rbt-badge-3-custom bg-white">
                                                    <span>-50%</span>
                                                    <span>Off</span>
                                                </div>
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">

                                        <div className="rbt-card-top">
                                            <div className="rbt-review">
                                                <div className="rating">
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                </div>
                                                <span className="rating-count"> (15 Reviews)</span>
                                            </div>
                                            <div className="rbt-bookmark-btn">
                                                <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                    className="feather-bookmark"/></a>
                                            </div>
                                        </div>

                                        <h4 className="rbt-card-title"><a
                                            href="/course-details">title</a>
                                        </h4>
                                        <ul className="rbt-meta">
                                            <li><i className="feather-book"/>20 Lessons</li>
                                            <li><i className="feather-users"/>40 Students</li>
                                        </ul>
                                        <p className="rbt-card-text">description</p>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$60</span>
                                                <span className="off-price">$120</span>
                                            </div>
                                            <a className="rbt-btn-link left-icon"
                                               // style="cursor: pointer"
                                            ><i
                                                className="feather-shopping-cart"/> Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*// <!-- End Single Course  -->*/}
                        </div>
                        {/*// <!-- End Card Area -->*/}

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="load-more-btn mt--60 text-center">
                                    <a className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                                       href="/courses">
                                <span className="icon-reverse-wrapper">
                                    <span className="btn-text">All Course (4)</span>
                                <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                <span className="btn-icon"><i className="feather-arrow-right"/></span>
                                </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;