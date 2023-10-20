import {
  ENROLLED_COURSE_FAILED,
  ENROLLED_COURSE_REQUEST,
  ENROLLED_COURSE_SUCCESS,
} from "../constants/CartConstant";
import axios from "../../helper/axios";
import config from "../../helper/config";

export const getEnrolledCourses = () => async (dispatch) => {
  dispatch({
    type: ENROLLED_COURSE_REQUEST,
  });

  await axios
    .get("/enrolled", config)
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: ENROLLED_COURSE_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ENROLLED_COURSE_FAILED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: ENROLLED_COURSE_FAILED,
        payload: err?.response?.data,
      });
    });
};
