<template>
  <div class="out">
    <router-link tag="div" to="/" class="out-icon" v-show="!topHeader">
      <span class="iconfont">&#xe61f;</span>
    </router-link>
    <div class="contain" v-show="topHeader">
      <router-link tag="div" to="/" class="base">
        <span class="iconfont">&#xe61f;</span>
      </router-link>
      <div class="title">{{sightName}}</div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      topHeader: false
    };
  },
  props: {
    sightName: String
  },

  methods: {
    setScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 80) {
        this.topHeader = true;
      } else {
        this.topHeader = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.setScroll);
  }
};
</script>

<style scoped lang='scss'>
@import "~styles/variable.scss";
.out {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: #fff;
  z-index: 10;
  text-align: center;
  font-size: 0.32rem;
  .out-icon {
    width: .6rem;
    height: .6rem;
    margin-left:.3rem;
    margin-top:.2rem;
    line-height: .6rem;
    border-radius: 50%;
    background:rgba(0,0,0,.5);
  }
  .contain {
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.88rem;
    background-color: $bgColor;
    .base {
      margin-left: 0.2rem;

      text-align: center;
      line-height: 0.6rem;
    }

    .title {
      margin: 0 auto;
    }
  }
}
</style>
