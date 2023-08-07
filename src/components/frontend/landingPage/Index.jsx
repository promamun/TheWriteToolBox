import React from 'react'
import PublishAuthor from "./PublishAuthor";
import Pen from "./Pen";
import PathProgram from "./PathProgram";
import {Container,Row,Col} from "reactstrap";

export default function Index() {
  return (
    <>
      <PublishAuthor/>
      <PathProgram/>
        <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-2">
            <Container>
                <Row className="row">
                    <Col lg='12'>
                        <div className="rbt-cta-6 text-center">
                            <div className="content">
                                <h1 className="title">Get on the Fast Track to <br/> Completing Your Book</h1>
                                <p>
                                    Regardless of where your thoughts are surrounding the idea of becoming a published author, <br/>I guarantee it’s easier than you fear.
                                </p>
                                <h6>
                                    It’s as simple as taking a trip back to high school.
                                </h6>
                                <p>
                                    I know.  I know.  Nobody wants to go back to high school.  But do not fear!  We’re not going to visit the terrible awkwardness of teen adolescence.  We’re going to go straight to English class and dust off the skills we learned to make writing simple, understandable, and a breeze to get through.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
      <Pen/>
    </>
  )
}