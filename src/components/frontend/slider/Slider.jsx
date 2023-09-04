import React, {Component} from 'react';
import { Link } from "react-router-dom";
import SliderImg from "../../../assets/image/the-write-toolbox.png";
import SliderImg1 from "../../../assets/images/shape/shape-01.png";
import SliderImg2 from "../../../assets/images/shape/shape-02.png";
import SwiperSlider from "./SwiperSlider";
import WordAnimation from "./WordAnimation";
import axios from "../../../helper/axios";
import message from "../../../helper/message";
class Slider extends Component {
  render() {
    return (
      <div>
        <div className="rbt-banner-area rbt-banner-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pb--120 pt--70">
                <div className="content">
                  <div className="inner">
                    <div className="rbt-new-badge rbt-new-badge-one">
                      <span className="rbt-new-badge-icon">🏆</span> The Leader
                      in Online Learning
                    </div>
                    <WordAnimation/>
                    <p className="description">
                      Increasing Confidence, Clarity & Publicity for Self-Made
                      Industry Leaders and Influencers Who Want to Uplevel Their
                      Expert Status Through Real,
                      <strong>Story-Based Written Content.</strong>
                    </p>
                    <div className="slider-btn">
                      <Link
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        to="/courses"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">View Course</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="shape-wrapper" id="scene">
                    <img src={SliderImg} alt="Hero Image" />
                    <div className="hero-bg-shape-1 layer" data-depth="0.4">
                      <img src={SliderImg1} alt="Hero Image Background Shape" />
                    </div>
                    <div className="hero-bg-shape-2 layer" data-depth="0.4">
                      <img src={SliderImg2} alt="Hero Image Background Shape" />
                    </div>
                  </div>
                  <SwiperSlider/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
