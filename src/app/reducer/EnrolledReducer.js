import {
  ENROLLED_COURSE_FAILED,
  ENROLLED_COURSE_REQUEST,
  ENROLLED_COURSE_SUCCESS,
} from "../constants/CartConstant";

export const getEnrolledCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case ENROLLED_COURSE_REQUEST:
      return { loading: true };

    case ENROLLED_COURSE_SUCCESS:
      return { loading: false, enrolled: action.payload };

    case ENROLLED_COURSE_FAILED:
      return { loading: false, enrolled_error: action.payload };

    default:
      return state;
  }
};
