import React from 'react'
import {Container,Row,Col} from "react-bootstrap";

export default function WriteStoryNotForYou() {
  return (
    <>
        <div className="rbt-course-details-area ptb--60">
            <Container >
                <Row className="g-5">
                    <Col lg='1'/>
                    <Col lg='10'>
                        <div className="course-details-content">
                            <div className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
                                <Row className="g-5">
                                     {/*Start Feture Box  */}
                                    <div className="section-title text-center">
                                        <h4 className="rbt-title-style-3 mb--20">Is The Writer’s Story Path Right for Me?</h4>
                                    </div>
                                    <Col lg='6'>
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3 mb--20">The Writer’s Story Path is NOT for you if:</h4>
                                        </div>
                                        <ul className="rbt-list-style-1">
                                            <li><i className="feather-x color-danger"/>You deeply believe writing is hard and you are not open-minded to new ideas and tools that can get you writing effortlessly.
                                            </li>
                                            <li><i className="feather-x color-danger"/>You’re not passionate about your topic, story, or message.
                                            </li>
                                            <li><i className="feather-x color-danger"/>You prefer one-on-one coaching over a “Done With You” process.
                                            </li>
                                            <li><i className="feather-x color-danger"/>You let the unknown keep you stuck rather than diving in, following the plan, and striving for the goal line.
                                            </li>
                                        </ul>
                                    </Col>
                                     {/*End Feture Box  */}

                                    {/*Start Feture Box */}
                                    <Col lg='6'>
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3 mb--20">The Writer’s Story Path IS for you if:</h4>
                                        </div>
                                        <ul className="rbt-list-style-1">
                                            <li><i className="feather-check"/>You know without a doubt you have a book in you that people need to read but feel overwhelmed and struggle with procrastination and need help getting your book out of your head.
                                            </li>
                                            <li><i className="feather-check"/>You believe that writing and publishing a book is a great way to show your expertise and be seen as an expert in your industry.
                                            </li>
                                            <li><i className="feather-check"/>You love writing and want to use it to share your experiences, build community, and make a profit.
                                            </li>
                                            <li><i className="feather-check"/>You are a self-starter and finisher.  You know you’ve got this and you just need to learn a few things you don’t have experience with in order to cross the finish line.
                                            </li>
                                        </ul>
                                    </Col>
                                     {/*End Feture Box  */}
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg='1'/>
                </Row>
            </Container>
        </div>
    </>
  )
}