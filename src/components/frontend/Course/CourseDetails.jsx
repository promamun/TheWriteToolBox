import React from 'react'

export default function CourseDetails() {
  return (
    <>
        <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
            <div className="breadcrumb-inner">
                <img src="assets/images/bg/bg-image-10.jpg" alt="Education Images"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="content text-start">
                            <ul className="page-list">
                                <li className="rbt-breadcrumb-item"><a href="/">Home</a></li>
                                <li>
                                    <div className="icon-right"><i className="feather-chevron-right"/></div>
                                </li>
                                <li className="rbt-breadcrumb-item active">Course</li>
                            </ul>
                            <h2 className="title">title</h2>
                            <p className="description">description</p>

                            <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">

                                <div className="feature-sin best-seller-badge">
                                <span className="rbt-badge-2">
                                    <span className="image"><img
                                        src="assets/images/icons/card-icon-1.png"
                                        alt="Best Seller Icon"/></span> Bestseller
                                </span>
                                </div>

                                <div className="feature-sin rating">
                                    <a href="#">4.8</a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                </div>

                                <div className="feature-sin total-rating">
                                    <a className="rbt-badge-4" href="#">215,475 rating</a>
                                </div>

                                <div className="feature-sin total-student">
                                    <span>616,029 students</span>
                                </div>

                            </div>
                            <ul className="rbt-meta">
                                <li><i className="feather-calendar"></i>
                                    'Y-M-d'
                                </li>
                                <li><i className="feather-globe"></i>English</li>
                                <li><i className="feather-award"></i>Certified Course</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="rbt-course-details-area ptb--60">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-8">
                        <div className="course-details-content">
                            <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
                                <img className="w-100" src="assets/images/course/course-online-04.jpg"
                                     alt="Course image"/>
                            </div>
                            <div className="rbt-inner-onepage-navigation sticky-top mt--30">
                                <nav className="mainmenu-nav onepagenav">
                                    <ul className="mainmenu">
                                        <li className="current">
                                            <a href="#overview">Overview</a>
                                        </li>
                                        <li>
                                            <a href="#coursecontent">Course Content</a>
                                        </li>
                                        <li>
                                            <a href="#details">Details</a>
                                        </li>
                                        <li>
                                            <a href="#review">Review</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more"
                                 id="overview">
                                <div className="rbt-course-feature-inner has-show-more-inner-content">
                                    <div className="section-title">
                                        <h4 className="rbt-title-style-3">What you'll learn</h4>
                                    </div>
                                    description
                                </div>
                                <div className="rbt-show-more-btn">Show More</div>
                            </div>
                            <div className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
                                 id="coursecontent">
                                <div className="rbt-course-feature-inner">
                                    <div className="section-title">
                                        <h4 className="rbt-title-style-3">Course Content</h4>
                                    </div>
                                    <div className="rbt-accordion-style rbt-accordion-02 accordion">
                                        <div className="accordion" id="accordionExampleb2">

                                            <div className="accordion-item card">
                                                <h2 className="accordion-header card-header" id="headingTwo1">
                                                    <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo1"
                                                            aria-expanded="true" aria-controls="collapseTwo1">
                                                        Intro to Course and Histudy <span
                                                        className="rbt-badge-5 ml--10">1hr 30min</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo1" className="accordion-collapse collapse show"
                                                     aria-labelledby="headingTwo1" data-bs-parent="#accordionExampleb2">
                                                    <div className="accordion-body card-body pr--0">
                                                        <ul className="rbt-course-main-content liststyle">
                                                            <li>
                                                                <a href="#">
                                                                    <div className="course-content-left">
                                                                        <i className="feather-play-circle"></i> <span
                                                                        className="text">Course Intro</span>
                                                                    </div>
                                                                    <div className="course-content-right">
                                                                        <span className="min-lable">30 min</span>
                                                                        <span
                                                                            className="rbt-badge variation-03 bg-primary-opacity"><i
                                                                            className="feather-eye"></i> Preview</span>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    <div className="course-content-left">
                                                                        <i className="feather-play-circle"></i> <span
                                                                        className="text">Watch Before Start</span>
                                                                    </div>
                                                                    <div className="course-content-right">
                                                                        <span className="min-lable">0.5 min</span>
                                                                        <span
                                                                            className="rbt-badge variation-03 bg-primary-opacity"><i
                                                                            className="feather-eye"></i> Preview</span>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="#">
                                                                    <div className="course-content-left">
                                                                        <i className="feather-file-text"></i> <span
                                                                        className="text">Read Before You Start</span>
                                                                    </div>
                                                                    <div className="course-content-right">
                                                                        <span className="course-lock"><i
                                                                            className="feather-lock"></i></span>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item card">
                                                <h2 className="accordion-header card-header" id="headingTwo2">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo2"
                                                            aria-expanded="false" aria-controls="collapseTwo2">
                                                        Course Fundamentals <span className="rbt-badge-5 ml--10">2hr 30min</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo2" className="accordion-collapse collapse"
                                                     aria-labelledby="headingTwo2" data-bs-parent="#accordionExampleb2">
                                                    <div className="accordion-body card-body pr--0">
                                                        <ul className="rbt-course-main-content liststyle">
                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Course Intro</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>
                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Why You Should Not Go To
                                                                        Education.</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>


                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Ten Factors That Affect Education's
                                                                        Longevity.</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item card">
                                                <h2 className="accordion-header card-header" id="headingTwo3">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo3"
                                                            aria-expanded="false" aria-controls="collapseTwo3">
                                                        You can develop skill and setup <span
                                                        className="rbt-badge-5 ml--10">1hr 50min</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo3" className="accordion-collapse collapse"
                                                     aria-labelledby="headingTwo3" data-bs-parent="#accordionExampleb2">
                                                    <div className="accordion-body card-body pr--0">
                                                        <ul className="rbt-course-main-content liststyle">
                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Course Intro</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>
                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Why You Should Not Go To
                                                                        Education.</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>


                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Ten Factors That Affect Education's
                                                                        Longevity.</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item card">
                                                <h2 className="accordion-header card-header" id="headingTwo4">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo4"
                                                            aria-expanded="false" aria-controls="collapseTwo4">
                                                        15 Things To Know About Education? <span
                                                        className="rbt-badge-5 ml--10">2hr 60min</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo4" className="accordion-collapse collapse"
                                                     aria-labelledby="headingTwo4" data-bs-parent="#accordionExampleb2">
                                                    <div className="accordion-body card-body pr--0">
                                                        <ul className="rbt-course-main-content liststyle">
                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Course Intro</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>
                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Why You Should Not Go To
                                                                        Education.</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>


                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Ten Factors That Affect Education's
                                                                        Longevity.</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item card">
                                                <h2 className="accordion-header card-header" id="headingTwo5">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo5"
                                                            aria-expanded="false" aria-controls="collapseTwo5">
                                                        Course Description <span className="rbt-badge-5 ml--10">2hr 20min</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo5" className="accordion-collapse collapse"
                                                     aria-labelledby="headingTwo5" data-bs-parent="#accordionExampleb2">
                                                    <div className="accordion-body card-body pr--0">
                                                        <ul className="rbt-course-main-content liststyle">
                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Course Intro</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>
                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Why You Should Not Go To
                                                                        Education.</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>


                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-play-circle"></i> <span
                                                                    className="text">Ten Factors That Affect Education's
                                                                        Longevity.</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>

                                                            <li><a href="#">
                                                                <div className="course-content-left">
                                                                    <i className="feather-file-text"></i> <span
                                                                    className="text">Read Before You Start</span>
                                                                </div>
                                                                <div className="course-content-right">
                                                                    <span className="course-lock"><i
                                                                        className="feather-lock"></i></span>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
                                <div className="row g-5">
                                    <div className="col-lg-12">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Details</h4>
                                        </div>
                                        description
                                    </div>
                                </div>
                            </div>
                            <div className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30" id="review">
                                <div className="course-content">
                                    <div className="section-title">
                                        <h4 className="rbt-title-style-3">Review</h4>
                                    </div>
                                    <div className="row g-5 align-items-center">
                                        <div className="col-lg-3">
                                            <div className="rating-box">
                                                <div className="rating-number">5.0</div>
                                                <div className="rating">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-star-fill"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-star-fill"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-star-fill"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-star-fill"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-star-fill"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                </div>
                                                <span className="sub-title">Course Rating</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="review-wrapper">
                                                <div className="single-progress-bar">
                                                    <div className="rating-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"

                                                             // style="width: 63%"
                                                             aria-valuenow="63" aria-valuemin="0"
                                                             aria-valuemax="100"/>
                                                    </div>
                                                    <span className="value-text">63%</span>
                                                </div>

                                                <div className="single-progress-bar">
                                                    <div className="rating-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"
                                                             // style="width: 29%"
                                                             aria-valuenow="29" aria-valuemin="0"
                                                             aria-valuemax="100"/>
                                                    </div>
                                                    <span className="value-text">29%</span>
                                                </div>

                                                <div className="single-progress-bar">
                                                    <div className="rating-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"
                                                             // style="width: 6%"
                                                             aria-valuenow="6" aria-valuemin="0"
                                                             aria-valuemax="100"/>
                                                    </div>
                                                    <span className="value-text">6%</span>
                                                </div>

                                                <div className="single-progress-bar">
                                                    <div className="rating-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"
                                                             // style="width: 1%"
                                                             aria-valuenow="1" aria-valuemin="0"
                                                             aria-valuemax="100"/>
                                                    </div>
                                                    <span className="value-text">1%</span>
                                                </div>

                                                <div className="single-progress-bar">
                                                    <div className="rating-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star-fill"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" className="bi bi-star"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                                        </svg>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"
                                                             // style="width: 1%"
                                                             aria-valuenow="1" aria-valuemin="0"
                                                             aria-valuemax="100"/>
                                                    </div>
                                                    <span className="value-text">1%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div
                            className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
                            <div className="inner">

                                 {/*Start Viedo Wrapper  */}
                                <a className="video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15"
                                   href="https://www.youtube.com/watch?v=nA1Aqp0sPQo">
                                    <div className="video-content">
                                        <img className="w-100 rbt-radius"
                                             src="assets/images/others/video-01.jpg"
                                             alt="Video Images"/>
                                            <div className="position-to-top">
                                        <span className="rbt-btn rounded-player-2 with-animation">
                                            <span className="play-icon"></span>
                                        </span>
                                            </div>
                                            <span className="play-view-text d-block color-white"><i
                                                className="feather-eye"></i> Preview this course</span>
                                    </div>
                                </a>
                                 {/*End Viedo Wrapper  */}

                                <div className="content-item-content">
                                    <div
                                        className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="rbt-price">
                                            <span className="current-price">$60.99</span>
                                            <span className="off-price">$84.99</span>
                                        </div>
                                        <div className="discount-time">
                                        <span className="rbt-badge color-danger bg-color-danger-opacity"><i
                                            className="feather-clock"></i> 3 days left!</span>
                                        </div>
                                    </div>

                                    <div className="add-to-card-button mt--15">
                                        <a className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
                                           href="#">
                                            <span className="btn-text">Add to Cart</span>
                                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                        </a>
                                    </div>

                                    <div className="buy-now-btn mt--15">
                                        <a className="rbt-btn btn-border icon-hover w-100 d-block text-center" href="#">
                                            <span className="btn-text">Buy Now</span>
                                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                        </a>
                                    </div>

                                    <span className="subtitle"><i className="feather-rotate-ccw"></i> 30-Day Money-Back
                                    Guarantee</span>


                                    <div className="rbt-widget-details has-show-more">
                                        <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                                            <li><span>Start Date</span><span className="rbt-feature-value rbt-badge-5">5 Hrs 20 Min</span>
                                            </li>
                                            <li><span>Enrolled</span><span
                                                className="rbt-feature-value rbt-badge-5">100</span></li>
                                            <li><span>Lectures</span><span
                                                className="rbt-feature-value rbt-badge-5">50</span></li>
                                            <li><span>Skill Level</span><span
                                                className="rbt-feature-value rbt-badge-5">Basic</span></li>
                                            <li><span>Language</span><span
                                                className="rbt-feature-value rbt-badge-5">English</span></li>
                                            <li><span>Quizzes</span><span
                                                className="rbt-feature-value rbt-badge-5">10</span></li>
                                            <li><span>Certificate</span><span
                                                className="rbt-feature-value rbt-badge-5">Yes</span></li>
                                            <li><span>Pass Percentage</span><span
                                                className="rbt-feature-value rbt-badge-5">95%</span></li>
                                        </ul>
                                        <div className="rbt-show-more-btn">Show More</div>
                                    </div>

                                    <div className="social-share-wrapper mt--30 text-center">
                                        <div
                                            className="rbt-post-share d-flex align-items-center justify-content-center">
                                            <ul className="social-icon social-default transparent-with-border justify-content-center">
                                                <li><a href="https://www.facebook.com/">
                                                    <i className="feather-facebook"></i>
                                                </a>
                                                </li>
                                                <li><a href="https://www.twitter.com/">
                                                    <i className="feather-twitter"></i>
                                                </a>
                                                </li>
                                                <li><a href="https://www.instagram.com/">
                                                    <i className="feather-instagram"></i>
                                                </a>
                                                </li>
                                                <li><a href="https://www.linkdin.com/">
                                                    <i className="feather-linkedin"></i>
                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr className="mt--20"/>
                                            <div className="contact-with-us text-center">
                                                <p>For details about the course</p>
                                                <p className="rbt-badge-2 mt--10 justify-content-center w-100"><i
                                                    className="feather-phone mr--5"></i> Call Us: <a href="#"><strong>+444
                                                    555 666 777</strong></a></p>
                                            </div>
                                    </div>
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