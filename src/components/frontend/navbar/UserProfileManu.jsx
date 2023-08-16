import React from "react";
import {Link} from "react-router-dom";
import message from "../../../helper/message";
import axios from "../../../helper/axios";
import config from "../../../helper/config";

export default function UserProfileManu() {
    const logout = () => {
        let load = message.loading("Please wait...");
        axios
            .get("/student-logout", config)
            .then((res) => {
                load();

                localStorage.clear();
                window.location.pathname = "/";
            })
            .catch((err) => {
                load();
                message.error("Something Went Wrong!!!");
                console.error(err);
            });
    };
  return (
    <>
        <ul className="user-list-wrapper">
            <li>
                <Link to="/dashboard">
                    <i className="feather-home" />
                    <span>My Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/enrolled-courses">
                    <i className="feather-shopping-bag" />
                    <span>Enrolled Courses</span>
                </Link>
            </li>
            <li>
                <Link to="/wishlist">
                    <i className="feather-heart" />
                    <span>Wishlist</span>
                </Link>
            </li>
            <li>
                <Link to="/reviews">
                    <i className="feather-star" />
                    <span>Reviews</span>
                </Link>
            </li>
            <li>
                <Link to="/order-history">
                    <i className="feather-clock" />
                    <span>Order History</span>
                </Link>
            </li>
        </ul>
        <hr className="mt--10 mb--10" />
        <ul className="user-list-wrapper">
            <li>
                <Link to="/settings">
                    <i className="feather-settings" />
                    <span>Settings</span>
                </Link>
            </li>
            <li>
                <Link
                    className="dropdown-item"
                    to="#"
                    onClick={logout}
                >
                    <i className="feather-log-out" />
                    Logout
                </Link>
            </li>
        </ul>
    </>
  )
}