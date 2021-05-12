import request from "./request";
//home page request
export const GetHomeData = () => request.get("/index/index");
