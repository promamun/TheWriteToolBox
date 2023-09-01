import React from "react";
import { FcCheckmark } from "react-icons/fc";

function ThankYou() {
  return (
    <>
      <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
        <div className="container">
          <div className="row row--15 align-items-center">
            <div className="col-lg-12">
              <div className="inner text-center">
                <div className="section-title text-center">
                  <h1 className="title color-white">THANK YOU!</h1>
                  <h1>
                    <FcCheckmark />
                  </h1>
                  <h4 className="description color-white mt--20">
                    Thanks a bunch for filling that out. It means a lot to us,
                    just like you do! We really appreciate you giving us a
                    moment of your time today. Thanks for being you.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
