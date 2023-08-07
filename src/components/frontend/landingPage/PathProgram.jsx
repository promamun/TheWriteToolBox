import React from 'react'
import {Container,Row,Col} from "reactstrap";
import Write from "../../../assets/image/icons/write.png"
import WriteSkilfully from "../../../assets/image/icons/Write_skillfully.png"
import WriteClearly from "../../../assets/image/icons/Write_clarity.png"
import ConnectStories from "../../../assets/image/icons/Connect_stories.png"
import {Link} from "react-router-dom";

export default function PathProgram() {
  return (
    <>
      <div className="rbt-service-area bg-color-white rbt-section-gap">
        <Container>
          <Row className="mb--60">
            <Col lg='12'>
              <div className="section-title text-center">
                <p className="description mt--30">By the end of The <strong> Writer’s Story Path program,</strong> you’ll be able to:</p>
              </div>
            </Col>
          </Row>
           {/*Start Card Area */}
          <Row className="row--15 mt_dec--30">

            {/*Start Service Grid */}
            <Col lg='4' xl='1' xxl='1' md='6' sm='6' className="mt--30">

            </Col>
            {/*End Service Grid */}

            {/*Start Service Grid */}
            <Col lg='4' xl='5' xxl='5' md='6' sm='6' className="mt--30">
              <div className="service-card service-card-6">
                <div className="inner">
                  <div className="icon">
                    <img src={Write} alt="Write"/>
                  </div>
                  <div className="content">
                    <h6 className="title"><Link to="#">Write on any topic you choose</Link></h6>
                    <p className="description">Flesh out and write any non-fiction book topic of your choosing without sitting and staring at a blank screen for hours and hours.</p>
                  </div>
                </div>
              </div>
            </Col>
            {/*End Service Grid */}

            {/*Start Service Grid */}
            <Col lg='4' xl='5' xxl='5' md='6' sm='6' className="mt--30">
              <div className="service-card service-card-6">
                <div className="inner">
                  <div className="icon">
                    <img src={WriteSkilfully} alt="Write Skilfully"/>
                  </div>
                  <div className="content">
                    <h6 className="title"><Link to="#">Write effortlessly and skillfully</Link></h6>
                    <p className="description">With your toolbox filled with a plethora of brainstorming practices, writer guidelines, and online tools, your ideas will pour out in ways you never believed possible.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            {/*End Service Grid */}

            {/*Start Service Grid */}
            <Col lg='4' xl='1' xxl='1' md='6' sm='6' className="mt--30">

            </Col>
            {/*End Service Grid */}

          </Row>
           {/*End Card Area */}
          {/*Start Card Area */}
          <div className="row row--15 mt_dec--30 mt--30">

            {/*Start Service Grid */}
            <Col lg='4' xl='1' xxl='1' md='6' sm='6' className="mt--30">

            </Col>
            {/*End Service Grid */}

            {/*Start Service Grid */}
            <Col lg='4' xl='5' xxl='5' md='6' sm='6' className="mt--30">
              <div className="service-card service-card-6">
                <div className="inner">
                  <div className="icon">
                    <img src={WriteClearly} alt="Write Clearly"/>
                  </div>
                  <div className="content">
                    <h6 className="title"><Link to="#">Write with clarity and conciseness</Link></h6>
                    <p className="description">Armed with our unique writing process, your writing will be clear and straightforward with improved grammar, word choice, and sentence structure.</p>
                  </div>
                </div>
              </div>
            </Col>
            {/*End Service Grid */}

            {/*Start Service Grid */}
            <Col lg='4' xl='5' xxl='5' md='6' sm='6' className="mt--30">
              <div className="service-card service-card-6">
                <div className="inner">
                  <div className="icon">
                    <img src={ConnectStories} alt="Connect Stories"/>
                  </div>
                  <div className="content">
                    <h6 className="title"><Link to="#">Connect through stories and life experiences</Link></h6>
                    <p className="description">Life experiences and stories magnetically connect people together.  No more struggling for fans, followers, or subscribers.  You’ll be uniquely in sync with any tribe you build.</p>
                  </div>
                </div>
              </div>
            </Col>
            {/*End Service Grid */}

            {/*Start Service Grid */}
            <Col lg='4' xl='1' xxl='1' md='6' sm='6' className="mt--30">

            </Col>
            {/*End Service Grid */}

          </div>
          {/*End Card Area */}
        </Container>
      </div>
    </>
  )
}