import React, { Component } from "react";
import Brodcamp from "../brodcamp";
import { Helmet } from "react-helmet";

class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        <Helmet title={"Privacy Policy"} />
        <div className="rbt-overlay-page-wrapper">
          <Brodcamp
            bgImg={"assets/images/bg/bg-image-10.jpg"}
            Title={"Privacy Policy"}
            SubTitle={"Janine Course Privacy Policy Here."}
          />
          <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
            <div className="rbt-article-content-wrapper">
              <div className="content">
                Welcome to Janine Privacy Policy If you have any questions or
                concerns about our privacy policy, please contact:
                Janine@TheWriteToolbox.com
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
