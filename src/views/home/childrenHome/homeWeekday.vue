<template>
  <div class="weekday">
    <div class="top">周末去哪了</div>
    <div class="main" v-for="item in weekdays" :key="item.id">
      <div class="img-box">
        <img :src="item.imgUrl" alt>
      </div>
      <div class="title">
        <p class="travel">{{item.title}}</p>
        <p class="go">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    weekdays: Array
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang='scss'>
.weekday {
  .top {
    line-height: 0.8rem;
    padding-left: 0.2rem;
  }
  .main {
    background-color: #fff;
    .img-box {
      overflow: hidden;
      width: 100%;
      height: 0;
      padding-bottom: 37.5%;
      img {
        width: 100%;
      }
    }
    .title {
      padding: .1rem 0 .1rem .2rem;

      .travel {
        line-height: 0.46rem;
      }
      .go {
        line-height: 0.42rem;
        font-size: 0.24rem;
      }
    }
  }
}
</style>