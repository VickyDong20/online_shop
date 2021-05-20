<template>
  <div class="search-popup">
    <van-search
      v-model="searchValue"
      show-action
      :placeholder="placeholderValue"
      @search="onSearch"
      @cancel="onCancel"
      @input="onInput"
    />
    <History-hot
      v-if="blockShow == 1"
      :historyListData="historyListData"
      :hotKeywordListData="hotKeywordListData"
    />
    <SearchTipList
      v-else-if="blockShow == 2"
      :searchTipsListData="searchTipsListData"
    />
    <!--<comp1 v-if="blockShow == 1"> </comp1>
    <comp2 v-else-if="blockShow == 2"> </comp2>
    <comp3 v-else="blockShow == 3"> </comp3>-->
  </div>
</template>

<script>
import HistoryHot from "@/components/HistoryHot";
import SearchTipList from "@/components/SearchTipList";
import { GetSearchPopupData, GetSearchTipsListData } from "@/request/api";

export default {
  data() {
    return {
      //the search words, user entered
      searchValue: "",
      //placeholder
      placeholderValue: "",
      //bolockshow value can be 1,2,3
      // 1 means display the search history and the hot search
      //2 means display the search list
      //3 menas display the search result
      blockShow: 1,
      //history search data
      historyListData: [],
      hotKeywordListData: [],
      searchTipsListData: []
    };
  },
  created() {
    GetSearchPopupData().then(res => {
      //console.log(res.data),
      this.placeholderValue = res.data.defaultKeyword.keyword;
      this.historyListData = res.data.historyKeywordList;
      this.hotKeywordListData = res.data.hotKeywordList;
    });
  },
  methods: {
    onSearch(val) {},
    onCancel() {
      // this.$router.push("/home");
      this.$router.go(-1); //back to the upper page
    },
    onInput(val) {
      console.log(val);
      this.blockShow = 2;
      //send request and get the tiplist
      GetSearchTipsListData({ keyword: val }).then(res => {
        console.log(res);
        this.searchTipsListData = res.data;
      });
    }
  },
  components: {
    HistoryHot,
    SearchTipList
  }
};
</script>
<style lang="less" scoped>
.search-popup {
  width: 100%;
  height: 100%;
  position: absolute;

  top: 0;
  background-color: lightgrey;
}
</style>
