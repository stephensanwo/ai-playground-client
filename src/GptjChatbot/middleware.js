import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://192.168.0.149:8558",
});
