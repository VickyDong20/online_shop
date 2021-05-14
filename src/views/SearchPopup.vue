<template>
  <div class="search-popup">
    <van-search
      v-model="searchValue"
      show-action
      :placeholder="placeholderValue"
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      placeholderValue: ""
    };
  },
  methods: {
    onSearch(val) {},
    onCancel() {
      // this.$router.push("/home");
      this.$router.go(-1); //back to the upper page
    }
  }
};
</script>
<style lang="less" scoped>
.search-popup {
  width: 100%;
  height: 100%;
  position: absolute;

  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
