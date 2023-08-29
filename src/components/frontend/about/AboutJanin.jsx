import React, { Component } from "react";
import JanineImg from "../../../assets/image/Janine-nobg.webp"
import SignatureImg from "../../../assets/images/shape/signature.png";

class AboutJanin extends Component {
  render() {
    return (
      <div>
        <div className="about-style-2 rbt-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h4 className="title text-center">
                  Meet<span className="theme-gradient"> Janine</span>
                </h4>
                <div className="row row--0 about-wrapper align-items-center theme-shape">
                  <div className="col-lg-6">
                    <div className="thumbnail">
                      <img
                        src={JanineImg}
                        alt="About Images"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mt_md--30 mt_sm--30">
                    <div className="content">
                      <div className="inner">
                        <h4 className="title">
                          Hi, I’m
                          <span className="theme-gradient"> Janine.</span>
                        </h4>
                        <p>
                          Welcome to my little corner of the world. I teach
                          business owners and entrepreneurs the secret strategy
                          to upleveling their expert status through real,
                          story-based written content that wins them the “like,
                          know, and trust” factor and increases their influence
                          and income.
                        </p>
                        <div className="signature-image mt--20">
                          <img
                            src={SignatureImg}
                            alt="Signature Images"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="top-circle-shape position-bottom-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutJanin;
