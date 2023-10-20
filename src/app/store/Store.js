import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { CartReducer } from "../reducer/CartReducer";
import { CourseReducer } from "../reducer/CourseReducer";
import {
  enrolledCourseReducer,
  getEnrolledCourseReducer,
} from "../reducer/EnrolledReducer";

const reducer = combineReducers({
  cart_details: CartReducer,
  courses: CourseReducer,
  enrolled: getEnrolledCourseReducer,
});

const initialState = {};
const middleware = [thunk];

export const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
