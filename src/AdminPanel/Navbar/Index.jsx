import React from 'react'

export default function Index() {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/*// <!-- Menu -->*/}
          <aside
              id="layout-menu"
              className="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div className="app-brand demo">
              <a href="index-2.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                <svg
                    width="32"
                    height="22"
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      // fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                      fill="#7367F0"
                  />
                  <path
                      opacity="0.06"
                      // fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                      fill="#161616"
                  />
                  <path
                      opacity="0.06"
                      // fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                      fill="#161616"
                  />
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                      fill="#7367F0"
                  />
                </svg>
              </span>
                <span className="app-brand-text demo menu-text fw-bold">Vuexy</span>
              </a>

              <a
                  href="javascript:void(0);"
                  className="layout-menu-toggle menu-link text-large ms-auto"
              >
                <i
                    className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"
                />
                <i className="ti ti-x d-block d-xl-none ti-sm align-middle"/>
              </a>
            </div>

            <div className="menu-inner-shadow"/>

            <ul className="menu-inner py-1">
              {/*// <!-- Dashboards -->*/}
              <li className="menu-item active open">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-smart-home"></i>
                  <div data-i18n="Dashboards">Dashboards</div>
                  <div className="badge bg-primary rounded-pill ms-auto">3</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item active">
                    <a href="index-2.html" className="menu-link">
                      <div data-i18n="Analytics">Analytics</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="dashboards-crm.html" className="menu-link">
                      <div data-i18n="CRM">CRM</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-ecommerce-dashboard.html" className="menu-link">
                      <div data-i18n="eCommerce">eCommerce</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-logistics-dashboard.html" className="menu-link">
                      <div data-i18n="Logistics">Logistics</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-academy-dashboard.html" className="menu-link">
                      <div data-i18n="Academy">Academy</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/*// <!-- Layouts -->*/}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-layout-sidebar"/>
                  <div data-i18n="Layouts">Layouts</div>
                </a>

                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="layouts-collapsed-menu.html" className="menu-link">
                      <div data-i18n="Collapsed menu">Collapsed menu</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-content-navbar.html" className="menu-link">
                      <div data-i18n="Content navbar">Content navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                        href="layouts-content-navbar-with-sidebar.html"
                        className="menu-link"
                    >
                      <div data-i18n="Content nav + Sidebar">
                        Content nav + Sidebar
                      </div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                        href="https://demos.pixinvent.com/vuexy-html-admin-template/html/horizontal-menu-template"
                        className="menu-link"
                        target="_blank"
                    >
                      <div data-i18n="Horizontal">Horizontal</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-without-menu.html" className="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-without-navbar.html" className="menu-link">
                      <div data-i18n="Without navbar">Without navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-fluid.html" className="menu-link">
                      <div data-i18n="Fluid">Fluid</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-container.html" className="menu-link">
                      <div data-i18n="Container">Container</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-blank.html" className="menu-link">
                      <div data-i18n="Blank">Blank</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/*// <!-- Front Pages -->*/}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-files"/>
                  <div data-i18n="Front Pages">Front Pages</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a
                        href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-pages/landing-page.html"
                        className="menu-link"
                        target="_blank"
                    >
                      <div data-i18n="Landing">Landing</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                        href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-pages/pricing-page.html"
                        className="menu-link"
                        target="_blank"
                    >
                      <div data-i18n="Pricing">Pricing</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                        href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-pages/payment-page.html"
                        className="menu-link"
                        target="_blank"
                    >
                      <div data-i18n="Payment">Payment</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                        href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-pages/checkout-page.html"
                        className="menu-link"
                        target="_blank"
                    >
                      <div data-i18n="Checkout">Checkout</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                        href="https://demos.pixinvent.com/vuexy-html-admin-template/html/front-pages/help-center-landing.html"
                        className="menu-link"
                        target="_blank"
                    >
                      <div data-i18n="Help Center">Help Center</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/*// <!-- Apps & Pages -->*/}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Apps &amp; Pages</span>
              </li>
              <li className="menu-item">
                <a href="app-email.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-mail"/>
                  <div data-i18n="Email">Email</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-chat.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-messages"/>
                  <div data-i18n="Chat">Chat</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-calendar.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-calendar"/>
                  <div data-i18n="Calendar">Calendar</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-kanban.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-layout-kanban"/>
                  <div data-i18n="Kanban">Kanban</div>
                </a>
              </li>
              {/*// <!-- e-commerce-app menu start -->*/}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-building-factory-2"/>
                  <div data-i18n="eCommerce">eCommerce</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-ecommerce-dashboard.html" className="menu-link">
                      <div data-i18n="Dashboard">Dashboard</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Products">Products</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-product-list.html"
                            className="menu-link"
                        >
                          <div data-i18n="Product list">Product list</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-product-add.html"
                            className="menu-link"
                        >
                          <div data-i18n="Add Product">Add Product</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-category-list.html"
                            className="menu-link"
                        >
                          <div data-i18n="Category list">Category List</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Order">Order</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a href="app-ecommerce-order-list.html" className="menu-link">
                          <div data-i18n="Order list">Order list</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-order-details.html"
                            className="menu-link"
                        >
                          <div data-i18n="Order Details">Order Details</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Customer">Customer</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-customer-all.html"
                            className="menu-link"
                        >
                          <div data-i18n="All Customers">All Customers</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                        >
                          <div data-i18n="Customer Details">Customer Details</div>
                        </a>
                        <ul className="menu-sub">
                          <li className="menu-item">
                            <a
                                href="app-ecommerce-customer-details-overview.html"
                                className="menu-link"
                            >
                              <div data-i18n="Overview">Overview</div>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                                href="app-ecommerce-customer-details-security.html"
                                className="menu-link"
                            >
                              <div data-i18n="Security">Security</div>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                                href="app-ecommerce-customer-details-billing.html"
                                className="menu-link"
                            >
                              <div data-i18n="Address & Billing">
                                Address & Billing
                              </div>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a
                                href="app-ecommerce-customer-details-notifications.html"
                                className="menu-link"
                            >
                              <div data-i18n="Notifications">Notifications</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="app-ecommerce-manage-reviews.html" className="menu-link">
                      <div data-i18n="Manage reviews">Manage reviews</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-ecommerce-referral.html" className="menu-link">
                      <div data-i18n="Referrals">Referrals</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Settings">Settings</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-settings-detail.html"
                            className="menu-link"
                        >
                          <div data-i18n="Store details">Store details</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-settings-payments.html"
                            className="menu-link"
                        >
                          <div data-i18n="Payments">Payments</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-settings-checkout.html"
                            className="menu-link"
                        >
                          <div data-i18n="Checkout">Checkout</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-settings-shipping.html"
                            className="menu-link"
                        >
                          <div data-i18n="Shipping & delivery">
                            Shipping & delivery
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-settings-locations.html"
                            className="menu-link"
                        >
                          <div data-i18n="Locations">Locations</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-ecommerce-settings-notifications.html"
                            className="menu-link"
                        >
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/*// <!-- e-commerce-app menu end -->*/}
              {/*// <!-- Academy menu start -->*/}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-book"></i>
                  <div data-i18n="Academy">Academy</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-academy-dashboard.html" className="menu-link">
                      <div data-i18n="Dashboard">Dashboard</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-academy-course.html" className="menu-link">
                      <div data-i18n="My Course">My Course</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-academy-course-details.html" className="menu-link">
                      <div data-i18n="Course Details">Course Details</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/*// <!-- Academy menu end -->*/}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-truck"></i>
                  <div data-i18n="Logistics">Logistics</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-logistics-dashboard.html" className="menu-link">
                      <div data-i18n="Dashboard">Dashboard</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-logistics-fleet.html" className="menu-link">
                      <div data-i18n="Fleet">Fleet</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-file-dollar"></i>
                  <div data-i18n="Invoice">Invoice</div>
                  <div className="badge bg-danger rounded-pill ms-auto">4</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-invoice-list.html" className="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-invoice-preview.html" className="menu-link">
                      <div data-i18n="Preview">Preview</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-invoice-edit.html" className="menu-link">
                      <div data-i18n="Edit">Edit</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-invoice-add.html" className="menu-link">
                      <div data-i18n="Add">Add</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-users"></i>
                  <div data-i18n="Users">Users</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-user-list.html" className="menu-link">
                      <div data-i18n="List">List</div>
                    </a>
                  </li>

                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="View">View</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a href="app-user-view-account.html" className="menu-link">
                          <div data-i18n="Account">Account</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="app-user-view-security.html" className="menu-link">
                          <div data-i18n="Security">Security</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="app-user-view-billing.html" className="menu-link">
                          <div data-i18n="Billing & Plans">Billing & Plans</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-user-view-notifications.html"
                            className="menu-link"
                        >
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="app-user-view-connections.html"
                            className="menu-link"
                        >
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-settings"></i>
                  <div data-i18n="Roles & Permissions">Roles & Permissions</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-access-roles.html" className="menu-link">
                      <div data-i18n="Roles">Roles</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-access-permission.html" className="menu-link">
                      <div data-i18n="Permission">Permission</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-file"></i>
                  <div data-i18n="Pages">Pages</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="User Profile">User Profile</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a href="pages-profile-user.html" className="menu-link">
                          <div data-i18n="Profile">Profile</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="pages-profile-teams.html" className="menu-link">
                          <div data-i18n="Teams">Teams</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="pages-profile-projects.html" className="menu-link">
                          <div data-i18n="Projects">Projects</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="pages-profile-connections.html"
                            className="menu-link"
                        >
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Account Settings">Account Settings</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="pages-account-settings-account.html"
                            className="menu-link"
                        >
                          <div data-i18n="Account">Account</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="pages-account-settings-security.html"
                            className="menu-link"
                        >
                          <div data-i18n="Security">Security</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="pages-account-settings-billing.html"
                            className="menu-link"
                        >
                          <div data-i18n="Billing & Plans">Billing & Plans</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="pages-account-settings-notifications.html"
                            className="menu-link"
                        >
                          <div data-i18n="Notifications">Notifications</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="pages-account-settings-connections.html"
                            className="menu-link"
                        >
                          <div data-i18n="Connections">Connections</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="pages-faq.html" className="menu-link">
                      <div data-i18n="FAQ">FAQ</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="pages-pricing.html" className="menu-link">
                      <div data-i18n="Pricing">Pricing</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Misc">Misc</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="pages-misc-error.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Error">Error</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="pages-misc-under-maintenance.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Under Maintenance">
                            Under Maintenance
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="pages-misc-comingsoon.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Coming Soon">Coming Soon</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="pages-misc-not-authorized.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Not Authorized">Not Authorized</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-lock"></i>
                  <div data-i18n="Authentications">Authentications</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Login">Login</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="auth-login-basic.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="auth-login-cover.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Register">Register</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="auth-register-basic.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="auth-register-cover.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="auth-register-multisteps.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Multi-steps">Multi-steps</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Verify Email">Verify Email</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="auth-verify-email-basic.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="auth-verify-email-cover.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Reset Password">Reset Password</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="auth-reset-password-basic.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="auth-reset-password-cover.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Forgot Password">Forgot Password</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="auth-forgot-password-basic.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="auth-forgot-password-cover.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Two Steps">Two Steps</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="auth-two-steps-basic.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="auth-two-steps-cover.html"
                            className="menu-link"
                            target="_blank"
                        >
                          <div data-i18n="Cover">Cover</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-forms"></i>
                  <div data-i18n="Wizard Examples">Wizard Examples</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="wizard-ex-checkout.html" className="menu-link">
                      <div data-i18n="Checkout">Checkout</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="wizard-ex-property-listing.html" className="menu-link">
                      <div data-i18n="Property Listing">Property Listing</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="wizard-ex-create-deal.html" className="menu-link">
                      <div data-i18n="Create Deal">Create Deal</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="modal-examples.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-square"></i>
                  <div data-i18n="Modal Examples">Modal Examples</div>
                </a>
              </li>

              {/*// <!-- Components -->*/}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Components</span>
              </li>
              {/*// <!-- Cards -->*/}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-id"></i>
                  <div data-i18n="Cards">Cards</div>
                  <div className="badge bg-primary rounded-pill ms-auto">6</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="cards-basic.html" className="menu-link">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="cards-advance.html" className="menu-link">
                      <div data-i18n="Advance">Advance</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="cards-statistics.html" className="menu-link">
                      <div data-i18n="Statistics">Statistics</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="cards-analytics.html" className="menu-link">
                      <div data-i18n="Analytics">Analytics</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="cards-actions.html" className="menu-link">
                      <div data-i18n="Actions">Actions</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/*// <!-- User interface -->*/}
              <li className="menu-item">
                <a href="javascript:void(0)" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-color-swatch"></i>
                  <div data-i18n="User interface">User interface</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="ui-accordion.html" className="menu-link">
                      <div data-i18n="Accordion">Accordion</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-alerts.html" className="menu-link">
                      <div data-i18n="Alerts">Alerts</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-badges.html" className="menu-link">
                      <div data-i18n="Badges">Badges</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-buttons.html" className="menu-link">
                      <div data-i18n="Buttons">Buttons</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-carousel.html" className="menu-link">
                      <div data-i18n="Carousel">Carousel</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-collapse.html" className="menu-link">
                      <div data-i18n="Collapse">Collapse</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-dropdowns.html" className="menu-link">
                      <div data-i18n="Dropdowns">Dropdowns</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-footer.html" className="menu-link">
                      <div data-i18n="Footer">Footer</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-list-groups.html" className="menu-link">
                      <div data-i18n="List Groups">List groups</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-modals.html" className="menu-link">
                      <div data-i18n="Modals">Modals</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-navbar.html" className="menu-link">
                      <div data-i18n="Navbar">Navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-offcanvas.html" className="menu-link">
                      <div data-i18n="Offcanvas">Offcanvas</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                      <div data-i18n="Pagination & Breadcrumbs">
                        Pagination &amp; Breadcrumbs
                      </div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-progress.html" className="menu-link">
                      <div data-i18n="Progress">Progress</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-spinners.html" className="menu-link">
                      <div data-i18n="Spinners">Spinners</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-tabs-pills.html" className="menu-link">
                      <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-toasts.html" className="menu-link">
                      <div data-i18n="Toasts">Toasts</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-tooltips-popovers.html" className="menu-link">
                      <div data-i18n="Tooltips & Popovers">
                        Tooltips &amp; popovers
                      </div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="ui-typography.html" className="menu-link">
                      <div data-i18n="Typography">Typography</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/*// <!-- Extended components -->*/}
              <li className="menu-item">
                <a href="javascript:void(0)" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-components"></i>
                  <div data-i18n="Extended UI">Extended UI</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="extended-ui-avatar.html" className="menu-link">
                      <div data-i18n="Avatar">Avatar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-blockui.html" className="menu-link">
                      <div data-i18n="BlockUI">BlockUI</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-drag-and-drop.html" className="menu-link">
                      <div data-i18n="Drag & Drop">Drag &amp; Drop</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-media-player.html" className="menu-link">
                      <div data-i18n="Media Player">Media Player</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                        href="extended-ui-perfect-scrollbar.html"
                        className="menu-link"
                    >
                      <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-star-ratings.html" className="menu-link">
                      <div data-i18n="Star Ratings">Star Ratings</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-sweetalert2.html" className="menu-link">
                      <div data-i18n="SweetAlert2">SweetAlert2</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-text-divider.html" className="menu-link">
                      <div data-i18n="Text Divider">Text Divider</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                      <div data-i18n="Timeline">Timeline</div>
                    </a>
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a
                            href="extended-ui-timeline-basic.html"
                            className="menu-link"
                        >
                          <div data-i18n="Basic">Basic</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                            href="extended-ui-timeline-fullscreen.html"
                            className="menu-link"
                        >
                          <div data-i18n="Fullscreen">Fullscreen</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-tour.html" className="menu-link">
                      <div data-i18n="Tour">Tour</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-treeview.html" className="menu-link">
                      <div data-i18n="Treeview">Treeview</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="extended-ui-misc.html" className="menu-link">
                      <div data-i18n="Miscellaneous">Miscellaneous</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/*// <!-- Icons -->*/}
              <li className="menu-item">
                <a href="javascript:void(0)" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-brand-tabler"></i>
                  <div data-i18n="Icons">Icons</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="icons-tabler.html" className="menu-link">
                      <div data-i18n="Tabler">Tabler</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="icons-font-awesome.html" className="menu-link">
                      <div data-i18n="Fontawesome">Fontawesome</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/*// <!-- Forms & Tables -->*/}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Forms &amp; Tables</span>
              </li>
              {/*// <!-- Forms -->*/}
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-toggle-left"></i>
                  <div data-i18n="Form Elements">Form Elements</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="forms-basic-inputs.html" className="menu-link">
                      <div data-i18n="Basic Inputs">Basic Inputs</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-input-groups.html" className="menu-link">
                      <div data-i18n="Input groups">Input groups</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-custom-options.html" className="menu-link">
                      <div data-i18n="Custom Options">Custom Options</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-editors.html" className="menu-link">
                      <div data-i18n="Editors">Editors</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-file-upload.html" className="menu-link">
                      <div data-i18n="File Upload">File Upload</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-pickers.html" className="menu-link">
                      <div data-i18n="Pickers">Pickers</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-selects.html" className="menu-link">
                      <div data-i18n="Select & Tags">Select &amp; Tags</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-sliders.html" className="menu-link">
                      <div data-i18n="Sliders">Sliders</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-switches.html" className="menu-link">
                      <div data-i18n="Switches">Switches</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="forms-extras.html" className="menu-link">
                      <div data-i18n="Extras">Extras</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-layout-navbar"></i>
                  <div data-i18n="Form Layouts">Form Layouts</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="form-layouts-vertical.html" className="menu-link">
                      <div data-i18n="Vertical Form">Vertical Form</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="form-layouts-horizontal.html" className="menu-link">
                      <div data-i18n="Horizontal Form">Horizontal Form</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="form-layouts-sticky.html" className="menu-link">
                      <div data-i18n="Sticky Actions">Sticky Actions</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-text-wrap-disabled"></i>
                  <div data-i18n="Form Wizard">Form Wizard</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="form-wizard-numbered.html" className="menu-link">
                      <div data-i18n="Numbered">Numbered</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="form-wizard-icons.html" className="menu-link">
                      <div data-i18n="Icons">Icons</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="form-validation.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-checkbox"></i>
                  <div data-i18n="Form Validation">Form Validation</div>
                </a>
              </li>
              {/*// <!-- Tables -->*/}
              <li className="menu-item">
                <a href="tables-basic.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-table"></i>
                  <div data-i18n="Tables">Tables</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-layout-grid"></i>
                  <div data-i18n="Datatables">Datatables</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="tables-datatables-basic.html" className="menu-link">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="tables-datatables-advanced.html" className="menu-link">
                      <div data-i18n="Advanced">Advanced</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="tables-datatables-extensions.html" className="menu-link">
                      <div data-i18n="Extensions">Extensions</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/*// <!-- Charts & Maps -->*/}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Charts &amp; Maps</span>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons ti ti-chart-pie"></i>
                  <div data-i18n="Charts">Charts</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="charts-apex.html" className="menu-link">
                      <div data-i18n="Apex Charts">Apex Charts</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="charts-chartjs.html" className="menu-link">
                      <div data-i18n="ChartJS">ChartJS</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="maps-leaflet.html" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-map"></i>
                  <div data-i18n="Leaflet Maps">Leaflet Maps</div>
                </a>
              </li>

              {/*// <!-- Misc -->*/}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Misc</span>
              </li>
              <li className="menu-item">
                <a
                    href="https://pixinvent.ticksy.com/"
                    target="_blank"
                    className="menu-link"
                >
                  <i className="menu-icon tf-icons ti ti-lifebuoy"></i>
                  <div data-i18n="Support">Support</div>
                </a>
              </li>
              <li className="menu-item">
                <a
                    href="https://demos.pixinvent.com/vuexy-html-admin-template/documentation/"
                    target="_blank"
                    className="menu-link"
                >
                  <i className="menu-icon tf-icons ti ti-file-description"></i>
                  <div data-i18n="Documentation">Documentation</div>
                </a>
              </li>
            </ul>
          </aside>
          {/*// <!-- / Menu -->*/}
          {/**/}
          {/*// <!-- Layout container -->*/}
          <div className="layout-page">
            {/*// <!-- Navbar -->*/}

            <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
            >
              <div
                  className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
              >
                <a
                    className="nav-item nav-link px-0 me-xl-4"
                    href="javascript:void(0)"
                >
                  <i className="ti ti-menu-2 ti-sm"></i>
                </a>
              </div>

              <div
                  className="navbar-nav-right d-flex align-items-center"
                  id="navbar-collapse"
              >
                {/*// <!-- Search -->*/}
                <div className="navbar-nav align-items-center">
                  <div className="nav-item navbar-search-wrapper mb-0">
                    <a
                        className="nav-item nav-link search-toggler d-flex align-items-center px-0"
                        href="javascript:void(0);"
                    >
                      <i className="ti ti-search ti-md me-2"></i>
                      <span className="d-none d-md-inline-block text-muted"
                      >Search (Ctrl+/)</span
                      >
                    </a>
                  </div>
                </div>
                {/*// <!-- /Search -->*/}

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  {/*// <!-- Language -->*/}
                  <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                    <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-language rounded-circle ti-md"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-language="en"
                        >
                          <span className="align-middle">English</span>
                        </a>
                      </li>
                      <li>
                        <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-language="fr"
                        >
                          <span className="align-middle">French</span>
                        </a>
                      </li>
                      <li>
                        <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-language="de"
                        >
                          <span className="align-middle">German</span>
                        </a>
                      </li>
                      <li>
                        <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-language="pt"
                        >
                          <span className="align-middle">Portuguese</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*// <!--/ Language -->*/}
                  {/**/}
                  {/*// <!-- Style Switcher -->*/}
                  <li
                      className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0"
                  >
                    <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-md"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                      <li>
                        <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="light"
                        >
                        <span className="align-middle"
                        ><i className="ti ti-sun me-2"></i>Light</span
                        >
                        </a>
                      </li>
                      <li>
                        <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="dark"
                        >
                        <span className="align-middle"
                        ><i className="ti ti-moon me-2"></i>Dark</span
                        >
                        </a>
                      </li>
                      <li>
                        <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="system"
                        >
                        <span className="align-middle"
                        ><i className="ti ti-device-desktop me-2"></i>System</span
                        >
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*// <!-- / Style Switcher-->*/}

                  {/*// <!-- Quick links  -->*/}
                  <li
                      className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0"
                  >
                    <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                    >
                      <i className="ti ti-layout-grid-add ti-md"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end py-0">
                      <div className="dropdown-menu-header border-bottom">
                        <div
                            className="dropdown-header d-flex align-items-center py-3"
                        >
                          <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                          <a
                              href="javascript:void(0)"
                              className="dropdown-shortcuts-add text-body"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Add shortcuts"
                          ><i className="ti ti-sm ti-apps"></i
                          ></a>
                        </div>
                      </div>
                      <div className="dropdown-shortcuts-list scrollable-container">
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                          <span
                              className="dropdown-shortcuts-icon rounded-circle mb-2"
                          >
                            <i className="ti ti-calendar fs-4"></i>
                          </span>
                            <a href="app-calendar.html" className="stretched-link"
                            >Calendar</a
                            >
                            <small className="text-muted mb-0">Appointments</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                          <span
                              className="dropdown-shortcuts-icon rounded-circle mb-2"
                          >
                            <i className="ti ti-file-invoice fs-4"></i>
                          </span>
                            <a href="app-invoice-list.html" className="stretched-link"
                            >Invoice App</a
                            >
                            <small className="text-muted mb-0">Manage Accounts</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                          <span
                              className="dropdown-shortcuts-icon rounded-circle mb-2"
                          >
                            <i className="ti ti-users fs-4"></i>
                          </span>
                            <a href="app-user-list.html" className="stretched-link"
                            >User App</a
                            >
                            <small className="text-muted mb-0">Manage Users</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                          <span
                              className="dropdown-shortcuts-icon rounded-circle mb-2"
                          >
                            <i className="ti ti-lock fs-4"></i>
                          </span>
                            <a href="app-access-roles.html" className="stretched-link"
                            >Role Management</a
                            >
                            <small className="text-muted mb-0">Permission</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                          <span
                              className="dropdown-shortcuts-icon rounded-circle mb-2"
                          >
                            <i className="ti ti-chart-bar fs-4"></i>
                          </span>
                            <a href="index-2.html" className="stretched-link"
                            >Dashboard</a
                            >
                            <small className="text-muted mb-0">User Profile</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                          <span
                              className="dropdown-shortcuts-icon rounded-circle mb-2"
                          >
                            <i className="ti ti-settings fs-4"></i>
                          </span>
                            <a
                                href="pages-account-settings-account.html"
                                className="stretched-link"
                            >Setting</a
                            >
                            <small className="text-muted mb-0"
                            >Account Settings</small
                            >
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                          <span
                              className="dropdown-shortcuts-icon rounded-circle mb-2"
                          >
                            <i className="ti ti-help fs-4"></i>
                          </span>
                            <a href="pages-faq.html" className="stretched-link"
                            >FAQs</a
                            >
                            <small className="text-muted mb-0">FAQs & Articles</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                          <span
                              className="dropdown-shortcuts-icon rounded-circle mb-2"
                          >
                            <i className="ti ti-square fs-4"></i>
                          </span>
                            <a href="modal-examples.html" className="stretched-link"
                            >Modals</a
                            >
                            <small className="text-muted mb-0">Useful Popups</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*// <!-- Quick links -->*/}

                  {/*// <!-- Notification -->*/}
                  <li
                      className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1"
                  >
                    <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                    >
                      <i className="ti ti-bell ti-md"></i>
                      <span
                          className="badge bg-danger rounded-pill badge-notifications"
                      >5</span
                      >
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end py-0">
                      <li className="dropdown-menu-header border-bottom">
                        <div
                            className="dropdown-header d-flex align-items-center py-3"
                        >
                          <h5 className="text-body mb-0 me-auto">Notification</h5>
                          <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-all text-body"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Mark all as read"
                          ><i className="ti ti-mail-opened fs-4"></i
                          ></a>
                        </div>
                      </li>
                      <li
                          className="dropdown-notifications-list scrollable-container"
                      >
                        <ul className="list-group list-group-flush">
                          <li
                              className="list-group-item list-group-item-action dropdown-notifications-item"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                      src="../../assets/img/avatars/1.png"
                                      alt
                                      className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                                <p className="mb-0">
                                  Won the monthly best seller gold badge
                                </p>
                                <small className="text-muted">1h ago</small>
                              </div>
                              <div
                                  className="flex-shrink-0 dropdown-notifications-actions"
                              >
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                ><span className="ti ti-x"></span
                                ></a>
                              </div>
                            </div>
                          </li>
                          <li
                              className="list-group-item list-group-item-action dropdown-notifications-item"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                <span
                                    className="avatar-initial rounded-circle bg-label-danger"
                                >CF</span
                                >
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">Charles Franklin</h6>
                                <p className="mb-0">Accepted your connection</p>
                                <small className="text-muted">12hr ago</small>
                              </div>
                              <div
                                  className="flex-shrink-0 dropdown-notifications-actions"
                              >
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                ><span className="ti ti-x"></span
                                ></a>
                              </div>
                            </div>
                          </li>
                          <li
                              className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                      src="../../assets/img/avatars/2.png"
                                      alt
                                      className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">New Message ✉️</h6>
                                <p className="mb-0">
                                  You have new message from Natalie
                                </p>
                                <small className="text-muted">1h ago</small>
                              </div>
                              <div
                                  className="flex-shrink-0 dropdown-notifications-actions"
                              >
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                ><span className="ti ti-x"></span
                                ></a>
                              </div>
                            </div>
                          </li>
                          <li
                              className="list-group-item list-group-item-action dropdown-notifications-item"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                <span
                                    className="avatar-initial rounded-circle bg-label-success"
                                ><i className="ti ti-shopping-cart"></i
                                ></span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">Whoo! You have new order 🛒</h6>
                                <p className="mb-0">
                                  ACME Inc. made new order $1,154
                                </p>
                                <small className="text-muted">1 day ago</small>
                              </div>
                              <div
                                  className="flex-shrink-0 dropdown-notifications-actions"
                              >
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                ><span className="ti ti-x"></span
                                ></a>
                              </div>
                            </div>
                          </li>
                          <li
                              className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                      src="../../assets/img/avatars/9.png"
                                      alt
                                      className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">
                                  Application has been approved 🚀
                                </h6>
                                <p className="mb-0">
                                  Your ABC project application has been approved.
                                </p>
                                <small className="text-muted">2 days ago</small>
                              </div>
                              <div
                                  className="flex-shrink-0 dropdown-notifications-actions"
                              >
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                ><span className="ti ti-x"></span
                                ></a>
                              </div>
                            </div>
                          </li>
                          <li
                              className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                <span
                                    className="avatar-initial rounded-circle bg-label-success"
                                ><i className="ti ti-chart-pie"></i
                                ></span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">Monthly report is generated</h6>
                                <p className="mb-0">
                                  July monthly financial report is generated
                                </p>
                                <small className="text-muted">3 days ago</small>
                              </div>
                              <div
                                  className="flex-shrink-0 dropdown-notifications-actions"
                              >
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                ><span className="ti ti-x"></span
                                ></a>
                              </div>
                            </div>
                          </li>
                          <li
                              className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                      src="../../assets/img/avatars/5.png"
                                      alt
                                      className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">Send connection request</h6>
                                <p className="mb-0">
                                  Peter sent you connection request
                                </p>
                                <small className="text-muted">4 days ago</small>
                              </div>
                              <div
                                  className="flex-shrink-0 dropdown-notifications-actions"
                              >
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                ><span className="ti ti-x"></span
                                ></a>
                              </div>
                            </div>
                          </li>
                          <li
                              className="list-group-item list-group-item-action dropdown-notifications-item"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                      src="../../assets/img/avatars/6.png"
                                      alt
                                      className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">New message from Jane</h6>
                                <p className="mb-0">
                                  Your have new message from Jane
                                </p>
                                <small className="text-muted">5 days ago</small>
                              </div>
                              <div
                                  className="flex-shrink-0 dropdown-notifications-actions"
                              >
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                ><span className="ti ti-x"></span
                                ></a>
                              </div>
                            </div>
                          </li>
                          <li
                              className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                <span
                                    className="avatar-initial rounded-circle bg-label-warning"
                                ><i className="ti ti-alert-triangle"></i
                                ></span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">CPU is running high</h6>
                                <p className="mb-0">
                                  CPU Utilization Percent is currently at 88.63%,
                                </p>
                                <small className="text-muted">5 days ago</small>
                              </div>
                              <div
                                  className="flex-shrink-0 dropdown-notifications-actions"
                              >
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span
                                ></a>
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                ><span className="ti ti-x"></span
                                ></a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-menu-footer border-top">
                        <a
                            href="javascript:void(0);"
                            className="dropdown-item d-flex justify-content-center text-primary p-2 h-px-40 mb-1 align-items-center"
                        >
                          View all notifications
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*// <!--/ Notification -->*/}

                  {/*// <!-- User -->*/}
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <img
                            src="../../assets/img/avatars/1.png"
                            alt
                            className="h-auto rounded-circle"
                        />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                            className="dropdown-item"
                            href="pages-account-settings-account.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <img
                                    src="../../assets/img/avatars/1.png"
                                    alt
                                    className="h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-medium d-block">John Doe</span>
                              <small className="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pages-profile-user.html">
                          <i className="ti ti-user-check me-2 ti-sm"></i>
                          <span className="align-middle">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a
                            className="dropdown-item"
                            href="pages-account-settings-account.html"
                        >
                          <i className="ti ti-settings me-2 ti-sm"></i>
                          <span className="align-middle">Settings</span>
                        </a>
                      </li>
                      <li>
                        <a
                            className="dropdown-item"
                            href="pages-account-settings-billing.html"
                        >
                        <span className="d-flex align-items-center align-middle">
                          <i
                              className="flex-shrink-0 ti ti-credit-card me-2 ti-sm"
                          ></i>
                          <span className="flex-grow-1 align-middle">Billing</span>
                          <span
                              className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20"
                          >2</span
                          >
                        </span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pages-faq.html">
                          <i className="ti ti-help me-2 ti-sm"></i>
                          <span className="align-middle">FAQ</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pages-pricing.html">
                          <i className="ti ti-currency-dollar me-2 ti-sm"></i>
                          <span className="align-middle">Pricing</span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <a
                            className="dropdown-item"
                            href="auth-login-cover.html"
                            target="_blank"
                        >
                          <i className="ti ti-logout me-2 ti-sm"></i>
                          <span className="align-middle">Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*// <!--/ User -->*/}
                </ul>
              </div>

              {/*// <!-- Search Small Screens -->*/}
              <div className="navbar-search-wrapper search-input-wrapper d-none">
                <input
                    type="text"
                    className="form-control search-input container-xxl border-0"
                    placeholder="Search..."
                    aria-label="Search..."
                />
                <i className="ti ti-x ti-sm search-toggler cursor-pointer"></i>
              </div>
            </nav>

          </div>
          {/*// <!-- / Layout page -->*/}
        </div>
      </div>
    </>
  )
}