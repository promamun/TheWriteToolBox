import React from "react";
import UserProfileManu from "../navbar/UserProfileManu";

export default function UserManuSidebar() {
  return (
    <>
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <h6 className="rbt-title-style-2">Welcome, Jone Due</h6>
              </div>
              <nav className="mainmenu-nav">
                <UserProfileManu Classname="dashboard-mainmenu rbt-default-sidebar-list" />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
