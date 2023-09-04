import React from "react";
import CustomInput from "../inputComponent/CustomInput";
import TextArea from "../inputComponent/TextArea";
import Button from "../inputComponent/Button";
import Img from "../../../assets/images/about/contact.jpg";

function Faqs() {
  return (
    <>
      <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="rbt-accordion-style accordion">
                <div className="section-title text-start mb--60">
                  <h4 className="title">Purchases & Refunds</h4>
                </div>
                <div className="rbt-accordion-style rbt-accordion-04 accordion">
                  <div className="accordion" id="accordionExamplec3">
                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="headingThree1"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree1"
                          aria-expanded="true"
                          aria-controls="collapseThree1"
                        >
                          What is Histudy ? How does it work?
                        </button>
                      </h2>
                      <div
                        id="collapseThree1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree1"
                        data-bs-parent="#accordionExamplec3"
                      >
                        <div className="accordion-body card-body">
                          You can run Histudy easily. Any School, University,
                          College can be use this histudy education template for
                          their educational purpose. A university can be run
                          their online leaning management system by histudy
                          education template.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="headingThree2"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree2"
                          aria-expanded="false"
                          aria-controls="collapseThree2"
                        >
                          How can I get the customer support?
                        </button>
                      </h2>
                      <div
                        id="collapseThree2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree2"
                        data-bs-parent="#accordionExamplec3"
                      >
                        <div className="accordion-body card-body">
                          After purchasing the product need you any support you
                          can be share with us with sending mail to
                          rainbowit10@gmail.com.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="headingThree3"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree3"
                          aria-expanded="false"
                          aria-controls="collapseThree3"
                        >
                          Can I get update regularly and For how long do I get
                          updates?
                        </button>
                      </h2>
                      <div
                        id="collapseThree3"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree3"
                        data-bs-parent="#accordionExamplec3"
                      >
                        <div className="accordion-body card-body">
                          Yes, We will get update the Histudy. And you can get
                          it any time. Next time we will comes with more
                          feature. You can be get update for unlimited times.
                          Our dedicated team works for update.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="headingThree4"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree4"
                          aria-expanded="false"
                          aria-controls="collapseThree4"
                        >
                          15 Things To Know About Education?
                        </button>
                      </h2>
                      <div
                        id="collapseThree4"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree4"
                        data-bs-parent="#accordionExamplec3"
                      >
                        <div className="accordion-body card-body">
                          If you're looking for random paragraphs, you've come
                          to the right place. When a random word or a random
                          sentence isn't quite enough, the next logical step is
                          to find a random paragraph.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rbt-accordion-style accordion">
                <div className="section-title text-start mb--60">
                  <h4 className="title">Making Courses</h4>
                </div>
                <div className="rbt-accordion-style rbt-accordion-04 accordion">
                  <div className="accordion" id="faqs-accordionExamplec3">
                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="faqs-headingThree1"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqs-collapseThree1"
                          aria-expanded="true"
                          aria-controls="faqs-collapseThree1"
                        >
                          What is Histudy ? How does it work?
                        </button>
                      </h2>

                      <div
                        id="faqs-collapseThree1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqs-headingThree1"
                        data-bs-parent="#faqs-accordionExamplec3"
                      >
                        <div className="accordion-body card-body">
                          You can run Histudy easily. Any School, University,
                          College can be use this histudy education template for
                          their educational purpose. A university can be run
                          their online leaning management system by histudy
                          education template.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="faqs-headingThree2"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqs-collapseThree2"
                          aria-expanded="false"
                          aria-controls="faqs-collapseThree2"
                        >
                          7 Facts About Education That Will Blow
                        </button>
                      </h2>
                      <div
                        id="faqs-collapseThree2"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqs-headingThree2"
                        data-bs-parent="#faqs-accordionExamplec3"
                      >
                        <div className="accordion-body card-body">
                          After purchasing the product need you any support you
                          can be share with us with sending mail to
                          rainbowit10@gmail.com.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="faqs-headingThree3"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqs-collapseThree3"
                          aria-expanded="false"
                          aria-controls="faqs-collapseThree3"
                        >
                          10 Brilliant Ways To Advertise Education
                        </button>
                      </h2>
                      <div
                        id="faqs-collapseThree3"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqs-headingThree3"
                        data-bs-parent="#faqs-accordionExamplec3"
                      >
                        <div className="accordion-body card-body">
                          Yes, We will get update the Histudy. And you can get
                          it any time. Next time we will comes with more
                          feature. You can be get update for unlimited times.
                          Our dedicated team works for update.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="faqs-headingThree4"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqs-collapseThree4"
                          aria-expanded="false"
                          aria-controls="faqs-collapseThree4"
                        >
                          15 Common Myths About Education
                        </button>
                      </h2>
                      <div
                        id="faqs-collapseThree4"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqs-headingThree4"
                        data-bs-parent="#faqs-accordionExamplec3"
                      >
                        <div className="accordion-body card-body">
                          If you're looking for random paragraphs, you've come
                          to the right place. When a random word or a random
                          sentence isn't quite enough, the next logical step is
                          to find a random paragraph.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-contact-address rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="thumbnail">
                <img
                  className="w-100 radius-6"
                  src={Img}
                  alt="Contact Images"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                </div>
                <h3 className="title">
                  Get a Free Course You Can Contact With Me
                </h3>
                <form id="contact-form" className="max-width-auto">
                  <div className="form-group">
                    <CustomInput placeholder="Name" type="text" />
                  </div>
                  <div className="form-group">
                    <CustomInput placeholder="Email" type="email" />
                  </div>
                  <div className="form-group">
                    <CustomInput placeholder="Phone" type="text" />
                  </div>
                  <div className="form-group">
                    <TextArea Label="Message" />
                  </div>
                  <div className="form-submit-group">
                    <Button name="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
