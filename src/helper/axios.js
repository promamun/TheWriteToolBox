import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8003/", //local
});

export default axios;
