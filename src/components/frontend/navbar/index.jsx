import React from "react";
import Logo from "../../../assets/Logo.png"

const Navbar = () => {
    return(
        <>
            <header className="rbt-header rbt-header-10">
                <div className="rbt-sticky-placeholder"/>
                <div
                    className="rbt-header-top rbt-header-top-1 header-space-betwween bg-not-transparent bg-color-darker top-expended-activation">
                    <div className="container-fluid">
                        <div className="top-expended-wrapper">
                            <div className="top-expended-inner rbt-header-sec align-items-center ">
                                <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                                    <div className="rbt-header-content">
                                        <div className="header-info">
                                            <ul className="rbt-information-list">
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram"/>100k <span
                                                        className="d-none d-xxl-block">Followers</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-facebook-square"/>500k <span
                                                        className="d-none d-xxl-block">Followers</span></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="feather-phone"/>+1-202-555-0174</a>
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
                                                        <span
                                                            className="rbt-badge variation-02 bg-color-primary color-white radius-round">Hot</span>
                                                        <span className="news-text"><img
                                                            src="assets/images/icons/hand-emojji.svg"
                                                            alt="Hand Emojji Images"/> Intro price. Get Histudy for Big Sale -95% off.</span>
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
                                                    <a href="#"><i className="fab fa-facebook-f"/></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-twitter"/></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-linkedin-in"/></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fab fa-instagram"/></a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="rbt-separator d-none d-xl-block"/>

                                        <div className="header-info">
                                            <ul className="rbt-dropdown-menu switcher-language">
                                                <li className="has-child-menu">
                                                    <a href="#">
                                                        <img className="left-image" src="assets/images/icons/en-us.png"
                                                             alt="Language Images"/>
                                                            <span className="menu-item">English</span>
                                                            <i className="right-icon feather-chevron-down"/>
                                                    </a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="#">
                                                                <img className="left-image"
                                                                     src="assets/images/icons/fr.png"
                                                                     alt="Language Images"/>
                                                                    <span className="menu-item">Français</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="left-image"
                                                                     src="assets/images/icons/de.png"
                                                                     alt="Language Images"/>
                                                                    <span className="menu-item">Deutsch</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="header-info">
                                            <ul className="rbt-dropdown-menu currency-menu">
                                                <li className="has-child-menu">
                                                    <a href="#">
                                                        <span className="menu-item">USD</span>
                                                        <i className="right-icon feather-chevron-down"></i>
                                                    </a>
                                                    <ul className="sub-menu hover-reverse">
                                                        <li>
                                                            <a href="#">
                                                                <span className="menu-item">EUR</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="menu-item">GBP</span>
                                                            </a>
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
                                    <button className="topbar-expend-button rbt-round-btn"><i
                                        className="feather-plus"/></button>
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
                                        <a href="index.html">
                                            <img src={Logo} alt="Education Logo Images"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="header-info">
                                    <div className="rbt-category-menu-wrapper">
                                        <div className="rbt-category-btn rbt-side-offcanvas-activation">
                                            <div className="rbt-offcanvas-trigger md-size icon">
                                                <span className="d-none d-xl-block"><i className="feather-grid"/></span>
                                                <i title="Category" className="feather-grid d-block d-xl-none"/>
                                            </div>
                                            <span className="category-text d-none d-xl-block">Services</span>
                                        </div>

                                        <div className="category-dropdown-menu d-none d-xl-block">
                                            <div className="category-menu-item">
                                                <div className="rbt-vertical-nav">
                                                    <ul className="rbt-vertical-nav-list-wrapper vertical-nav-menu">
                                                        <li className="vertical-nav-item ">
                                                            <a href="#tab1">Course School</a>
                                                        </li>
                                                        <li className="vertical-nav-item">
                                                            <a href="#tab2">Online School</a>
                                                        </li>
                                                        <li className="vertical-nav-item">
                                                            <a href="#tab3">kindergarten</a>
                                                        </li>
                                                        <li className="vertical-nav-item">
                                                            <a href="#tab4">Classic LMS</a>
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
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/about-janine">About Janine</a>
                                        </li>
                                        <li className="with-megamenu has-menu-child-item">
                                            <a href="/courses">Courses <i
                                                className="feather-chevron-down"/></a>
                                            {/*// <!-- Start Mega Menu  -->*/}
                                            <div className="rbt-megamenu grid-item-2">
                                                <div className="wrapper">
                                                    <div className="row row--15">
                                                        <div className="col-lg-12 col-xl-6 col-xxl-12 single-mega-item">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/course-details">title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*// <!-- End Mega Menu  -->*/}
                                        </li>
                                        <li>
                                            <a href="/memberships">Membership</a>
                                        </li>
                                        <li>
                                            <a href="/blogs">Blog</a>
                                        </li>
                                        <li>
                                            <a href="/privacy-policy">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="/terms-of-condition">Terms of Use</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right">
                                {/*// <!-- Navbar Icons -->*/}
                                <ul className="quick-access">
                                    <li className="access-icon">
                                        <a className="search-trigger-active rbt-round-btn" href="#">
                                            <i className="feather-search"/>
                                        </a>
                                    </li>
                                    <li className="access-icon rbt-mini-cart">
                                        <a id="cardCount" className="rbt-cart-sidenav-activation rbt-round-btn"
                                           href="#">
                                            <i className="feather-shopping-cart"/>
                                            <span className="rbt-cart-count">5</span>
                                        </a>
                                    </li>
                                    <li className="account-access rbt-user-wrapper d-none d-xl-block">
                                        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                                            <a href="/"
                                               className="text-sm text-gray-700 dark:text-gray-500 underline"><i
                                                className="feather-user"/> name</a>
                                            <a href="/login"
                                               className="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>
                                            <a href="/register"
                                               className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                                        </div>
                                        <div className="rbt-user-menu-list-wrapper">
                                            <div className="inner">
                                                <div className="rbt-admin-profile">
                                                    <div className="admin-thumbnail">
                                                        <img src="assets/images/team/avatar.jpg"
                                                             alt="User Images"/>
                                                    </div>
                                                    <div className="admin-info">
                                                        <span className="name">Nipa Bali</span>
                                                        <a className="rbt-btn-link color-primary"
                                                           href="/profile">View Profile</a>
                                                    </div>
                                                </div>
                                                <ul className="user-list-wrapper">
                                                    <li>
                                                        <a href="/dashboard">
                                                            <i className="feather-home"/>
                                                            <span>My Dashboard</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/enrolled-courses">
                                                            <i className="feather-shopping-bag"/>
                                                            <span>Enrolled Courses</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/wishlist">
                                                            <i className="feather-heart"/>
                                                            <span>Wishlist</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/reviews">
                                                            <i className="feather-star"/>
                                                            <span>Reviews</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/order-history">
                                                            <i className="feather-clock"/>
                                                            <span>Order History</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <hr className="mt--10 mb--10"/>
                                                <ul className="user-list-wrapper">
                                                    <li>
                                                        <a href="/settings">
                                                            <i className="feather-settings"/>
                                                            <span>Settings</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="/logout"
                                                           >
                                                            <i className="feather-log-out"/>Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                                        <a className="rbt-round-btn" href="#"><i className="feather-user"/></a>
                                        <div className="rbt-user-menu-list-wrapper">
                                            <div className="inner">
                                                <div className="rbt-admin-profile">
                                                    <div className="admin-thumbnail">
                                                        <img src="assets/images/team/avatar.jpg"
                                                             alt="User Images"/>
                                                    </div>
                                                    <div className="admin-info">
                                                        <span className="name">Nipa Bali</span>
                                                        <a className="rbt-btn-link color-primary"
                                                           href="/profile">View Profile</a>
                                                    </div>
                                                </div>
                                                <ul className="user-list-wrapper">
                                                    <li>
                                                        <a href="/profile">
                                                            <i className="feather-home"/>
                                                            <span>My Dashboard</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/enrolled-courses">
                                                            <i className="feather-shopping-bag"/>
                                                            <span>Enrolled Courses</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/wishlist">
                                                            <i className="feather-heart"/>
                                                            <span>Wishlist</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/reviews">
                                                            <i className="feather-star"/>
                                                            <span>Reviews</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/order-history">
                                                            <i className="feather-clock"/>
                                                            <span>Order History</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <hr className="mt--10 mb--10"/>
                                                <hr className="mt--10 mb--10"/>
                                                <ul className="user-list-wrapper">
                                                    <li>
                                                        <a href="/settings">
                                                            <i className="feather-settings"/>
                                                            <span>Settings</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/logout">
                                                            <i className="feather-log-out"/>
                                                            <span>Logout</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="rbt-btn-wrapper d-none d-xl-block">
                                    <a className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
                                       href="#">
                                        <span data-text="Enroll Now">Enroll Now</span>
                                    </a>
                                </div>
                                {/*// <!-- Start Mobile-Menu-Bar -->*/}
                                <div className="mobile-menu-bar d-block d-xl-none">
                                    <div className="hamberger">
                                        <button className="hamberger-button rbt-round-btn">
                                            <i className="feather-menu"/>
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
                                        <input type="text" placeholder="What are you looking for?"/>
                                            <div className="submit-btn">
                                                <a className="rbt-btn btn-gradient btn-md" href="#">Search</a>
                                            </div>
                                    </form>
                                </div>
                            </div>

                            <div className="rbt-separator-mid">
                                <hr className="rbt-separator m-0"/>
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
                                <button className="rbt-close-offcanvas rbt-round-btn"><i className="feather-x"/>
                                </button>
                            </div>
                        </div>
                        <nav className="side-nav w-100">
                            <ul className="rbt-vertical-nav-list-wrapper vertical-nav-menu">
                                <li className="vertical-nav-item">
                                    <a href="#">Course School</a>
                                    <div className="vartical-nav-content-menu-wrapper">
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">Art</a></li>
                                                <li><a href="#">Figma</a></li>
                                                <li><a href="#">Adobe</a></li>
                                            </ul>
                                        </div>
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Photo</a></li>
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">Math</a></li>
                                                <li><a href="#">Read</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="vertical-nav-item">
                                    <a href="#">Online School</a>
                                    <div className="vartical-nav-content-menu-wrapper">
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Photo</a></li>
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">Math</a></li>
                                                <li><a href="#">Read</a></li>
                                            </ul>
                                        </div>
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">Art</a></li>
                                                <li><a href="#">Figma</a></li>
                                                <li><a href="#">Adobe</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="vertical-nav-item">
                                    <a href="#">kindergarten</a>
                                    <div className="vartical-nav-content-menu-wrapper">
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Photo</a></li>
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">Math</a></li>
                                                <li><a href="#">Read</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="vertical-nav-item">
                                    <a href="#">Classic LMS</a>
                                    <div className="vartical-nav-content-menu-wrapper">
                                        <div className="vartical-nav-content-menu">
                                            <h3 className="rbt-short-title">Course Title</h3>
                                            <ul className="rbt-vertical-nav-list-wrapper">
                                                <li><a href="#">Web Design</a></li>
                                                <li><a href="#">Art</a></li>
                                                <li><a href="#">Figma</a></li>
                                                <li><a href="#">Adobe</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="read-more-btn">
                                <div className="rbt-btn-wrapper mt--20">
                                    <a className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                                       href="#">
                                        <span>Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </nav>
                        <div className="rbt-offcanvas-footer">

                        </div>
                    </div>
                </div>
                {/*// <!-- End Side Vav -->*/}
                <a className="rbt-close_side_menu" href="javascript:void(0);"/>
            </header>
        </>
    );
};
export default Navbar;