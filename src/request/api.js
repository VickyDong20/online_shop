import request from "./request";
//home page request
export const GetHomeList = () => request.get("/index/index");
