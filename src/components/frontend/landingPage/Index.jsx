import React from "react";
import PublishAuthor from "./PublishAuthor";
import PathProgram from "./PathProgram";
import { Container, Row, Col } from "reactstrap";
import JenienLetter from "./JenienLetter";
import {Link} from "react-router-dom";
import Questions from "./Questions";
import WriteStoryNotForYou from "./WriteStoryNotForYou";
import Organized from '../../../assets/image/organized.png'
import Stress from '../../../assets/image/stress.png'
import Golls from '../../../assets/image/golls.png'
import CourseContent from "./CourseContent";
import Course from "../Course/Course";

export default function Index() {
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
                  <Link to="#">
                    <img
                      src={Organized}
                      alt="Card image"
                    />{" "}
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <Link to="#">GET YOU ORGANIZED</Link>
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
                  <Link to="blog-details.html">
                    <img
                      src={Stress}
                      alt="Card image"
                    />{" "}
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <Link to="#">ALLEVIATE YOUR STRESS</Link>
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
                  <Link to="#">
                    <img
                      src={Golls}
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <Link to="blog-details.html">REACH THE GOAL LINE</Link>
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
      <CourseContent/>
      <Course title='GET STARTED NOW' buttonTitle='Choose Bundle'/>
      <div className="rbt-advance-tab-area bg-gradient-10 rbt-section-gapTop">
        <div className="container">
          <div className="row pb--60">
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
    </>
  );
}
