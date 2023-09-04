import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../../helper/axios";
import message from "../../../helper/message";
import config from "../../../helper/config";
import { getCartDetails } from "../../../app/action/CartAction";
import { connect } from "react-redux";
import _ from "lodash";
import CourseSliderCard from "../slider/CourseSliderCard";

const mapStateToProps = (state) => {
  let { cart_details } = state;
  return { cart_details };
};

const mapActionToProps = (dispatch) => {
  return {
    getCartDetails: () => dispatch(getCartDetails()),
  };
};
class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      courses: [],
    };
  }
  componentDidMount = () => {
    this.setState({ isLoading: true });

    axios
      .get("/all-courses")
      .then((res) => {
        this.setState({ isLoading: true });

        if (res.data.success) {
          let { courses } = res.data;
          this.setState({ courses });
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
  };

  addToCart = (course_id) => {
    this.setState({ isLoading: true });

    let formData = {
      course_id,
    };

    axios
      .post("/add-to-cart", formData, config)
      .then((res) => {
        this.setState({ isLoading: false });
        if (res.data.success) {
          message.success(res.data.message);
          this.props.getCartDetails();
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
  };

  isPresent = (id, data = []) => {
    return _.findIndex(data, (o) => {
      return o.course_id._id === id;
    }) === -1
      ? false
      : true;
  };

  render() {
    let { courses } = this.state;
    let { cart_details, loading } = this.props.cart_details;

    let allCarts = [];
    if (!loading && cart_details) {
      allCarts = cart_details.carts;
    }
    //this is for hide or display content
    const displayNone = {
      display:this.props.display ,
    }

    return (
      <div>
        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2 className="title">{this.props.title}</h2>
                </div>
                <div className='text-center mt-5' style={displayNone}>
                  <p>Choose the course that fits where you are at
                    <br/>
                    <strong>OR</strong>
                    <br/>
                    Choose all 4 courses to add a full bundle to your writer’s
                    toolbox.
                    <br/>
                    The Writer’s Story Path
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-5">
              {courses.map((item, key) => {
                return (
                    <CourseSliderCard course={item} clasName='col-lg-3 col-md-6 col-12' index={key}/>
                );
              })}
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="load-more-btn mt--60 text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                    to="/courses"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">{this.props.buttonTitle} (4)</span>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Course);
