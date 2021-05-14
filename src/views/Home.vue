<template>
  <div class="home">
    <van-search
      v-model="searchValue"
      @click="$router.push('/home/seachPopup').catch(err => {})"
      shape="round"
      placeholder="please enter the keywords for searching"
      disabled
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="lightblue">
      <van-swipe-item v-for="item in banner" :key="item.id"
        ><img :src="item.image_url" width="100%" alt=""
      /></van-swipe-item>
    </van-swipe>
    <transition name="slide">
      <router-view key="view1"></router-view>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import axios from "axios";
import request from "@/request/request";
import { GetHomeData } from "@/request/api";
export default {
  name: "Home",
  data() {
    return {
      searchValue: "",
      banner: []
    };
  },
  //get data
  created() {
    //request
    // .get("/index/index")
    GetHomeData()
      .then(res => {
        console.log("---------then中res是:", res.data.banner);
        this.banner = res.data.banner;
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {}
};
</script>

<style lang="less">
.slide-enter,
.slide-leave {
  right: -100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: right 0.4s;
}
.slide-enter-to,
.slide-leave {
  right: 0;
}
</style>
