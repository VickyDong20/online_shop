<template>
  <div class="home">
    <van-search
      v-model="searchValue"
      shape="round"
      placeholder="请输入搜索关键词"
      disabled
    />
    <p>这是p</p>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import axios from "axios";
import request from "@/request/request";
import { GetHomeList } from "@/request/api";
export default {
  name: "Home",
  data() {
    return {
      searchValue: ""
    };
  },
  //get data
  created() {
    //request
    // .get("/index/index")
    GetHomeList()
      .then(res => {
        console.log("success!!123");
        console.log(res);
      })
      .catch(err => {
        console.log("error");
        console.log(err);
      });
  },
  components: {}
};
</script>
