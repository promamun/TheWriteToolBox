import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { CartReducer } from "../reducer/CartReducer";
import { CourseReducer } from "../reducer/CourseReducer";

const reducer = combineReducers({
  cart_details: CartReducer,
  courses: CourseReducer,
});

const initialState = {};
const middleware = [thunk];

export const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
