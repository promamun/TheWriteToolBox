import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../inputComponent/CustomInput";
import TextArea from "../inputComponent/TextArea";
import Button from "../inputComponent/Button";

function Pen() {
  return (
    <>
      <div
        className="rbt-banner-6 variation-02 bg_image bg_image--7 header-transperent-spacer"
        data-black-overlay="2"
      >
        <div className="wrapper w-100">
          <div className="container">
            <div className="row row--15 align-items-center">
              <div className="col-lg-12">
                <div className="inner text-start">
                  <div className="section-title">
                    <span className="subtitle bg-white-opacity d-inline-block">
                      MARIE FORLEO'S
                    </span>
                  </div>
                  <h2 className="title w-700">
                    B-School <br />
                    <strong>
                      <span className="header-caption">
                        <span className="cd-headline zoom">
                          <span className="cd-words-wrapper">
                            <b className="is-visible theme-gradient">
                              <h5>
                                The ultimate system to grow your business and
                                own your freedom
                              </h5>
                            </b>
                            <b className="is-hidden theme-gradient">
                              With GYM Instructor.
                            </b>
                          </span>
                        </span>
                      </span>
                    </strong>
                  </h2>
                  <div className="button-group mt--30 mt_sm--10">
                    <Link
                      className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
                      to="#"
                    >
                      <span data-text="Join Us Today">Join Us Today</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-about-area about-style-1 rbt-section-gapTop pb--30 pb_md--80 pb_sm--80 bg-color-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail-wrapper">
                <div className="thumbnail image-1">
                  <img
                    data-parallax='{"x": 0, "y": -20}'
                    src="assets/images/about/about-01.png"
                    alt="Education Images"
                  />
                </div>
                <div className="thumbnail image-2 d-none d-xl-block">
                  <img
                    data-parallax='{"x": 0, "y": 60}'
                    src="assets/images/about/about-02.png"
                    alt="Education Images"
                  />
                </div>
                <div className="thumbnail image-3 d-none d-md-block">
                  <img
                    data-parallax='{"x": 0, "y": 80}'
                    src="assets/images/about/about-03.png"
                    alt="Education Images"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner pl--50 pl_sm--0 pl_md--0">
                <div className="section-title text-start">
                  <h2 className="title">What is Marie Forleo's B-School?</h2>
                </div>

                <p className="description mt--30">
                  B-School is the gold-standard online training experience for
                  entrepreneurs and values-driven creatives who want to
                  <strong>build a meaningful, profitable business.</strong>
                </p>
                <br />
                <p>
                  Whether you’re just starting out or taking an existing company
                  to new heights, our step-by-step training gives you
                  <strong>
                    all the tools and support you need to fast-track your growth
                  </strong>
                  — saving you years of expensive trial and error.
                </p>
                <br />
                <p>
                  <strong>We’ve helped over 80,000 entrepreneurs across</strong>
                  650+ industries and 171 countries and territories build their
                  dream businesses and create lasting financial freedom. We’d be
                  honored to help you too. 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-author-area bg-gradient-8 rbt-section-gap">
        <div className="container">
          <div className="rbt-instructor">
            <div className="single-course-author">
              <div className="media row align-items-center g-5">
                <div className="col-lg-3 col-xl-3 offset-xl-2">
                  <div className="thumbnail">
                    <Link to="#">
                      <img
                        className="radius-10 w-100"
                        src="assets/images/team/team-08.jpg"
                        alt="Author Images"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="media-body ml--15">
                    <div className="author-info text-left">
                      <h2 className="title color-white mb--0">John Due</h2>
                      <span className="b3 color-white">Advanced Educator</span>
                    </div>
                    <div className="content mt--20">
                      <p className="description color-white">
                        John is a brilliant educator, whose life was spent for
                        computer science and love of nature. Being a female, she
                        encountered a lot of obstacles and was forbidden to work
                        in this field by her family. With a true spirit and
                        talented gift, she was able to succeed and set an
                        example for others.
                      </p>
                      <ul className="social-icon color-white social-default transparent-with-border justify-content-start mt--15">
                        <li>
                          <Link to="https://www.facebook.com/">
                            <i className="feather-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.twitter.com/">
                            <i className="feather-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.instagram.com/">
                            <i className="feather-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.linkdin.com/">
                            <i className="feather-linkedin"></i>
                          </Link>
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
      <div className="rbt-contact-me bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">
                  <span className="theme-gradient">Contact</span> With Me
                </h2>
                <p className="description has-medium-font-size mt--20">
                  Learning new technology, data sience, university, communicate
                  to global world and build a bright future with our histudy.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="thumbnail">
                <img
                  className="w-100 radius-10"
                  src="assets/images/about/contact-2.jpg"
                  alt="Contact Images"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                </div>
                <h3 className="title">
                  Get a Free Course You Can Contact With Me
                </h3>
                <form id="contact-form" className="w-100">
                  <div className="form-group">
                    <CustomInput placeholder="Name" type="text" />
                  </div>
                  <div className="form-group">
                    <CustomInput placeholder="Email" type="email" />
                  </div>
                  <div className="form-group">
                    <CustomInput placeholder="Phone" type="text" />
                  </div>
                  <div className="form-group">
                    <TextArea Label="Message" />
                  </div>
                  <div className="form-submit-group">
                    <Button name="SUBMIT" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-wrapper bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-pink-opacity">
                  Histudy Feature
                </span>
                <h3 className="title">
                  Whether you have book ideas scrambling in your head, you’ve
                  nailed down your ideal book topic, you’ve already written your
                  manuscript, or you feel your book hasn’t done a thing for you,
                  The Writer’s Story Path is designed to:
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row row--15 mt_dec--30">
                <div className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="rbt-flipbox">
                    <div className="rbt-flipbox-front rbt-flipbox-face inner">
                      <div className="icon">
                        <img
                          src="assets/images/icons/card-icon-1.png"
                          alt="card-icon"
                        />
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <Link to="#">GET YOU ORGANIZED</Link>
                        </h5>
                        <p>
                          Organizing your thoughts and getting your book out of
                          your head sets you up for an effortless writing
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="rbt-flipbox">
                    <div className="rbt-flipbox">
                      <div className="rbt-flipbox-front rbt-flipbox-face inner">
                        <div className="icon">
                          <img
                            src="assets/images/icons/card-icon-2.png"
                            alt="card-icon"
                          />
                        </div>
                        <div className="content">
                          <h5 className="title">
                            <Link to="#">ALLEVIATE YOUR STRESS</Link>
                          </h5>
                          <p>
                            A well-planned path not only organizes the process,
                            but removes fear, stress, and overwhelm leaving you
                            feeling successful.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div className="rbt-flipbox">
                    <div className="rbt-flipbox-wrap rbt-service rbt-service-1 card-bg-3">
                      <div className="rbt-flipbox-front rbt-flipbox-face inner">
                        <div className="icon">
                          <img
                            src="assets/images/icons/card-icon-3.png"
                            alt="card-icon"
                          />
                        </div>
                        <div className="content">
                          <h5 className="title">
                            <Link to="#">REACH THE GOAL LINE</Link>
                          </h5>
                          <p>
                            Every milestone, achievement, and goal you set is a
                            breeze to achieve as you plan the follow through and
                            follow the plan.
                          </p>
                          <Link className="rbt-btn-link stretched-link" to="#">
                            Learn More<i className="feather-arrow-right"></i>
                          </Link>
                        </div>
                      </div>

                      <div className="rbt-flipbox-back rbt-flipbox-face inner">
                        <ul className="rbt-list-style-3 color-white">
                          <li>
                            <i className="feather-youtube"></i> 125 Free Video
                          </li>
                          <li>
                            <i className="feather-book"></i> 12 Subjects
                          </li>
                          <li>
                            <i className="feather-video"></i> Live Class
                          </li>
                          <li>
                            <i className="feather-info"></i> MCQ and CQ Bank
                          </li>
                        </ul>
                        <Link
                          className="rbt-btn rbt-switch-btn btn-white btn-sm"
                          to="#"
                        >
                          <span data-text="Learn More">Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-cta-6 text-center">
                <div className="content">
                  <h1 className="title">Is B-School right for me?</h1>
                  <p>
                    B-School is for determined and ambitious entrepreneurs who
                    are sick of spinning their wheels, agonizing over what to do
                    next, or simply doubting their ability to start and scale a
                    business. Regardless of your industry, thriving as an
                    entrepreneur in today’s economy means knowing how to build
                    trust, create meaningful connections, and sell to people
                    online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-rbt-blog-area rbt-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">YES, B-School works for…</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--30">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30">
              <div className="rbt-card variation-02 rbt-hover">
                <div className="rbt-card-img">
                  <Link to="course-details.html">
                    <img
                      src="assets/images/blog/kindergarten-01.jpg"
                      alt="Card image"
                    />{" "}
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h4 className="rbt-card-title">
                    <Link to="course-details.html">
                      Product-Based Businesses
                    </Link>
                  </h4>
                  <p className="rbt-card-text">
                    B-School grads are out there selling flowers, cupcakes,
                    books, apps, clothing, wood carvings and everything in
                    between. If you sell physical or digital products, B-School
                    can help..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30">
              <div className="rbt-card variation-02 rbt-hover">
                <div className="rbt-card-img">
                  <Link to="course-details.html">
                    <img
                      src="assets/images/blog/kindergarten-01.jpg"
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h4 className="rbt-card-title">
                    <Link to="course-details.html">
                      Service-Based Businesses
                    </Link>
                  </h4>
                  <p className="rbt-card-text">
                    Whether you teach people how to swing dance at their wedding
                    or do financial consulting for Fortune 500 companies, let
                    B-School take your service-based business to the next level.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30">
              <div className="rbt-card variation-02 rbt-hover">
                <div className="rbt-card-img">
                  <Link to="course-details.html">
                    <img
                      src="assets/images/blog/kindergarten-01.jpg"
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h4 className="rbt-card-title">
                    <Link to="course-details.html">
                      Brick-and-Mortar Businesse
                    </Link>
                  </h4>
                  <p className="rbt-card-text">
                    Take your brick-and-mortar business online to reach a
                    broader audience, create new revenue streams, and stay
                    relevant in a changing economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-testimonial-area bg-color-light rbt-section-gap overflow-hidden">
        <div className="wrapper mb--60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h1 className="title">
                    Can I see reviews from past B-Schoolers?
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center row--30">
            <div className="col-lg-6">
              <div
                className="rbt-testimonial-content tab-content"
                id="myTabContent"
              >
                <div
                  className="tab-pane fade active show"
                  id="testimonial-tab1"
                  role="tabpanel"
                  aria-labelledby="testimonial-tab1-tab"
                >
                  <div className="inner">
                    <p>
                      You can read over 200 B-School reviews. They reflect the
                      diversity of the 80,000+ students who've attended Marie
                      Forleo’s B-School from nearly every industry and country
                      on earth. Want to read stories from entrepreneurs just
                      like you and see the results they've been able to create
                      after taking the program? We’ve got you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt_md--30 mt_sm--30">
              <ul
                className="testimonial-thumb-wrapper nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                <li>
                  <Link
                    className="active"
                    id="testimonial-tab1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testimonial-tab1"
                    role="tab"
                    aria-controls="testimonial-tab1"
                    aria-selected="true"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/testimonial/testimonial-1.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    id="testimonial-tab2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testimonial-tab2"
                    role="tab"
                    aria-controls="testimonial-tab2"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/testimonial/testimonial-2.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    id="testimonial-tab3-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testimonial-tab3"
                    role="tab"
                    aria-controls="testimonial-tab3"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/testimonial/testimonial-3.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    id="testimonial-tab4-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testimonial-tab4"
                    role="tab"
                    aria-controls="testimonial-tab4"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/testimonial/testimonial-4.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    id="testimonial-tab5-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testimonial-tab5"
                    role="tab"
                    aria-controls="testimonial-tab5"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/testimonial/testimonial-5.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    id="testimonial-tab6-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testimonial-tab6"
                    role="tab"
                    aria-controls="testimonial-tab6"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/testimonial/testimonial-6.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    id="testimonial-tab7-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testimonial-tab7"
                    role="tab"
                    aria-controls="testimonial-tab7"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/testimonial/testimonial-7.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    id="testimonial-tab8-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testimonial-tab8"
                    role="tab"
                    aria-controls="testimonial-tab8"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img
                          src="assets/images/testimonial/testimonial-8.jpg"
                          alt="Testimonial Images"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pen;
