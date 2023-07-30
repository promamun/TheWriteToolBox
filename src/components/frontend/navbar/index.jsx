import React, { useEffect} from 'react';
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import Img4 from "../../../assets/images/team/avatar.jpg";
import Img5 from "../../../assets/images/team/avatar.jpg";
import HeaderTop from "./HeaderTop";


const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const bodyHasStickyHeader = document.body.classList.contains('rbt-header-sticky');
      if (bodyHasStickyHeader) {
        const stickyPlaceHolder = document.querySelector('.rbt-sticky-placeholder');
        const headerContainer = document.querySelector('.rbt-header-wrapper');
        const headerContainerH = headerContainer.offsetHeight;
        const topHeaderH = document.querySelector('.rbt-header-top')?.offsetHeight || 0;
        const targetScroll = topHeaderH + 200;

        if (window.scrollY > targetScroll) {
          headerContainer.classList.add('rbt-sticky');
          stickyPlaceHolder.style.height = `${headerContainerH}px`;
        } else {
          headerContainer.classList.remove('rbt-sticky');
          stickyPlaceHolder.style.height = '0';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
      <>
        <header className="rbt-header rbt-header-10">
          <div className="rbt-sticky-placeholder" />
          <HeaderTop/>
          <div className="rbt-header-wrapper header-space-betwween header-sticky">
            <div className="container-fluid">
              <div className="mainbar-row rbt-navigation-center align-items-center">
                <div className="header-left rbt-header-content">
                  <div className="header-info">
                    <div className="logo">
                      <Link to="/">
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
                        <Link to="/blog">Blog</Link>
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
                        {/*<Link*/}
                        {/*  to="/login"*/}
                        {/*  className="text-sm text-gray-700 dark:text-gray-500 underline"*/}
                        {/*>*/}
                        {/*  Log in*/}
                        {/*</Link>*/}
                        {/*<Link*/}
                        {/*  to="/register"*/}
                        {/*  className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"*/}
                        {/*>*/}
                        {/*  Register*/}
                        {/*</Link>*/}
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
              <div className="rbt-offcanvas-footer"/>
            </div>
          </div>
          {/*// <!-- End Side Vav -->*/}
          <Link className="rbt-close_side_menu" to="javascript:void(0);" />
        </header>
      </>
    );
};
export default Navbar;
