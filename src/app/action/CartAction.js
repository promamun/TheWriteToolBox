import {
  CART_FAILED,
  CART_REQUEST,
  CART_SUCCESS,
} from "../constants/CartConstant";

import axios from "../../helper/axios";
import config from "../../helper/config";

export const getCartDetails = () => async (dispatch) => {
  dispatch({
    type: CART_REQUEST,
  });

  await axios
    .get("/cart-list", config)
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: CART_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: CART_FAILED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: CART_FAILED,
        payload: err?.response?.data,
      });
    });
};
