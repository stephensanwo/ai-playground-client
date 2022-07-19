import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://192.168.0.149:2304/api/v1/playground",
});
