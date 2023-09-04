import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CourseData from './CourseData'
import InThisCourse from "./InThisCourse";

export default function CourseContent(){
    return(
        <>
            {CourseData.map((item) => (
                <div className="rbt-course-details-area ptb--60">
                    <Container >
                        <Row className="g-5">
                            <Col lg='12'>
                                <div className="course-details-content">
                                    <div className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
                                        <InThisCourse
                                            title={item.title}
                                            course={item.course}
                                            point={item.point}
                                            point1={item.point1}
                                            point2={item.point2}
                                            point3={item.point3}
                                            point4={item.point4}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}
        </>
    )
}