import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../inputComponent/CustomInput";
import Button from "../inputComponent/Button";
function Login() {
  return (
    <>
      <div className="rbt-elements-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row gy-5 row--30">
            <div className="col-lg-3" />
            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <h3 className="title">Login</h3>
                <form className="max-width-auto" method="POST" action="">
                  <div className="form-group">
                    <CustomInput type="email" Label="Email *" />
                  </div>
                  <div className="form-group">
                    <CustomInput type="password" Label="Password *" />
                  </div>

                  <div className="row mb--30">
                    <div className="col-lg-6">
                      <div className="rbt-checkbox">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="rbt-lost-password text-end">
                        <Link className="rbt-btn-link" to="">
                          Forgot Your Password
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="form-submit-group">
                    <Button name="Login" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
