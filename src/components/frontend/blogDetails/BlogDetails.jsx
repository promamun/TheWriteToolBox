import React from "react";
import { Link } from "react-router-dom";

function BlogDetails() {
  return (
    <>
      <div className="rbt-overlay-page-wrapper">
        <div className="breadcrumb-image-container breadcrumb-style-max-width">
          <div className="breadcrumb-image-wrapper">
            <img
              src="assets/images/bg/bg-image-10.jpg"
              alt="Education Images"
            />
          </div>
          <div className="breadcrumb-content-top text-center">
            <h1 className="title">Skills That You Can Learn From Education.</h1>
            <p>Ten Advices That You Must Listen Before Studying Education.</p>
          </div>
        </div>

        <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
          <div className="blog-content-wrapper rbt-article-content-wrapper">
            <div className="content">
              <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                <figure>
                  <img
                    src="assets/images/blog/blog-single-03.png"
                    alt="Blog Images"
                  />
                  <figcaption>
                    Business and core management app are for enterprise.
                  </figcaption>
                </figure>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered strike out text alteration in
                some form, by injected humour, or randomised words which don't
                look even slightly believable. If you are going to use a passage
                of Lorem Ipsum.
              </p>

              <blockquote className="wp-block-quote">
                <p>
                  Only one thing is impossible for God: To find any sense in any
                  copyright law on the planet.
                </p>
                <cite>
                  <Link to="https://themeforest.net/user/rainbow-themes/portfolio">
                    Mark Twain
                  </Link>
                </cite>
              </blockquote>

              <div className="wp-block-gallery columns-3 is-cropped">
                <ul className="blocks-gallery-grid">
                  <li className="blocks-gallery-item">
                    <figure>
                      <img
                        className="radius-4"
                        src="assets/images/blog/blog-gallery-01.jpg"
                        alt="Blog Images"
                      />
                    </figure>
                  </li>
                  <li className="blocks-gallery-item">
                    <figure>
                      <img
                        className="radius-4"
                        src="assets/images/blog/blog-gallery-02.jpg"
                        alt="Blog Images"
                      />
                    </figure>
                  </li>
                  <li className="blocks-gallery-item">
                    <figure>
                      <img
                        className="radius-4"
                        src="assets/images/blog/blog-gallery-03.jpg"
                        alt="Blog Images"
                      />
                    </figure>
                  </li>
                </ul>
              </div>

              <h4>Apple Design Award Winners: Apps</h4>

              <p>
                <Link to="#">Apple today named</Link> eight app and game
                developers receiving an Apple Design Award, each one selected
                for being thoughtful and creative. Apple Design Award winners
                bring distinctive new ideas to life and demonstrate deep mastery
                of Apple technology.
              </p>

              <p>
                Apple today named eight app and game developers receiving an
                Apple Design Award, each one selected for being thoughtful and
                creative. Apple Design Award winners bring distinctive new ideas
                to life and demonstrate deep mastery of Apple technology. The
                apps spring up from developers large and small, in every part of
                the world, and provide users with new ways of working.
              </p>

              <h4>Every year, app and game education: Apps</h4>

              <p>
                <Link to="#">Every year, app and game</Link> developers
                demonstrate exceptional craftsmanship and we’re honoring the
                best of the best,” said Ron Okamoto, Apple’s vice president of
                Worldwide Developer Relations. “Receiving an Apple Design Award
                is a special and laudable accomplishment.
              </p>

              <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                <figure>
                  <img
                    src="assets/images/blog/blog-bl-02.jpg"
                    alt="Blog Images"
                  />
                  <figcaption>
                    Business and core management app are for enterprise.
                  </figcaption>
                </figure>
              </div>

              <p>
                Every year, app and game developers demonstrate exceptional
                craftsmanship and we’re honoring the best of the best,” said Ron
                Okamoto, Apple’s vice president of Worldwide Developer
                Relations. “Receiving an Apple Design Award is a special and
                laudable accomplishment. Past honorees have made some of the
                most noteworthy apps and games of all time. Through their
                vision, determination, and exacting standards, the winning
                developers inspire not only their peers in the Apple developer
                community, but all of us at Apple, too.
              </p>

              <h4>Every year, app and game education: Apps</h4>

              <p>
                For more information on the apps and games, visit the{" "}
                <Link to="#">App Store</Link>.
              </p>

              <p>
                <Link to="#">Every year, app and game</Link> developers
                demonstrate exceptional craftsmanship and we’re honoring the
                best of the best,” said Ron Okamoto, Apple’s vice president of
                Worldwide Developer Relations. “Receiving an Apple Design Award
                is a special and laudable accomplishment.
              </p>
              <div className="tagcloud">
                <Link to="#">Education</Link>
                <Link to="#">Life Style</Link>
                <Link to="#">React</Link>
                <Link to="#">Javascript</Link>
                <Link to="#">Web App</Link>
                <Link to="#">Application</Link>
              </div>
              <div className="social-share-block">
                <div className="post-like">
                  <Link to="#">
                    <i className="feather feather-thumbs-up"></i>
                    <span>2.2k Like</span>
                  </Link>
                </div>
                <ul className="social-icon social-default transparent-with-border">
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
              <div className="about-author">
                <div className="media">
                  <div className="thumbnail">
                    <Link to="#">
                      <img
                        src="assets/images/testimonial/testimonial-4.jpg"
                        alt="Author Images"
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <div className="author-info">
                      <h5 className="title">
                        <Link className="hover-flip-item-wrapper" to="#">
                          Farjana Bawnia
                        </Link>
                      </h5>
                      <span className="b3 subtitle">Sr. UX Designer</span>
                    </div>
                    <div className="content">
                      <p className="description">
                        At 29 years old, my favorite compliment is being told
                        that I look like my mom. Seeing myself in her image,
                        like this daughter up top.
                      </p>
                      <ul className="social-icon social-default icon-naked justify-content-start">
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

              <div className="rbt-comment-area">
                <div className="rbt-total-comment-post">
                  <div className="title">
                    <h4 className="mb--0">30+ Comments</h4>
                  </div>
                  <div className="add-comment-button">
                    <Link
                      className="rbt-btn btn-gradient icon-hover radius-round btn-md"
                      to="#"
                    >
                      <span className="btn-text">Add Your Comment</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="comment-respond">
                  <h4 className="title">Post a Comment</h4>
                  <form action="#">
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>{" "}
                      Required fields are marked{" "}
                      <span className="required">*</span>
                    </p>
                    <div className="row row--10">
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                          <label for="name">Your Name</label>
                          <input id="name" type="text" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                          <label for="bl-email">Your Email</label>
                          <input id="bl-email" type="email" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="form-group">
                          <label for="website">Your Website</label>
                          <input id="website" type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label for="message">Leave a Reply</label>
                          <textarea id="message" name="message"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <p className="comment-form-cookies-consent">
                          <input
                            id="wp-comment-cookies-consent"
                            name="wp-comment-cookies-consent"
                            type="checkbox"
                            value="yes"
                          />
                          <label for="wp-comment-cookies-consent">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <Link
                          className="rbt-btn btn-gradient icon-hover radius-round btn-md"
                          to="#"
                        >
                          <span className="btn-text">Post Comment</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="rbt-comment-area">
                <h4 className="title">2 comments</h4>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="comment-body">
                      <div className="single-comment">
                        <div className="comment-img">
                          <img
                            src="assets/images/testimonial/testimonial-1.jpg"
                            alt="Author Images"
                          />
                        </div>
                        <div className="comment-inner">
                          <h6 className="commenter">
                            <Link to="#">Cameron Williamson</Link>
                          </h6>
                          <div className="comment-meta">
                            <div className="time-spent">
                              Nov 23, 2018 at 12:23 pm
                            </div>
                            <div className="reply-edit">
                              <div className="reply">
                                <Link className="comment-reply-link" to="#">
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="comment-text">
                            <p className="b2">
                              Duis hendrerit velit scelerisque felis tempus, id
                              porta libero venenatis. Nulla facilisi. Phasellus
                              viverra magna commodo dui lacinia tempus. Donec
                              malesuada nunc non dui posuere, fringilla
                              vestibulum urna mollis. Integer condimentum ac
                              sapien quis maximus.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <img
                                src="assets/images/testimonial/testimonial-2.jpg"
                                alt="Author Images"
                              />
                            </div>
                            <div className="comment-inner">
                              <h6 className="commenter">
                                <Link to="#">John Due</Link>
                              </h6>
                              <div className="comment-meta">
                                <div className="time-spent">
                                  Nov 23, 2018 at 12:23 pm
                                </div>
                                <div className="reply-edit">
                                  <div className="reply">
                                    <Link className="comment-reply-link" to="#">
                                      Reply
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-text">
                                <p className="b2">
                                  Pellentesque habitant morbi tristique senectus
                                  et netus et malesuada fames ac turpis egestas.
                                  Suspendisse lobortis cursus lacinia.
                                  Vestibulum vitae leo id diam pellentesque
                                  ornare.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="comment">
                    <div className="comment-body">
                      <div className="single-comment">
                        <div className="comment-img">
                          <img
                            src="assets/images/testimonial/testimonial-3.jpg"
                            alt="Author Images"
                          />
                        </div>
                        <div className="comment-inner">
                          <h6 className="commenter">
                            <Link to="#">Rafin Shuvo</Link>
                          </h6>
                          <div className="comment-meta">
                            <div className="time-spent">
                              Nov 23, 2018 at 12:23 pm
                            </div>
                            <div className="reply-edit">
                              <div className="reply">
                                <Link className="comment-reply-link" to="#">
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="comment-text">
                            <p className="b2">
                              Duis hendrerit velit scelerisque felis tempus, id
                              porta libero venenatis. Nulla facilisi. Phasellus
                              viverra magna commodo dui lacinia tempus. Donec
                              malesuada nunc non dui posuere, fringilla
                              vestibulum urna mollis. Integer condimentum ac
                              sapien quis maximus.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="related-post pt--60">
              <div className="section-title text-start mb--40">
                <span className="subtitle bg-primary-opacity">
                  Related Post
                </span>
                <h4 className="title">Similar Post</h4>
              </div>
              <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                <div className="rbt-card-img">
                  <Link to="blog-details.html">
                    <img
                      src="assets/images/blog/blog-card-02.jpg"
                      alt="Card image"
                    />{" "}
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <Link to="blog-details.html">
                      Why Is Education So Famous?
                    </Link>
                  </h5>
                  <div className="rbt-card-bottom">
                    <Link className="transparent-button" to="blog-details.html">
                      Read Article
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                            <path
                              strokeLinecap="square"
                              d="M.663 5.572h14.594"
                            />
                          </g>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                <div className="rbt-card-img">
                  <Link to="blog-details.html">
                    <img
                      src="assets/images/blog/blog-card-03.jpg"
                      alt="Card image"
                    />{" "}
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <Link to="blog-details.html">
                      Difficult Things About Education.
                    </Link>
                  </h5>
                  <div className="rbt-card-bottom">
                    <Link className="transparent-button" to="blog-details.html">
                      Read Article
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                            <path
                              strokeLinecap="square"
                              d="M.663 5.572h14.594"
                            />
                          </g>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                <div className="rbt-card-img">
                  <Link to="blog-details.html">
                    <img
                      src="assets/images/blog/blog-card-04.jpg"
                      alt="Card image"
                    />{" "}
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <Link to="blog-details.html">
                      Education Is So Famous, But Why?
                    </Link>
                  </h5>
                  <div className="rbt-card-bottom">
                    <Link className="transparent-button" to="blog-details.html">
                      Read Article
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                            <path
                              strokeLinecap="square"
                              d="M.663 5.572h14.594"
                            />
                          </g>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
