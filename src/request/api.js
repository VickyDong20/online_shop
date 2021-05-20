import request from "./request";
//home page request
export const GetHomeData = () => request.get("/index/index");
//popup page request
export const GetSearchPopupData = () => request.get("/search/index");
// gain the search request datalist
export const GetSearchTipsListData = params =>
  request.get("/search/helper", { params });
