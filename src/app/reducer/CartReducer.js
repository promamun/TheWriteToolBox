import {
  CART_FAILED,
  CART_REQUEST,
  CART_SUCCESS,
} from "../constants/CartConstant";

export const CartReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_REQUEST:
      return { loading: true };

    case CART_SUCCESS:
      return { loading: false, cart_details: action.payload };

    case CART_FAILED:
      return { loading: false, cart_error: action.payload };

    default:
      return state;
  }
};
