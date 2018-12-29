<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont white-icon">&#xe61f;</i>
    </div>
    <div class="header-center">
      <i class="iconfont search-icon">&#xe693;</i>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link tag="div" to="/cityIn" class="header-right">
      <span>鞍山</span>
      <i class="iconfont arrow-icon">&#xe6dc;</i>
    </router-link>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang='scss'>
@import "../../../assets/styles/variable.scss";
input::-webkit-input-placeholder {
  color: #aaa;
  font-size: 0.26rem;
  text-align: left;
}
.header {
  width: 100%;
  display: flex;
  line-height: 0.92rem;
  align-items: center;
  text-align: center;
  background-color: $bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    padding-left: 0.12rem;
    .white-icon {
      font-size: 0.36rem;
    }
  }
  .header-center {
    display: flex;
    width: 5.4rem;
    height: 0.64rem;
    border-radius: 0.15rem;
    line-height: 0.64rem;
    background-color: #fff;
    input {
      display: block;
      width: 80%;
    }
    .search-icon {
      color: #aab2bd;
      font-size: 0.32rem;
      margin: 0 0.12rem;
    }
  }
  .header-right {
    // flex:1;
    padding: 0 0.18rem;
    .arrow-icon {
      font-size: 0.26rem;
      margin-left: 0.04rem;
    }
  }
}
</style>