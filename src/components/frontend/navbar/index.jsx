import React from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";  
import Img from "../../../assets/images/icons/hand-emojji.svg";
import Img1 from "../../../assets/images/icons/en-us.png";
import Img2 from "../../../assets/images/icons/fr.png";
import Img3 from "../../../assets/images/icons/de.png";
import Img4 from "../../../assets/images/team/avatar.jpg";
import Img5 from "../../../assets/images/team/avatar.jpg";
import Img6 from "../../../assets/images/icons/hand-emojji.svg";
import Img7 from "../../../assets/images/icons/hand-emojji.svg";
import Img8 from "../../../assets/images/icons/hand-emojji.svg";
import Img9 from "../../../assets/images/icons/hand-emojji.svg";


const Navbar = () => {
  return (
    <>
      <header className="rbt-header rbt-header-10">
        <div className="rbt-sticky-placeholder" />
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

                    <div className="rbt-separator d-none d-xl-block" />

                    <div className="header-info">
                      <ul className="rbt-dropdown-menu switcher-language">
                        <li className="has-child-menu">
                          <Link to="#">
                            <img
                              className="left-image"
                              src={Img1}
                              alt="Language Images"
                            />
                            <span className="menu-item">English</span>
                            <i className="right-icon feather-chevron-down" />
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="#">
                                <img
                                  className="left-image"
                                  src={Img2}
                                  alt="Language Images"
                                />
                                <span className="menu-item">Français</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <img
                                  className="left-image"
                                  src={Img3}
                                  alt="Language Images"
                                />
                                <span className="menu-item">Deutsch</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="header-info">
                      <ul className="rbt-dropdown-menu currency-menu">
                        <li className="has-child-menu">
                          <Link to="#">
                            <span className="menu-item">USD</span>
                            <i className="right-icon feather-chevron-down"></i>
                          </Link>
                          <ul className="sub-menu hover-reverse">
                            <li>
                              <Link to="#">
                                <span className="menu-item">EUR</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span className="menu-item">GBP</span>
                              </Link>
                            </li>
                          </ul>
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
        <div className="rbt-header-wrapper header-space-betwween header-sticky">
          <div className="container-fluid">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <Link to="index.html">
                      <img src={Logo} alt="Education Logo Images" />
                    </Link>
                  </div>
                </div>
                <div className="header-info">
                  <div className="rbt-category-menu-wrapper">
                    <div className="rbt-category-btn rbt-side-offcanvas-activation">
                      <div className="rbt-offcanvas-trigger md-size icon">
                        <span className="d-none d-xl-block">
                          <i className="feather-grid" />
                        </span>
                        <i
                          title="Category"
                          className="feather-grid d-block d-xl-none"
                        />
                      </div>
                      <span className="category-text d-none d-xl-block">
                        Services
                      </span>
                    </div>

                    <div className="category-dropdown-menu d-none d-xl-block">
                      <div className="category-menu-item">
                        <div className="rbt-vertical-nav">
                          <ul className="rbt-vertical-nav-list-wrapper vertical-nav-menu">
                            <li className="vertical-nav-item ">
                              <Link to="#tab1">Course School</Link>
                            </li>
                            <li className="vertical-nav-item">
                              <Link to="#tab2">Online School</Link>
                            </li>
                            <li className="vertical-nav-item">
                              <Link to="#tab3">kindergarten</Link>
                            </li>
                            <li className="vertical-nav-item">
                              <Link to="#tab4">Classic LMS</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="with-megamenu has-menu-child-item position-static">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-janine">About Janine</Link>
                    </li>
                    <li className="with-megamenu has-menu-child-item">
                      <Link to="/courses">
                        Courses <i className="feather-chevron-down" />
                      </Link>
                      {/*// <!-- Start Mega Menu  -->*/}
                      <div className="rbt-megamenu grid-item-2">
                        <div className="wrapper">
                          <div className="row row--15">
                            <div className="col-lg-12 col-xl-6 col-xxl-12 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <Link to="/course-details">title</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*// <!-- End Mega Menu  -->*/}
                    </li>
                    <li>
                      <Link to="/memberships">Membership</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-of-condition">Terms of Use</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                {/*// <!-- Navbar Icons -->*/}
                <ul className="quick-access">
                  <li className="access-icon">
                    <Link
                      className="search-trigger-active rbt-round-btn"
                      to="#"
                    >
                      <i className="feather-search" />
                    </Link>
                  </li>
                  <li className="access-icon rbt-mini-cart">
                    <Link
                      id="cardCount"
                      className="rbt-cart-sidenav-activation rbt-round-btn"
                      to="#"
                    >
                      <i className="feather-shopping-cart" />
                      <span className="rbt-cart-count">5</span>
                    </Link>
                  </li>
                  <li className="account-access rbt-user-wrapper d-none d-xl-block">
                    <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                      <Link
                        to="/"
                        className="text-sm text-gray-700 dark:text-gray-500 underline"
                      >
                        <i className="feather-user" /> name
                      </Link>
                      <Link
                        to="/login"
                        className="text-sm text-gray-700 dark:text-gray-500 underline"
                      >
                        Log in
                      </Link>
                      <Link
                        to="/register"
                        className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                      >
                        Register
                      </Link>
                    </div>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img
                              src={Img4}
                              alt="User Images"
                            />
                          </div>
                          <div className="admin-info">
                            <span className="name">Nipa Bali</span>
                            <Link
                              className="rbt-btn-link color-primary"
                              to="/profile"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
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
                            <Link className="dropdown-item" to="/logout">
                              <i className="feather-log-out" />
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                    <Link className="rbt-round-btn" to="#">
                      <i className="feather-user" />
                    </Link>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img
                              src={Img5}
                              alt="User Images"
                            />
                          </div>
                          <div className="admin-info">
                            <span className="name">Nipa Bali</span>
                            <Link
                              className="rbt-btn-link color-primary"
                              to="/profile"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="/profile">
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
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="/settings">
                              <i className="feather-settings" />
                              <span>Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/logout">
                              <i className="feather-log-out" />
                              <span>Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="rbt-btn-wrapper d-none d-xl-block">
                  <Link
                    className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
                    to="#"
                  >
                    <span data-text="Enroll Now">Enroll Now</span>
                  </Link>
                </div>
                {/*// <!-- Start Mobile-Menu-Bar -->*/}
                <div className="mobile-menu-bar d-block d-xl-none">
                  <div className="hamberger">
                    <button className="hamberger-button rbt-round-btn">
                      <i className="feather-menu" />
                    </button>
                  </div>
                </div>
                {/*// <!-- Start Mobile-Menu-Bar -->*/}
              </div>
            </div>
          </div>
          {/*// <!-- Start Search Dropdown  -->*/}
          <div className="rbt-search-dropdown">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                    <div className="submit-btn">
                      <Link className="rbt-btn btn-gradient btn-md" to="#">
                        Search
                      </Link>
                    </div>
                  </form>
                </div>
              </div>

              <div className="rbt-separator-mid">
                <hr className="rbt-separator m-0" />
              </div>
            </div>
          </div>
          {/*// <!-- End Search Dropdown  -->*/}
        </div>
        {/*// <!-- Start Side Vav -->*/}
        <div className="rbt-offcanvas-side-menu rbt-category-sidemenu">
          <div className="inner-wrapper">
            <div className="inner-top">
              <div className="inner-title">
                <h4 className="title">Course Category</h4>
              </div>
              <div className="rbt-btn-close">
                <button className="rbt-close-offcanvas rbt-round-btn">
                  <i className="feather-x" />
                </button>
              </div>
            </div>
            <nav className="side-nav w-100">
              <ul className="rbt-vertical-nav-list-wrapper vertical-nav-menu">
                <li className="vertical-nav-item">
                  <Link to="#">Course School</Link>
                  <div className="vartical-nav-content-menu-wrapper">
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <Link to="#">Web Design</Link>
                        </li>
                        <li>
                          <Link to="#">Art</Link>
                        </li>
                        <li>
                          <Link to="#">Figma</Link>
                        </li>
                        <li>
                          <Link to="#">Adobe</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <Link to="#">Photo</Link>
                        </li>
                        <li>
                          <Link to="#">English</Link>
                        </li>
                        <li>
                          <Link to="#">Math</Link>
                        </li>
                        <li>
                          <Link to="#">Read</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="vertical-nav-item">
                  <Link to="#">Online School</Link>
                  <div className="vartical-nav-content-menu-wrapper">
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <Link to="#">Photo</Link>
                        </li>
                        <li>
                          <Link to="#">English</Link>
                        </li>
                        <li>
                          <Link to="#">Math</Link>
                        </li>
                        <li>
                          <Link to="#">Read</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <Link to="#">Web Design</Link>
                        </li>
                        <li>
                          <Link to="#">Art</Link>
                        </li>
                        <li>
                          <Link to="#">Figma</Link>
                        </li>
                        <li>
                          <Link to="#">Adobe</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="vertical-nav-item">
                  <Link to="#">kindergarten</Link>
                  <div className="vartical-nav-content-menu-wrapper">
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <Link to="#">Photo</Link>
                        </li>
                        <li>
                          <Link to="#">English</Link>
                        </li>
                        <li>
                          <Link to="#">Math</Link>
                        </li>
                        <li>
                          <Link to="#">Read</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="vertical-nav-item">
                  <Link to="#">Classic LMS</Link>
                  <div className="vartical-nav-content-menu-wrapper">
                    <div className="vartical-nav-content-menu">
                      <h3 className="rbt-short-title">Course Title</h3>
                      <ul className="rbt-vertical-nav-list-wrapper">
                        <li>
                          <Link to="#">Web Design</Link>
                        </li>
                        <li>
                          <Link to="#">Art</Link>
                        </li>
                        <li>
                          <Link to="#">Figma</Link>
                        </li>
                        <li>
                          <Link to="#">Adobe</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="read-more-btn">
                <div className="rbt-btn-wrapper mt--20">
                  <Link
                    className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                    to="#"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </nav>
            <div className="rbt-offcanvas-footer"></div>
          </div>
        </div>
        {/*// <!-- End Side Vav -->*/}
        <Link className="rbt-close_side_menu" to="javascript:void(0);" />
      </header>
    </>
  );
};
export default Navbar;
