import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "../../../helper/axios";
import config from "../../../helper/config";
import message from "../../../helper/message";
import { useDispatch } from "react-redux";
import { getCartDetails } from "../../../app/action/CartAction";

export default function Pay() {
  const dispatch = useDispatch();
  const createOrder = async () => {
    let order_id = "";
    await axios
      .post("/create-paypal-order", {}, config)
      .then((res) => {
        let { id } = res.data;
        order_id = id;

        return id;
      })
      .catch((err) => {
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
    return order_id;
  };

  const onApprove = async (data) => {
    await axios
      .post(`/capture-paypal-orders/${data.orderID}`, {}, config)
      .then((res) => {
        if (res.data.success) {
          message.success(res.data.message);
          dispatch(getCartDetails());
        }
      })
      .catch((err) => {
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
  };

  return (
    <PayPalButtons
      style={{ layout: "vertical" }}
      createOrder={(data) => createOrder(data)}
      onApprove={(data) => onApprove(data)}
    />
  );
}
