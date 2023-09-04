import React, {useState} from "react";
import {Link} from "react-router-dom";
import {BUCKET_DOMAIN} from "../../../helper/helper";
import _ from "lodash";
import axios from "../../../helper/axios";
import config from "../../../helper/config";
import message from "../../../helper/message";
import { getCartDetails } from "../../../app/action/CartAction";
import {useDispatch, useSelector} from "react-redux";
export default function CourseSliderCard({ course,clasName}){
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const cartDetails = useSelector((state) => state.cart_details);

    const addToCart = (courseId) => {
        setIsLoading(true);

        const formData = {
            course_id: courseId,
        };

        axios
            .post("/add-to-cart", formData, config)
            .then((res) => {
                setIsLoading(false);
                if (res.data.success) {
                    message.success(res.data.message);
                    dispatch(getCartDetails());
                } else {
                    message.error(res.data.message);
                }
            })
            .catch((err) => {
                setIsLoading(false);
                message.error("Something Went Wrong!!!");
                console.error(err);
            });
    };

    const isPresent = (id, data = []) => {
        return _.findIndex(data, (o) => o.course_id._id === id) !== -1;
    };

    const allCarts = !cartDetails.loading && cartDetails.cart_details ? cartDetails.cart_details.carts : [];
    return(
        <>
            <div className={clasName}>
                <div className="rbt-card variation-01 rbt-hover">
                    <div className="rbt-card-img">
                        <Link to={`/course-details/${course._id}`}>
                            <img
                                src={BUCKET_DOMAIN + course.thumbnail}
                                alt={course.title}
                            />
                            {/*<div className="rbt-badge-3-custom bg-white">*/}
                            {/*    <span>-50%</span>*/}
                            {/*    <span>Off</span>*/}
                            {/*</div>*/}
                        </Link>
                    </div>
                    <div className="rbt-card-body">
                        <ul className="rbt-meta">
                            <li>
                                <i className="feather-book" />
                                12 Lessons
                            </li>
                            <li>
                                <i className="feather-users" />
                                50 Students
                            </li>
                        </ul>
                        <h4 className="rbt-card-title">
                            <Link to={`/course-details/${course._id}`}>
                                {course.title}
                            </Link>
                        </h4>
                        <p className="rbt-card-text">description</p>
                        <div className="rbt-review">
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="rating-count">
                                (15 Reviews)
                              </span>
                        </div>
                        <div className="rbt-card-bottom">
                            <div className="rbt-price">
                                <span className="current-price">${course.price}</span>
                                <span className="off-price">$120</span>
                            </div>
                            {isPresent(course._id, allCarts) ? (
                                <Link to="/cart" className="rbt-btn-link left-icon">
                                    Go To Cart
                                </Link>
                            ) : (
                                <Link
                                    to="#"
                                    className="rbt-btn-link left-icon"
                                    onClick={() => addToCart(course._id)}
                                >
                                    <i className="feather-shopping-cart" /> Add To Cart
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}