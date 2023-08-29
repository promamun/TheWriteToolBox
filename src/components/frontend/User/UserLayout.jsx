import React from "react";
import UserDashboardTop from "./UserDashboardTop";
import UserManuSidebar from "./UserManuSidebar";

export default function UserLayout({ children }) {
  return (
    <>
      <div className="rbt-page-banner-wrapper">
        {/*Start Banner BG Image  */}
        <div className="rbt-banner-image" />
        {/* End Banner BG Image  */}
      </div>

      {/* Start Card Style */}
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Dashboard Top  */}
              <UserDashboardTop />
              {/* End Dashboard Top  */}

              <div className="row g-5">
                <div className="col-lg-3">
                  {/* Start Dashboard Sidebar  */}
                  <UserManuSidebar />
                  {/* End Dashboard Sidebar  */}
                </div>
                <div className="col-lg-9">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
