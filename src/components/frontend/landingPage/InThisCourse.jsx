import React from "react";
import {Col, Row} from "react-bootstrap";
import {FiCheck} from "react-icons/fi";

export default function InThisCourse({title,course, point,point1,point2,point3,point4}){
    const IconColor = {
        color:'green',
        fontSize:'xx-large'
    }
    return (
        <>
            <Row className="g-5">
                {/*Start Feture Box  */}
                <div className="section-title text-center">
                    <h4 className="rbt-title-style-3 mb--20">{title}</h4>
                    <p>{course}</p>
                </div>
                {/*Start Feture Box */}
                <Col lg='12'>
                    <ul className="rbt-list-style-1">
                        <li><FiCheck style={IconColor} /> {point}</li>
                        <li><FiCheck style={IconColor} /> {point1}</li>
                        <li><FiCheck style={IconColor} /> {point2}</li>
                        <li><FiCheck style={IconColor} /> {point3}</li>
                        <li><FiCheck style={IconColor} /> {point4}</li>
                    </ul>
                </Col>
                {/*End Feture Box  */}
            </Row>
        </>
    )
}