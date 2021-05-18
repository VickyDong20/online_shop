<template>
  <div class="page">
    <div class="history-hot">
      <div class="history-header">
        <h3>History</h3>
        <van-icon name="delete-o" />
      </div>
      <div class="history-bottom">
        <van-tag
          v-for="(item, index) in historyListData"
          :key="index"
          plain
          type="default"
          >{{ item }}</van-tag
        >
      </div>
    </div>

    <div class="search-hot">
      <div class="search-header">
        <h3>Hot search</h3>
      </div>
      <div class="search-bottom">
        <van-tag
          v-for="(item, index) in hotKeywordListData"
          :key="index"
          plain
          type="default"
          >{{ item.keyword }}</van-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["historyListData", "hotKeywordListData"]
};
</script>

<style lang="less" scoped>
.history-hot,
.search-hot {
  margin-bottom: 0.2rem;
  background-color: white;
  padding: 0.1rem;
  .history-header,
  .search-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.3rem;
    h3 {
      font-size: 0.3rem;
      font-weight: bolder;
    }
    margin-bottom: 0.1rem;
  }
  .van-tag {
    margin-right: 0.05rem;
    padding: 0.02rem 0.02rem 0.02rem 0.02rem;
  }
}
.history-bottom,
search-bottom {
  display: flex;
}
</style>
