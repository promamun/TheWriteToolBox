import {Link} from "react-router-dom";
import Img from "../../../assets/images/icons/hand-emojji.svg";
import React from "react";

function HeaderTop(){
    return(
        <>
            <div className="rbt-header-top rbt-header-top-1 header-space-betwween bg-not-transparent bg-color-darker top-expended-activation">
                <div className="container-fluid">
                    <div className="top-expended-wrapper">
                        <div className="top-expended-inner rbt-header-sec align-items-center ">
                            <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                                <div className="rbt-header-content">
                                    <div className="header-info">
                                        <ul className="rbt-information-list">
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                    100k
                                                    <span className="d-none d-xxl-block">
                                Followers
                              </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-square" />
                                                    500k
                                                    <span className="d-none d-xxl-block">
                                Followers
                              </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="feather-phone" />
                                                    +1-202-555-0174
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="rbt-header-sec-col rbt-header-center">
                                <div className="rbt-header-content justify-content-start justify-content-xl-center">
                                    <div className="header-info">
                                        <div className="rbt-header-top-news">
                                            <div className="inner">
                                                <div className="content">
                              <span className="rbt-badge variation-02 bg-color-primary color-white radius-round">
                                Hot
                              </span>
                                                    <span className="news-text">
                                <img
                                    src={Img}
                                    alt="Hand Emojji Images"
                                />
                                Intro price. Get Histudy for Big Sale -95% off.
                              </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                                <div className="rbt-header-content justify-content-start justify-content-lg-end">
                                    <div className="header-info d-none d-xl-block">
                                        <ul className="social-share-transparent">
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-info">
                            <div className="top-bar-expended d-block d-lg-none">
                                <button className="topbar-expend-button rbt-round-btn">
                                    <i className="feather-plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderTop