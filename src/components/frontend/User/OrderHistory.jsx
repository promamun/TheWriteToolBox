import React, { useEffect, useState } from "react";
import UserLayout from "./UserLayout";
import axios from "../../../helper/axios";
import config from "../../../helper/config";
import message from "../../../helper/message";
import moment from "moment";
import { getLastNDigit } from "../../../helper/helper";
import LoadingOverlay from "react-loading-overlay";

export default function OrderHistory() {
  const [oders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrderHistory();
  }, []);

  const getOrderHistory = () => {
    setLoading(true);
    axios
      .get("/order-history", config)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          let { order_history } = res.data;

          let orders = [];

          order_history.forEach((order) => {
            order.items.forEach((details) => {
              orders.push({
                createdAt: order.createdAt,
                payment_type: order.payment_type,
                transaction_id: order.transaction_id,
                _id: order._id,
                title: details.title,
                price: details.price,
              });
            });
          });

          setOrders(orders);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("Something Went Wrong!!!");
      });
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <UserLayout>
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
          <div className="content">
            <div className="section-title">
              <h4 className="rbt-title-style-3">Order History</h4>
            </div>

            <div className="rbt-dashboard-table table-responsive mobile-table-750">
              <table className="rbt-table table table-borderless">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Course Name</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {oders.map((data, key) => {
                    return (
                      <tr key={key}>
                        <th>#{getLastNDigit(data._id, 6).toUpperCase()}</th>
                        <td>{data.title}</td>
                        <td>{moment(data.createdAt).format("YYYY-MM-DD")}</td>
                        <td>${data.price}</td>
                        <td>
                          <span className="rbt-badge-5 bg-color-success-opacity color-success">
                            Success
                          </span>
                        </td>
                      </tr>
                    );
                  })}

                  {/* <tr>
                  <th>#5478</th>
                  <td>App Development</td>
                  <td>January 27, 2022</td>
                  <td>$100.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-success-opacity color-success">
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#4585</th>
                  <td>Graphic</td>
                  <td>May 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-primary-opacity">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#9656</th>
                  <td>Graphic</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-warning-opacity color-warning">
                      On Hold
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#2045</th>
                  <td>Application</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#5478</th>
                  <td>App Development</td>
                  <td>January 27, 2022</td>
                  <td>$100.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-success-opacity color-success">
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#4585</th>
                  <td>Graphic</td>
                  <td>May 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-primary-opacity">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#9656</th>
                  <td>Graphic</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-warning-opacity color-warning">
                      On Hold
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#2045</th>
                  <td>Application</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#5478</th>
                  <td>App Development</td>
                  <td>January 27, 2022</td>
                  <td>$100.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-success-opacity color-success">
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#4585</th>
                  <td>Graphic</td>
                  <td>May 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-primary-opacity">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#9656</th>
                  <td>Graphic</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-warning-opacity color-warning">
                      On Hold
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#2045</th>
                  <td>Application</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Canceled
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#5478</th>
                  <td>App Development</td>
                  <td>January 27, 2022</td>
                  <td>$100.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-success-opacity color-success">
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#4585</th>
                  <td>Graphic</td>
                  <td>May 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-primary-opacity">
                      Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#9656</th>
                  <td>Graphic</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-warning-opacity color-warning">
                      On Hold
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>#2045</th>
                  <td>Application</td>
                  <td>March 27, 2022</td>
                  <td>$200.99</td>
                  <td>
                    <span className="rbt-badge-5 bg-color-danger-opacity color-danger">
                      Canceled
                    </span>
                  </td>
                </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </UserLayout>
    </LoadingOverlay>
  );
}
