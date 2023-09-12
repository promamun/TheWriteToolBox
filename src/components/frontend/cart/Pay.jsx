import React, { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import axios from "../../../helper/axios";
import config from "../../../helper/config";
import message from "../../../helper/message";

export default function Pay() {
  const { cart_details } = useSelector((state) => {
    return state;
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [orderID, setOrderID] = useState("");
  const [cartCourses, setCartCourses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    let data = cart_details.cart_details;
    if (data) {
      let { carts } = data;

      let totalPrice = 0;

      let cartCourses = carts.map(({ course_id }) => {
        totalPrice += Number(course_id.price);
        return course_id;
      });

      // setTotalPrice(totalPrice);
      setCartCourses(cartCourses);
      setTotalPrice(cartCourses[0].price);
    }
  }, [cart_details]);

  const createOrder = async () => {
    let order_id = "";
    await axios
      .post("/create-paypal-order", { price: totalPrice }, config)
      .then((res) => {
        let { id } = res.data;
        order_id = id;

        return id;
      })
      .catch((err) => {
        setLoading(false);
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
    return order_id;
  };

  const onApprove = async (data) => {
    await axios
      .post(`/capture-paypal-orders/${data.orderID}`, {}, config)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        setLoading(false);
        message.error("Something Went Wrong!!!");
        console.error(err);
      });
  };

  return (
    <PayPalButtons
      style={{ layout: "vertical" }}
      createOrder={(data, actions) => createOrder(data)}
      onApprove={(data, actions) => onApprove(data)}
    />
  );
}
