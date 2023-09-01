import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Brodcamp from "../brodcamp/style2";
import { Link } from "react-router-dom";
import { BUCKET_DOMAIN } from "../../../helper/helper";
import axios from "../../../helper/axios";
import config from "../../../helper/config";
import message from "../../../helper/message";
import { getCartDetails } from "../../../app/action/CartAction";
import LoadingOverlay from "react-loading-overlay";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart_details } = useSelector((state) => {
    return state;
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cartCourses, setCartCourses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    let data = cart_details.cart_details;
    if (data) {
      let { carts } = data;

      let totalPrice = 0;

      let cartCourses = carts.map(({ course_id }) => {
        totalPrice += Number(course_id.price);
        return course_id;
      });

      setTotalPrice(totalPrice);
      setCartCourses(cartCourses);
    }
  }, [cart_details]);

  const removeToCart = (course_id) => {
    setLoading(true);
    axios
      .post("/remove-to-cart", { course_id }, config)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          message.success(res.data.message);
          dispatch(getCartDetails());
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <Brodcamp Title="Your Cart" SubTile="Cart" />
      <div className="rbt-cart-area bg-color-white rbt-section-gap">
        <div className="cart_area">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8 col-8">
                <form action="#">
                  {/*Cart Table */}
                  <div className="cart-table table-responsive mb--60">
                    <table className="table" id="cartReload1">
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Image</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartCourses.map((course, key) => {
                          return (
                            <tr key={key}>
                              <td className="pro-thumbnail">
                                <Link to={`/course-details/${course._id}`}>
                                  <img
                                    src={BUCKET_DOMAIN + course.thumbnail}
                                    alt={course.title}
                                  />
                                </Link>
                              </td>
                              <td className="pro-title">
                                <Link to={`/course-details/${course._id}`}>
                                  {course.title}
                                </Link>
                              </td>
                              <td className="pro-price">
                                <span>${course.price}</span>
                              </td>
                              <td
                                className="pro-remove"
                                onClick={() => {
                                  removeToCart(course._id);
                                }}
                              >
                                <a href="#">
                                  <i className="feather-x" />
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-4">
                <div className="cart-summary">
                  <div className="cart-summary-wrap">
                    <div className="section-title text-start">
                      <h4 className="title mb--30">Cart Summary</h4>
                    </div>
                    <p>
                      Sub Total <span id="subtotal1">${totalPrice}</span>
                    </p>
                  </div>

                  <div className="rbt-button-group float-md-end">
                    <Link
                      className="rbt-btn btn-gradient icon-hover"
                      to="/checkout"
                    >
                      <span className="btn-text">Checkout</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
}
