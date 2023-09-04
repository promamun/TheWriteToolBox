import {
  COURSE_FAILED,
  COURSE_REQUEST,
  COURSE_SUCCESS,
} from "../constants/CartConstant";

export const CourseReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_REQUEST:
      return { loading: true };

    case COURSE_SUCCESS:
      return { loading: false, courses: action.payload };

    case COURSE_FAILED:
      return { loading: false, courses_error: action.payload };

    default:
      return state;
  }
};
