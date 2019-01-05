<template>
  <div class="header">
    <div class="choice">
      <router-link tag="div" to="/" class="icon">
        <span class="iconfont">&#xe61f;</span>
      </router-link>
      <div class="title">城市选择</div>
    </div>
    <div class="box border-bottom border-top">
      <div class="area">
        <router-link tag="div" to="/cityIn" class="in">境内</router-link>
        <router-link tag="div" to="/cityOut" class="out">境外.港澳台</router-link>
      </div>
    </div>
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
.header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: $bgColor;
  text-align: center;
  color: #fff;
  .choice {
    display: flex;
    height: 0.88rem;
    line-height: 0.88rem;

    .icon {
      margin-left: 0.2rem;
    }
    .title {
      margin: 0 auto;
    }
  }
  .box {
    //   line-height: .88rem;
    padding: 0.2rem 0;
    .area {
      display: flex;
      line-height: 0.32rem;
      width: 90%;
      margin: 0 auto;
      border: 1px solid #fff;
      border-radius: 0.1rem;
      .in {
        width: 50%;
        background-color: #fff;
        color: $bgColor;
      }
      .out {
        width: 50%;
      }
    }
  }
}
</style>