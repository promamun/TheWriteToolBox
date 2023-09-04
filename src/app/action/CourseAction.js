import {
  COURSE_FAILED,
  COURSE_REQUEST,
  COURSE_SUCCESS,
} from "../constants/CartConstant";
import axios from "../../helper/axios";

export const getAllCourses = () => async (dispatch) => {
  dispatch({
    type: COURSE_REQUEST,
  });

  await axios
    .get("/all-courses")
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: COURSE_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: COURSE_FAILED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: COURSE_FAILED,
        payload: err?.response?.data,
      });
    });
};
