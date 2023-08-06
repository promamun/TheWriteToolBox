import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../inputComponent/CustomInput";
import TextArea from "../inputComponent/TextArea";
import Button from "../inputComponent/Button";

function Pen() {
  return (
    <>
      <div
        class="rbt-banner-6 variation-02 bg_image bg_image--7 header-transperent-spacer"
        data-black-overlay="2"
      >
        <div class="wrapper w-100">
          <div class="container">
            <div class="row row--15 align-items-center">
              <div class="col-lg-12">
                <div class="inner text-start">
                  <div class="section-title">
                    <span class="subtitle bg-white-opacity d-inline-block">
                      MARIE FORLEO'S
                    </span>
                  </div>
                  <h2 class="title w-700">
                    B-School <br />
                    <strong>
                      <span class="header-caption">
                        <span class="cd-headline zoom">
                          <span class="cd-words-wrapper">
                            <b class="is-visible theme-gradient">
                              <h5>
                                The ultimate system to grow your business and
                                own your freedom
                              </h5>
                            </b>
                            <b class="is-hidden theme-gradient">
                              With GYM Instructor.
                            </b>
                          </span>
                        </span>
                      </span>
                    </strong>
                  </h2>
                  <div class="button-group mt--30 mt_sm--10">
                    <Link
                      class="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"
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
      <div class="rbt-about-area about-style-1 rbt-section-gapTop pb--30 pb_md--80 pb_sm--80 bg-color-white">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <div class="thumbnail-wrapper">
                <div class="thumbnail image-1">
                  <img
                    data-parallax='{"x": 0, "y": -20}'
                    src="assets/images/about/about-01.png"
                    alt="Education Images"
                  />
                </div>
                <div class="thumbnail image-2 d-none d-xl-block">
                  <img
                    data-parallax='{"x": 0, "y": 60}'
                    src="assets/images/about/about-02.png"
                    alt="Education Images"
                  />
                </div>
                <div class="thumbnail image-3 d-none d-md-block">
                  <img
                    data-parallax='{"x": 0, "y": 80}'
                    src="assets/images/about/about-03.png"
                    alt="Education Images"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="inner pl--50 pl_sm--0 pl_md--0">
                <div class="section-title text-start">
                  <h2 class="title">What is Marie Forleo's B-School?</h2>
                </div>

                <p class="description mt--30">
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
      <div class="rbt-author-area bg-gradient-8 rbt-section-gap">
        <div class="container">
          <div class="rbt-instructor">
            <div class="single-course-author">
              <div class="media row align-items-center g-5">
                <div class="col-lg-3 col-xl-3 offset-xl-2">
                  <div class="thumbnail">
                    <Link to="#">
                      <img
                        class="radius-10 w-100"
                        src="assets/images/team/team-08.jpg"
                        alt="Author Images"
                      />
                    </Link>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="media-body ml--15">
                    <div class="author-info text-left">
                      <h2 class="title color-white mb--0">John Due</h2>
                      <span class="b3 color-white">Advanced Educator</span>
                    </div>
                    <div class="content mt--20">
                      <p class="description color-white">
                        John is a brilliant educator, whose life was spent for
                        computer science and love of nature. Being a female, she
                        encountered a lot of obstacles and was forbidden to work
                        in this field by her family. With a true spirit and
                        talented gift, she was able to succeed and set an
                        example for others.
                      </p>
                      <ul class="social-icon color-white social-default transparent-with-border justify-content-start mt--15">
                        <li>
                          <Link to="https://www.facebook.com/">
                            <i class="feather-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.twitter.com/">
                            <i class="feather-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.instagram.com/">
                            <i class="feather-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.linkdin.com/">
                            <i class="feather-linkedin"></i>
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
      <div class="rbt-contact-me bg-color-white rbt-section-gapBottom">
        <div class="container">
          <div class="row mb--60">
            <div class="col-lg-12">
              <div class="section-title text-center">
                <h2 class="title">
                  <span class="theme-gradient">Contact</span> With Me
                </h2>
                <p class="description has-medium-font-size mt--20">
                  Learning new technology, data sience, university, communicate
                  to global world and build a bright future with our histudy.
                </p>
              </div>
            </div>
          </div>
          <div class="row g-5">
            <div class="col-lg-6">
              <div class="thumbnail">
                <img
                  class="w-100 radius-10"
                  src="assets/images/about/contact-2.jpg"
                  alt="Contact Images"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="rbt-contact-form contact-form-style-1 max-width-auto">
                <div class="section-title text-start">
                  <span class="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                </div>
                <h3 class="title">Get a Free Course You Can Contact With Me</h3>
                <form id="contact-form" class="w-100">
                  <div class="form-group">
                    <CustomInput placeholder="Name" type="text" />
                  </div>
                  <div class="form-group">
                    <CustomInput placeholder="Email" type="email" />
                  </div>
                  <div class="form-group">
                    <CustomInput placeholder="Phone" type="text" />
                  </div>
                  <div class="form-group">
                    <TextArea Label="Message" />
                  </div>
                  <div class="form-submit-group">
                    <Button name="SUBMIT" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="service-wrapper bg-color-white rbt-section-gap">
        <div class="container">
          <div class="row mb--60">
            <div class="col-lg-12">
              <div class="section-title text-center">
                <span class="subtitle bg-pink-opacity">Histudy Feature</span>
                <h2 class="title">
                  Check out Histudy's features <br /> to win any exam
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="row row--15 mt_dec--30">
                <div class="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div class="rbt-flipbox">
                    <div class="rbt-flipbox-wrap rbt-service rbt-service-1 card-bg-1">
                      <div class="rbt-flipbox-front rbt-flipbox-face inner">
                        <div class="icon">
                          <img
                            src="assets/images/icons/card-icon-1.png"
                            alt="card-icon"
                          />
                        </div>
                        <div class="content">
                          <h5 class="title">
                            <Link to="#">Best Coaching</Link>
                          </h5>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Minima error reiciendis.
                          </p>
                          <Link class="rbt-btn-link stretched-link" to="#">
                            Learn More<i class="feather-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                      <div class="rbt-flipbox-back rbt-flipbox-face inner">
                        <ul class="rbt-list-style-3 color-white">
                          <li>
                            <i class="feather-youtube"></i> 570 Free Video
                          </li>
                          <li>
                            <i class="feather-book"></i> 35 Subjects
                          </li>
                          <li>
                            <i class="feather-video"></i> Live Class
                          </li>
                          <li>
                            <i class="feather-info"></i> MCQ and CQ Bank
                          </li>
                        </ul>
                        <Link
                          class="rbt-btn rbt-switch-btn btn-white btn-sm"
                          to="#"
                        >
                          <span data-text="Learn More">Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div class="rbt-flipbox">
                    <div class="rbt-flipbox-wrap rbt-service rbt-service-1 card-bg-2">
                      <div class="rbt-flipbox-front rbt-flipbox-face inner">
                        <div class="icon">
                          <img
                            src="assets/images/icons/card-icon-2.png"
                            alt="card-icon"
                          />
                        </div>
                        <div class="content">
                          <h5 class="title">
                            <Link to="#">Convenient practice</Link>
                          </h5>
                          <p>
                            Convenient practice dolor sit adipisicing elit.
                            Minima error reiciendis.
                          </p>
                          <Link class="rbt-btn-link stretched-link" to="#">
                            Learn More<i class="feather-arrow-right"></i>
                          </Link>
                        </div>
                      </div>

                      <div class="rbt-flipbox-back rbt-flipbox-face inner">
                        <ul class="rbt-list-style-3 color-white">
                          <li>
                            <i class="feather-youtube"></i> 370 Free Video
                          </li>
                          <li>
                            <i class="feather-book"></i> 120 Subjects
                          </li>
                          <li>
                            <i class="feather-video"></i> Live Class
                          </li>
                          <li>
                            <i class="feather-info"></i> MCQ and CQ Bank
                          </li>
                        </ul>
                        <Link
                          class="rbt-btn rbt-switch-btn btn-white btn-sm"
                          to="#"
                        >
                          <span data-text="Learn More">Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div class="rbt-flipbox">
                    <div class="rbt-flipbox-wrap rbt-service rbt-service-1 card-bg-3">
                      <div class="rbt-flipbox-front rbt-flipbox-face inner">
                        <div class="icon">
                          <img
                            src="assets/images/icons/card-icon-3.png"
                            alt="card-icon"
                          />
                        </div>
                        <div class="content">
                          <h5 class="title">
                            <Link to="#">Video Lecture</Link>
                          </h5>
                          <p>
                            Video Lecture sit, amet consectetur adipisicing
                            elit. Minima error reiciendis.
                          </p>
                          <Link class="rbt-btn-link stretched-link" to="#">
                            Learn More<i class="feather-arrow-right"></i>
                          </Link>
                        </div>
                      </div>

                      <div class="rbt-flipbox-back rbt-flipbox-face inner">
                        <ul class="rbt-list-style-3 color-white">
                          <li>
                            <i class="feather-youtube"></i> 125 Free Video
                          </li>
                          <li>
                            <i class="feather-book"></i> 12 Subjects
                          </li>
                          <li>
                            <i class="feather-video"></i> Live Class
                          </li>
                          <li>
                            <i class="feather-info"></i> MCQ and CQ Bank
                          </li>
                        </ul>
                        <Link
                          class="rbt-btn rbt-switch-btn btn-white btn-sm"
                          to="#"
                        >
                          <span data-text="Learn More">Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-6 col-12 mt--30">
                  <div class="rbt-flipbox">
                    <div class="rbt-flipbox-wrap rbt-service rbt-service-1 card-bg-4">
                      <div class="rbt-flipbox-front rbt-flipbox-face inner">
                        <div class="icon">
                          <img
                            src="assets/images/icons/card-icon-4.png"
                            alt="card-icon"
                          />
                        </div>
                        <div class="content">
                          <h5 class="title">
                            <Link to="#">Live Class</Link>
                          </h5>
                          <p>
                            Live Class dolor sit, amet consectetur adipisicing
                            elit. Minima error reiciendis.
                          </p>
                          <Link class="rbt-btn-link stretched-link" to="#">
                            Learn More<i class="feather-arrow-right"></i>
                          </Link>
                        </div>
                      </div>

                      <div class="rbt-flipbox-back rbt-flipbox-face inner">
                        <ul class="rbt-list-style-3 color-white">
                          <li>
                            <i class="feather-youtube"></i> 124 Free Video
                          </li>
                          <li>
                            <i class="feather-book"></i> 56 Subjects
                          </li>
                          <li>
                            <i class="feather-video"></i> Live Class
                          </li>
                          <li>
                            <i class="feather-info"></i> MCQ and CQ Bank
                          </li>
                        </ul>
                        <Link
                          class="rbt-btn rbt-switch-btn btn-white btn-sm"
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
      <div class="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="rbt-cta-6 text-center">
                <div class="content">
                  <h1 class="title">Is B-School right for me?</h1>
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
      <div class="rbt-rbt-blog-area rbt-section-gap bg-color-white">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center">
                <h2 class="title">YES, B-School works for…</h2>
              </div>
            </div>
          </div>
          <div class="row g-5 mt--30">
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 mt--30">
              <div class="rbt-card variation-02 rbt-hover">
                <div class="rbt-card-img">
                  <Link to="course-details.html">
                    <img
                      src="assets/images/blog/kindergarten-01.jpg"
                      alt="Card image"
                    />{" "}
                  </Link>
                </div>
                <div class="rbt-card-body">
                  <h4 class="rbt-card-title">
                    <Link to="course-details.html">
                      Product-Based Businesses
                    </Link>
                  </h4>
                  <p class="rbt-card-text">
                    B-School grads are out there selling flowers, cupcakes,
                    books, apps, clothing, wood carvings and everything in
                    between. If you sell physical or digital products, B-School
                    can help..
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 mt--30">
              <div class="rbt-card variation-02 rbt-hover">
                <div class="rbt-card-img">
                  <Link to="course-details.html">
                    <img
                      src="assets/images/blog/kindergarten-01.jpg"
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div class="rbt-card-body">
                  <h4 class="rbt-card-title">
                    <Link to="course-details.html">
                      Service-Based Businesses
                    </Link>
                  </h4>
                  <p class="rbt-card-text">
                    Whether you teach people how to swing dance at their wedding
                    or do financial consulting for Fortune 500 companies, let
                    B-School take your service-based business to the next level.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 mt--30">
              <div class="rbt-card variation-02 rbt-hover">
                <div class="rbt-card-img">
                  <Link to="course-details.html">
                    <img
                      src="assets/images/blog/kindergarten-01.jpg"
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div class="rbt-card-body">
                  <h4 class="rbt-card-title">
                    <Link to="course-details.html">
                      Brick-and-Mortar Businesse
                    </Link>
                  </h4>
                  <p class="rbt-card-text">
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

      <div class="rbt-testimonial-area bg-color-light rbt-section-gap overflow-hidden">
        <div class="wrapper mb--60">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title text-center">
                  <h1 class="title">
                    Can I see reviews from past B-Schoolers?
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row align-items-center row--30">
            <div class="col-lg-6">
              <div
                class="rbt-testimonial-content tab-content"
                id="myTabContent"
              >
                <div
                  class="tab-pane fade active show"
                  id="testimonial-tab1"
                  role="tabpanel"
                  aria-labelledby="testimonial-tab1-tab"
                >
                  <div class="inner">
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
            <div class="col-lg-6 mt_md--30 mt_sm--30">
              <ul
                class="testimonial-thumb-wrapper nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                <li>
                  <Link
                    class="active"
                    id="testimonial-tab1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#testimonial-tab1"
                    role="tab"
                    aria-controls="testimonial-tab1"
                    aria-selected="true"
                  >
                    <div class="testimonial-thumbnai">
                      <div class="thumb">
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
                    <div class="testimonial-thumbnai">
                      <div class="thumb">
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
                    <div class="testimonial-thumbnai">
                      <div class="thumb">
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
                    <div class="testimonial-thumbnai">
                      <div class="thumb">
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
                    <div class="testimonial-thumbnai">
                      <div class="thumb">
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
                    <div class="testimonial-thumbnai">
                      <div class="thumb">
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
                    <div class="testimonial-thumbnai">
                      <div class="thumb">
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
                    <div class="testimonial-thumbnai">
                      <div class="thumb">
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
