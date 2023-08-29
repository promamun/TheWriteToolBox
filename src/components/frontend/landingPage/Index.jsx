import React from "react";
import PublishAuthor from "./PublishAuthor";
import Pen from "./Pen";
import PathProgram from "./PathProgram";
import { Container, Row, Col } from "reactstrap";
import { FiCheck } from "react-icons/fi";
import JenienLetter from "./JenienLetter";
import {Link} from "react-router-dom";
import Questions from "./Questions";
import WriteStoryNotForYou from "./WriteStoryNotForYou";

export default function Index() {
  const IconColor = {
    color:'green',
    fontSize:'xx-large'
  }
  return (
    <>
      <PublishAuthor />
      <PathProgram />
      <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-10">
        <Container>
          <Row>
            <Col lg="12">
              <div className="rbt-cta-6 text-center">
                <div className="content">
                  <h1 className="title">
                    Get on the Fast Track to <br /> Completing Your Book
                  </h1>
                  <p>
                    Regardless of where your thoughts are surrounding the idea
                    of becoming a published author, <br />I guarantee it’s
                    easier than you fear.
                  </p>
                  <h6>It’s as simple as taking a trip back to high school.</h6>
                  <p>
                    I know. I know. Nobody wants to go back to high school. But
                    do not fear! We’re not going to visit the terrible
                    awkwardness of teen adolescence. We’re going to go straight
                    to English className and dust off the skills we learned to make
                    writing simple, understandable, and a breeze to get through.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="rbt-rbt-blog-area bg-gradient-light">
        <Container>
          <Row className="mb--55 row--30 align-items-end">
            <Col lg="12">
              <div className="section-title text-center">
                <p className="description has-medium-font-size mt--20">
                  Whether you have book ideas scrambling in your head, you’ve
                  nailed down your ideal book topic, you’ve already written your
                  manuscript, or you feel your book hasn’t done a thing for you,
                  The Writer’s Story Path is designed to:
                </p>
              </div>
            </Col>
          </Row>
          <Row  className="g-5">
            <Col lg="4" md="6" sm="12" className='mb-5'>
              <div className="rbt-card variation-02 rbt-hover">
                <div className="rbt-card-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/blog-grid-01.jpg"
                      alt="Card image"
                    />{" "}
                  </a>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <a href="blog-details.html">GET YOU ORGANIZED</a>
                  </h5>
                  <p className="rbt-card-text">
                    Organizing your thoughts and getting your book out of your
                    head sets you up for an effortless writing experience.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className='mb-5'>
              <div className="rbt-card variation-02 rbt-hover">
                <div className="rbt-card-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/blog-grid-02.jpg"
                      alt="Card image"
                    />{" "}
                  </a>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <a href="blog-details.html">ALLEVIATE YOUR STRESS</a>
                  </h5>
                  <p className="rbt-card-text">
                    A well-planned path not only organizes the process, but
                    removes fear, stress, and overwhelm leaving you feeling
                    successful.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className='mb-5'>
              <div className="rbt-card variation-02 rbt-hover">
                <div className="rbt-card-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/blog-grid-03.jpg"
                      alt="Card image"
                    />
                  </a>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <a href="blog-details.html">REACH THE GOAL LINE</a>
                  </h5>
                  <p className="rbt-card-text">
                    Every milestone, achievement, and goal you set is a breeze
                    to achieve as you plan the follow through and follow the
                    plan.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
        <Container>
          <Row>
            <Col lg='12'>
              <div className="rbt-cta-6 text-center">
                <div className="content">
                  <h3>INTRODUCING THE ALL NEW</h3>
                  <h1 className="title">THE WRITER’S STORY PATH</h1>
                  <p>
                    The cornerstone to any writer’s path to effortless writing.
                  </p>
                  <h2>Get Out of Your Way Get Your Book in Your Hands</h2>
                  <p>
                    Stop drowning in your thoughts of fear (and, yes, every
                    single doubt you have simply boils down to fear).
                  </p>
                  <p>
                    The Writer’s Story Path is the most superior 4-course
                    toolkit to have in your arsenal of writing tools. It gives{" "}
                    <br />
                    you a specific blueprint for all things from getting your
                    book out of your head to promoting your published book so
                    you can finally claim that badge of honor – published
                    author.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="rbt-call-to-action-area bg-color-white">
        <Container>
          <Row>
            <Col lg='12'>
              <div className="rbt-cta-6 text-center mt-3 mb-5">
                <div className="content">
                  <h5>Course 1 - Pen - Get Your Book Out of Your Head</h5>
                  <p>In this course:</p>
                  <p>
                    <FiCheck style={IconColor} />  Get <strong> clarity </strong>on your
                    purpose for writing a book and your book’s purpose in order
                    to
                    <strong>
                      {" "}
                       avoid ending up with a book with no direction.
                    </strong>
                  </p>
                  <p>
                    <FiCheck style={IconColor} /> Discover the questions you need to answer
                    to ensure your book
                    <strong>
                      {" "}
                      delivers on your  intended purposes.
                    </strong>
                  </p>
                  <p>
                    <FiCheck style={IconColor} /> Learn the anatomy of a book and how to
                    <strong> structure your content </strong>to create your
                     <strong> effortless writing path. </strong>
                  </p>
                  <p>
                    <FiCheck style={IconColor} /> Develop<strong> momentum </strong>with
                    your<strong> Writer’s Story Path Action Plan. </strong>
                  </p>
                  <p>
                    <FiCheck style={IconColor} /> Obtain a
                    <strong> surefire blueprint </strong>that will leave you
                    exclaiming, “Wow!
                    <strong> Writing my book is simple. </strong>
                     Why did I wait so long
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="rbt-brand-area bg-gradient-2 ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-center mb--40">
                <h5 className="small-title w-600">
                  Course 2 - Polish – Get Your Book Written
                </h5>
                <br />
                <p>In this course:</p>
                <br />
                <p>
                  <FiCheck style={IconColor} /> <strong>Uncover </strong> your
                  <strong> unique </strong> voice, tone, life experiences, and
                  message so you can be
                  <strong> authentic and vulnerable </strong> in order to
                  connect with your readers.
                </p>
                <p>
                  <FiCheck style={IconColor} /> Tap into your
                  <strong> intuition, passion, and inspiration </strong> to make
                  your Writer’s Story Path a
                  <strong> fun-filled, soul-satisfying journey.</strong>
                </p>
                <p>
                  <FiCheck style={IconColor} />
                  Learn how to <strong>breakdown</strong> your book structure
                  and <strong>effortlessly write</strong> your book
                </p>
                <p>
                  <FiCheck style={IconColor} /> Utilize today’s technology to
                  <strong> streamline </strong>
                  your writing<strong> timeline </strong>and{" "}
                  <strong> expedite </strong> your writing process,
                  including AI tools like ChatGPT.
                </p>
                <p>
                  <FiCheck style={IconColor} /> Use editing, proofreading, and formatting
                  techniques to<strong> polish off </strong>your manuscript
                  into a <strong>professional looking</strong> published
                  book
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-brand-area bg-gradient-light ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title text-center mb--40">
                <h5 className="small-title w-600">
                  Course 3 – Publish – Get Your Printed Book in Your Hands
                </h5>
                <p >In this course:</p>
                <p >
                  <FiCheck style={IconColor} />
                  Learn<strong> terminology of the trade </strong>so you can
                  <strong> terminology of the trade </strong>
                  and<strong> confidently communicate </strong>about your
                  publishing process
                </p>
                <p >
                  <FiCheck style={IconColor} />
                  Design an <strong> eye-catching </strong>cover that makes
                  readers<strong> stop in their tracks </strong>and
                  <strong> take notice </strong>
                  of your book.
                </p>
                <p >
                  <FiCheck style={IconColor} /> <strong> Flesh </strong>out your book’s
                  front and back matter pages to have a
                  <strong> complete, professional </strong>manuscript
                </p>
                <p >
                  <FiCheck style={IconColor} /> Write an<strong> intriguing </strong>back
                  cover blurb and author’s bio that<strong> entice </strong>
                  readers to want to<strong> read more </strong>
                </p>
                <p >
                  <FiCheck style={IconColor} />
                  Add the<strong> finishing touches </strong>of ISBNs, bar
                  codes, and copyright notices to let the book world know your
                  book<strong> exists </strong>and
                  <strong> protect your content </strong>from copyright
                  infringement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-advance-tab-area bg-color-secondary-alt rbt-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h5 className="title">
                  Course 4 – Promote – Get Your Book Working for You
                </h5>
                <br />
                <p>In this course:</p>
                <br />
                <p>
                  <FiCheck style={IconColor} /> Learn how to<strong> leverage </strong>your
                  book to<strong> expand </strong>
                  your authority, develop your tribe, and
                  <strong> uplevel </strong>your expert status
                </p>

                <p>
                  <FiCheck style={IconColor} /> Brainstorm
                  <strong> creative, out-of-the-box </strong>
                  marketing strategies that<strong> tailor </strong>to your
                  <strong> personality </strong>, interests, and goals.
                </p>
                <p>
                  <FiCheck style={IconColor} /> Determine launch strategies that
                  <strong> reach more readers </strong>and
                  <strong> bring more awareness </strong>to your book, your
                  business,
                   and your message.
                </p>
                <p>
                  <FiCheck style={IconColor} /> Build
                  <strong> an online author platform </strong>- your website,
                  mailing list, and social media channels – to
                  <strong> increase </strong>
                  your <strong> visibility </strong>,
                  <strong> communicate </strong> with your audience, and
                  <strong> highlight </strong>your authority, credentials,
                  endorsements, and contributions.
                </p>
                <p>
                  <FiCheck style={IconColor} /> Create a<strong> community </strong>to
                  <strong> engage </strong>with your readers, fans, followers,
                  and ideal customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">GET STARTED NOW</h2>
                <p>Choose the course that fits where you are at</p>
                <h5>OR</h5>
                <p>
                  Choose all 4 courses to add a full bundle to your writer’s
                  toolbox.
                </p>
                <p>The Writer’s Story Path</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="course-details.html">
                    <img
                      src="assets/images/course/course-01.jpg"
                      alt="Card image"
                    />
                    <div className="rbt-badge-3 bg-white">
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
                      <Link className="rbt-round-btn" title="Bookmark" to="#">
                        <i className="feather-bookmark"/>
                      </Link>
                    </div>
                  </div>

                  <h4 className="rbt-card-title">
                    <a href="course-details.html">React Front To Back</a>
                  </h4>
                  <ul className="rbt-meta">
                    <li>
                      <i className="feather-book"></i>20 Lessons
                    </li>
                    <li>
                      <i className="feather-users"></i>40 Students
                    </li>
                  </ul>
                  <p className="rbt-card-text">
                    React Js long fact that a reader will be distracted by the
                    readable.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="course-details.html">
                    <img
                      src="assets/images/course/course-02.jpg"
                      alt="Card image"
                    />
                    <div className="rbt-badge-3 bg-white">
                      <span>-40%</span>
                      <span>Off</span>
                    </div>
                  </a>
                </div>
                <div className="rbt-card-body">
                  <div className="rbt-card-top">
                    <div className="rbt-review">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="rating-count"> (15 Reviews)</span>
                    </div>
                    <div className="rbt-bookmark-btn">
                      <a className="rbt-round-btn" title="Bookmark" href="#">
                        <i className="feather-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h4 className="rbt-card-title">
                    <a href="course-details.html">PHP Beginner + Advanced</a>
                  </h4>
                  <ul className="rbt-meta">
                    <li>
                      <i className="feather-book"></i>12 Lessons
                    </li>
                    <li>
                      <i className="feather-users"></i>50 Students
                    </li>
                  </ul>
                  <p className="rbt-card-text">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="course-details.html">
                    <img
                      src="assets/images/course/course-03.jpg"
                      alt="Card image"
                    />
                    <div className="rbt-badge-3 bg-white">
                      <span>-40%</span>
                      <span>Off</span>
                    </div>
                  </a>
                </div>
                <div className="rbt-card-body">
                  <div className="rbt-card-top">
                    <div className="rbt-review">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="rating-count"> (5 Reviews)</span>
                    </div>
                    <div className="rbt-bookmark-btn">
                      <a className="rbt-round-btn" title="Bookmark" href="#">
                        <i className="feather-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h4 className="rbt-card-title">
                    <a href="course-details.html">Angular Zero to Mastery</a>
                  </h4>
                  <ul className="rbt-meta">
                    <li>
                      <i className="feather-book"></i>8 Lessons
                    </li>
                    <li>
                      <i className="feather-users"></i>30 Students
                    </li>
                  </ul>
                  <p className="rbt-card-text">
                    Angular Js long fact that a reader will be distracted by the
                    readable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-advance-tab-area bg-gradient-2 rbt-section-gapTop">
        <div className="container">
          <div className="row mb--40">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="title">
                  All Courses are Video-Based, Online Courses
                </h3>
                <br />
                <br />
                <p>
                  The Writer’s Story Path is 100% online. You can participate
                  anywhere, anytime in any manner.In your pajamas in bed? <br/>The Writer’s Story Path is a great way
                  to start or end your day.
                </p>
                <p>
                  In your business attire attending to your work day? Lunch hour
                  is a great time to carve out a little bit  of course work. <br/>Modules are released weekly. Go through the material as it’s
                  released or work at a slower pace <br/> that’s best for your
                  circumstances and schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JenienLetter/>
      <WriteStoryNotForYou/>
      <Questions/>
      <Pen />
    </>
  );
}
