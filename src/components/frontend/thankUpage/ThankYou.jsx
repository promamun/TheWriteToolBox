import React from "react";
import { FcCheckmark } from "react-icons/fc";

function ThankYou() {
  return (
    <>
      <div class="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
        <div class="container">
          <div class="row row--15 align-items-center">
            <div class="col-lg-12">
              <div class="inner text-center">
                <div class="section-title text-center">
                  <h1 class="title color-white">THANK YOU!</h1>
                  <h1>
                    <FcCheckmark />
                  </h1>
                  <h4 class="description color-white mt--20">
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
