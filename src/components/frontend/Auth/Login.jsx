import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import validation from "../../../helper/MyValidation";
import LoadingOverlay from "react-loading-overlay";
import axios from "../../../helper/axios";
import message from "../../../helper/message";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      data: {
        email: "",
        password: "",
      },

      errors: {},
    };
  }

  handleChange = (e) => {
    e.persist();

    let { errors, data } = this.state;
    let { name, value } = e.target;

    data[name] = value;

    this.setState({
      data,
    });

    const valid_obj = {
      value,
      rules: e.target.getAttribute("validaterule"),
      message: e.target.getAttribute("validatemsg"),
    };

    validation(valid_obj).then((err) => {
      errors[name] = err;
      this.setState({ errors });
    });

    if (name === "password") {
      if (data.c_password && data.c_password !== value) {
        errors.c_password = "Confirm Password should be same as password";
      } else {
        errors.c_password = "";
      }
      this.setState({ errors });
    }
  };

  isValidForm = (errors) => {
    let isValid = true;
    for (const [, value] of Object.entries(errors)) {
      if (value.length > 0) {
        isValid = false;
      }
    }
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let { data, errors } = this.state;

    if (this.isValidForm(errors)) {
      this.setState({ isLoading: true });
      axios
        .post("/student-signin", data)
        .then((res) => {
          this.setState({ isLoading: false });

          let { success, validation, error } = res.data;

          if (validation) {
            message.error(error[0].msg);
          }

          if (success) {
            message.success(res.data.message);

            let { token, userDetails } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("userDetails", JSON.stringify(userDetails));

            // GOTO PROFILE PAGE

            window.location.pathname = "dashboard";
          } else {
            message.error(res.data.message);
          }
        })
        .catch((err) => {
          this.setState({ isLoading: false });
          message.error("Something Went Wrong!!!");
          console.error(err);
        });
    }
  };

  render() {
    let { errors, data } = this.state;
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div className="rbt-elements-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row gy-5 row--30">
              <div className="col-lg-3" />
              <div className="col-lg-6">
                <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                  <h3 className="title">Login</h3>
                  <Form onSubmit={this.handleSubmit} className="max-width-auto">
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        required
                        validaterule={["required", "isEmail"]}
                        validatemsg={[
                          "Email address is required",
                          "Enter a valid email address",
                        ]}
                        onChange={this.handleChange}
                        value={data.email}
                      />
                      <label>Email * </label>
                      <p className="invalid_input">{errors.email}</p>
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        type="password"
                        className="password"
                        required
                        validaterule={["required", "password"]}
                        validatemsg={["Password is required"]}
                        onChange={this.handleChange}
                        value={data.password}
                      />
                      <label>Password *</label>

                      <span className="focus-border" />
                      <p className="invalid_input">{errors.password}</p>
                    </div>
                    <div className="row mb--30">
                      <div className="col-lg-6">
                        <div className="rbt-lost-password text-end">
                          <Link className="rbt-btn-link" to="/forgot-password">
                            Forgot Your Password
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="form-submit-group">
                      <button
                        type="submit"
                        className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Log In</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </span>
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="col-lg-3" />
            </div>
          </div>
        </div>
      </LoadingOverlay>
    );
  }
}
