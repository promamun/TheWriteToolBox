import React from "react";
import PublishAuthor from "./PublishAuthor";
import Pen from "./Pen";
import PathProgram from "./PathProgram";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineCheck } from "react-icons/ai";
import JenienLetter from "./JenienLetter";

export default function Index() {
  return (
    <>
      <PublishAuthor />
      <PathProgram />
      <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-2">
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
                    to English class and dust off the skills we learned to make
                    writing simple, understandable, and a breeze to get through.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
      <div class="rbt-rbt-blog-area rbt-section-gap bg-gradient-1">
        <Container>
          <Row class="mb--55 row--30 align-items-end">
            <Col lg="12">
              <div class="section-title text-center">
                <p class="description has-medium-font-size mt--20">
                  Whether you have book ideas scrambling in your head, you’ve
                  nailed down your ideal book topic, you’ve already written your
                  manuscript, or you feel your book hasn’t done a thing for you,
                  The Writer’s Story Path is designed to:
                </p>
              </div>
            </Col>
          </Row>
          <Row  class="g-5">
            <Col lg="4" md="6" sm="12" class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="rbt-card variation-02 rbt-hover">
                <div class="rbt-card-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/blog-grid-01.jpg"
                      alt="Card image"
                    />{" "}
                  </a>
                </div>
                <div class="rbt-card-body">
                  <h5 class="rbt-card-title">
                    <a href="blog-details.html">GET YOU ORGANIZED</a>
                  </h5>
                  <p class="rbt-card-text">
                    Organizing your thoughts and getting your book out of your
                    head sets you up for an effortless writing experience.
                  </p>
                </div>
              </div>
            </Col>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="rbt-card variation-02 rbt-hover">
                <div class="rbt-card-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/blog-grid-02.jpg"
                      alt="Card image"
                    />{" "}
                  </a>
                </div>
                <div class="rbt-card-body">
                  <h5 class="rbt-card-title">
                    <a href="blog-details.html">ALLEVIATE YOUR STRESS</a>
                  </h5>
                  <p class="rbt-card-text">
                    A well-planned path not only organizes the process, but
                    removes fear, stress, and overwhelm leaving you feeling
                    successful.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <div class="rbt-card variation-02 rbt-hover">
                <div class="rbt-card-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/images/blog/blog-grid-03.jpg"
                      alt="Card image"
                    />
                  </a>
                </div>
                <div class="rbt-card-body">
                  <h5 class="rbt-card-title">
                    <a href="blog-details.html">REACH THE GOAL LINE</a>
                  </h5>
                  <p class="rbt-card-text">
                    Every milestone, achievement, and goal you set is a breeze
                    to achieve as you plan the follow through and follow the
                    plan.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div class="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
        <Container>
          <div class="row">
            <div class="col-lg-12">
              <div class="rbt-cta-6 text-center">
                <div class="content">
                  <h3>INTRODUCING THE ALL NEW</h3>
                  <h1 class="title">THE WRITER’S STORY PATH</h1>
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
                  <br />
                  <h5>Course 1 - Pen - Get Your Book Out of Your Head</h5>
                  <br />
                  <p>In this course:</p>
                  <br />
                  <p>
                    <AiOutlineCheck /> Get <strong> clarity </strong>on your
                    purpose for writing a book and your book’s purpose in order
                    to <br />
                    <strong>
                      avoid ending up with a book with no direction.
                    </strong>
                  </p>
                  <br />
                  <p>
                    <AiOutlineCheck /> Discover the questions you need to answer
                    to ensure your book
                    <strong>
                      {" "}
                      delivers on your <br /> intended purposes.
                    </strong>
                  </p>
                  <br />
                  <p>
                    <AiOutlineCheck /> Learn the anatomy of a book and how to
                    <strong> structure your content </strong>to create your
                    <br /> <strong> effortless writing path. </strong>
                  </p>
                  <br />
                  <p>
                    <AiOutlineCheck /> Develop<strong> momentum </strong>with
                    your<strong> Writer’s Story Path Action Plan. </strong>
                  </p>
                  <br />
                  <p>
                    <AiOutlineCheck /> Obtain a
                    <strong> surefire blueprint </strong>that will leave you
                    exclaiming, “Wow!
                    <strong> Writing my book is simple. </strong>
                    <br /> Why did I wait so long
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div class="rbt-brand-area bg-color-white ptb--60">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-title text-center mb--40">
                <h5 class="small-title w-600">
                  Course 2 - Polish – Get Your Book Written
                </h5>
                <br />
                <p>In this course:</p>
                <br />
                <p>
                  <AiOutlineCheck /> <strong>Uncover </strong> your
                  <strong> unique </strong> voice, tone, life experiences, and
                  message so you can <br /> be
                  <strong> authentic and vulnerable </strong> in order to
                  connect with your readers.
                </p>
                <p>
                  <AiOutlineCheck /> Tap into your
                  <strong> intuition, passion, and inspiration </strong> to make
                  your Writer’s <br /> Story Path a
                  <strong> fun-filled, soul-satisfying journey.</strong>
                </p>
                <p>
                  <AiOutlineCheck />
                  Learn how to <strong>breakdown</strong> your book structure
                  and <strong>effortlessly write</strong> your book
                </p>
                <p>
                  <AiOutlineCheck /> Utilize today’s technology to
                  <strong> streamline </strong>
                  your writing<strong> timeline </strong>and{" "}
                  <strong> expedite </strong> <br /> your writing process,
                  including AI tools like ChatGPT.
                </p>
                <p>
                  <AiOutlineCheck /> Use editing, proofreading, and formatting
                  techniques to<strong> polish off </strong>your manuscript
                  <br /> into a <strong>professional looking</strong> published
                  book
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
        <div class="container">
          <div class="row row--15 align-items-center">
            <div class="col-lg-12">
              <div class="inner text-center">
                <div class="section-title text-center">
                  <h5 class="title color-white">
                    Course 3 – Publish – Get Your Printed Book in Your Hands
                  </h5>
                  <p class="description color-white mt--20">In this course:</p>
                  <p class="description color-white mt--20">
                    <AiOutlineCheck />
                    Learn<strong> terminology of the trade </strong>so you can
                    <strong> terminology of the trade </strong>
                    and<strong> confidently communicate </strong>about your
                    publishing process
                  </p>
                  <p class="description color-white mt--20">
                    <AiOutlineCheck />
                    Design an <strong> eye-catching </strong>cover that makes
                    readers<strong> stop in their tracks </strong>and
                    <strong> take notice </strong>
                    of your book.
                  </p>
                  <p class="description color-white mt--20">
                    <AiOutlineCheck /> <strong> Flesh </strong>out your book’s
                    front and back matter pages to have a
                    <strong> complete, professional </strong>manuscript
                  </p>
                  <p class="description color-white mt--20">
                    <AiOutlineCheck /> Write an<strong> intriguing </strong>back
                    cover blurb and author’s bio that<strong> entice </strong>
                    readers to want to<strong> read more </strong>
                  </p>
                  <p class="description color-white mt--20">
                    <AiOutlineCheck />
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
      </div>
      <div class="rbt-advance-tab-area bg-gradient-2 rbt-section-gapTop">
        <div class="container">
          <div class="row mb--40">
            <div class="col-lg-12">
              <div class="section-title text-center">
                <h5 class="title">
                  Course 4 – Promote – Get Your Book Working for You
                </h5>
                <br />
                <p>In this course:</p>
                <br />
                <p>
                  <AiOutlineCheck /> Learn how to<strong> leverage </strong>your
                  book to<strong> expand </strong>
                  your authority, develop your tribe, and
                  <strong> uplevel </strong>your expert status
                </p>

                <p>
                  <AiOutlineCheck /> Brainstorm
                  <strong> creative, out-of-the-box </strong>
                  marketing strategies that<strong> tailor </strong>to your
                  <strong> personality </strong>, interests, and goals.
                </p>
                <p>
                  <AiOutlineCheck /> Determine launch strategies that
                  <strong> reach more readers </strong>and
                  <strong> bring more awareness </strong>to your book, your
                  business,
                  <br /> and your message.
                </p>
                <p>
                  <AiOutlineCheck /> Build
                  <strong> an online author platform </strong>- your website,
                  mailing list, and social media channels – to
                  <strong> increase </strong>
                  your <strong> visibility </strong>,
                  <br />
                  <strong> communicate </strong> with your audience, and
                  <strong> highlight </strong>your authority, credentials,
                  endorsements, and contributions.
                </p>
                <p>
                  <AiOutlineCheck /> Create a<strong> community </strong>to
                  <strong> engage </strong>with your readers, fans, followers,
                  and ideal customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rbt-course-area bg-color-extra2 rbt-section-gap">
        <div class="container">
          <div class="row mb--60">
            <div class="col-lg-12">
              <div class="section-title text-center">
                <h2 class="title">GET STARTED NOW</h2>
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

          <div class="row g-5">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="rbt-card variation-01 rbt-hover">
                <div class="rbt-card-img">
                  <a href="course-details.html">
                    <img
                      src="assets/images/course/course-01.jpg"
                      alt="Card image"
                    />
                    <div class="rbt-badge-3 bg-white">
                      <span>-50%</span>
                      <span>Off</span>
                    </div>
                  </a>
                </div>
                <div class="rbt-card-body">
                  <div class="rbt-card-top">
                    <div class="rbt-review">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <span class="rating-count"> (15 Reviews)</span>
                    </div>
                    <div class="rbt-bookmark-btn">
                      <a class="rbt-round-btn" title="Bookmark" href="#">
                        <i class="feather-bookmark"></i>
                      </a>
                    </div>
                  </div>

                  <h4 class="rbt-card-title">
                    <a href="course-details.html">React Front To Back</a>
                  </h4>
                  <ul class="rbt-meta">
                    <li>
                      <i class="feather-book"></i>20 Lessons
                    </li>
                    <li>
                      <i class="feather-users"></i>40 Students
                    </li>
                  </ul>
                  <p class="rbt-card-text">
                    React Js long fact that a reader will be distracted by the
                    readable.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
              <div class="rbt-card variation-01 rbt-hover">
                <div class="rbt-card-img">
                  <a href="course-details.html">
                    <img
                      src="assets/images/course/course-02.jpg"
                      alt="Card image"
                    />
                    <div class="rbt-badge-3 bg-white">
                      <span>-40%</span>
                      <span>Off</span>
                    </div>
                  </a>
                </div>
                <div class="rbt-card-body">
                  <div class="rbt-card-top">
                    <div class="rbt-review">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <span class="rating-count"> (15 Reviews)</span>
                    </div>
                    <div class="rbt-bookmark-btn">
                      <a class="rbt-round-btn" title="Bookmark" href="#">
                        <i class="feather-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h4 class="rbt-card-title">
                    <a href="course-details.html">PHP Beginner + Advanced</a>
                  </h4>
                  <ul class="rbt-meta">
                    <li>
                      <i class="feather-book"></i>12 Lessons
                    </li>
                    <li>
                      <i class="feather-users"></i>50 Students
                    </li>
                  </ul>
                  <p class="rbt-card-text">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="rbt-card variation-01 rbt-hover">
                <div class="rbt-card-img">
                  <a href="course-details.html">
                    <img
                      src="assets/images/course/course-03.jpg"
                      alt="Card image"
                    />
                    <div class="rbt-badge-3 bg-white">
                      <span>-40%</span>
                      <span>Off</span>
                    </div>
                  </a>
                </div>
                <div class="rbt-card-body">
                  <div class="rbt-card-top">
                    <div class="rbt-review">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <span class="rating-count"> (5 Reviews)</span>
                    </div>
                    <div class="rbt-bookmark-btn">
                      <a class="rbt-round-btn" title="Bookmark" href="#">
                        <i class="feather-bookmark"></i>
                      </a>
                    </div>
                  </div>
                  <h4 class="rbt-card-title">
                    <a href="course-details.html">Angular Zero to Mastery</a>
                  </h4>
                  <ul class="rbt-meta">
                    <li>
                      <i class="feather-book"></i>8 Lessons
                    </li>
                    <li>
                      <i class="feather-users"></i>30 Students
                    </li>
                  </ul>
                  <p class="rbt-card-text">
                    Angular Js long fact that a reader will be distracted by the
                    readable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rbt-advance-tab-area bg-gradient-2 rbt-section-gapTop">
        <div class="container">
          <div class="row mb--40">
            <div class="col-lg-12">
              <div class="section-title text-center">
                <h3 class="title">
                  All Courses are Video-Based, Online Courses
                </h3>
                <br />
                <br />
                <p>
                  The Writer’s Story Path is 100% online. You can participate
                  anywhere, anytime in any manner.
                </p>

                <p>
                  In your pajamas in bed? The Writer’s Story Path is a great way
                  to start or end your day.
                </p>
                <p>
                  In your business attire attending to your work day? Lunch hour
                  is a great time to carve out a<br/> little bit  of course work.
                </p>
                <p>
                  Modules are released weekly. Go through the material as it’s
                  released or work at a slower pace <br/> that’s best for your
                  circumstances and schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JenienLetter/>
      <Pen />
    </>
  );
}
