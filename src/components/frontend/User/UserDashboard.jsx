import React, { useEffect, useState } from "react";
import UserLayout from "./UserLayout";
import axios from "../../../helper/axios";
import config from "../../../helper/config";
import LoadingOverlay from "react-loading-overlay";
import message from "../../../helper/message";

export default function UserDashboard() {
  const [loading, setLoading] = useState(false);
  const [dashboard_data, setDashboardData] = useState({});

  useEffect(() => {
    setLoading(true);

    axios
      .get("/dashboard-data", config)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          setDashboardData(res.data.dashboard);
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
  }, []);

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <UserLayout>
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
          <div className="content">
            <div className="section-title">
              <h4 className="rbt-title-style-3">Dashboard</h4>
            </div>
            <div className="row g-5">
              {/* Start Single Card  */}
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-primary-opacity">
                  <div className="inner">
                    <div className="rbt-round-icon bg-primary-opacity">
                      <i className="feather-book-open" />
                    </div>
                    <div className="content">
                      <h3 className="counter without-icon color-primary">
                        <span className="odometer" data-count="30">
                          {dashboard_data.enrolled_courses}
                        </span>
                      </h3>
                      <span className="rbt-title-style-2 d-block">
                        Enrolled Courses
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}

              {/* Start Single Card  */}
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-secondary-opacity">
                  <div className="inner">
                    <div className="rbt-round-icon bg-secondary-opacity">
                      <i className="feather-monitor" />
                    </div>
                    <div className="content">
                      <h3 className="counter without-icon color-secondary">
                        <span className="odometer" data-count="10">
                          00
                        </span>
                      </h3>
                      <span className="rbt-title-style-2 d-block">
                        ACTIVE COURSES
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}

              {/* Start Single Card  */}
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-violet-opacity">
                  <div className="inner">
                    <div className="rbt-round-icon bg-violet-opacity">
                      <i className="feather-award" />
                    </div>
                    <div className="content">
                      <h3 className="counter without-icon color-violet">
                        <span className="odometer" data-count="7">
                          00
                        </span>
                      </h3>
                      <span className="rbt-title-style-2 d-block">
                        Completed Courses
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
            </div>
          </div>
        </div>
      </UserLayout>
    </LoadingOverlay>
  );
}
