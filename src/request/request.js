import axios from "axios";

const instance = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8001", //intercept request

  timeout: 5000
});
//interceptor
instance.interceptors.request.use(
  config => {
    //excute before the send request
    //to see whether the user login, if not, return. the request won't be sent. config is the information of this request
    // console.log("config", config);
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  res => {
    //excute before recive response:before exute then method
    //to see whether the user login, if not, return. the request won't be sent. config is the information of this request
    // console.log("res", res);
    return res.data;
  },
  err => {
    return Promise.reject(err);
  }
);
export default instance;
