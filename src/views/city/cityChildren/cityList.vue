<template>
  <div class="list" ref="box">
    <!-- <h1>当前城市</h1> -->
    <div class="contain">
      <div class="current">
        <div class="title">当前城市</div>
        <div class="address">
          <span>当涂</span>
        </div>
      </div>
      <div class="hot">
        <div class="title">热门城市</div>
        <div class="address">
          <div class="hot-item" v-for="(item,index) in hotCities" :key="index">{{item.name}}</div>
        </div>
      </div>
      <div class="content">
        <ul v-for="(value,key,index) in cities" :key="index">
          <li class="title" :ref="key">{{key}}</li>
          <li v-for="(item,index) in value" :key="index" class="items border-bottom">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import BScroll from "better-scroll";

export default {
  data() {
    return {};
  },

  props: {
    hotCities: Array,
    cities: Object,
    changeString: String
  },
  watch: {
    changeString(newValue) {
      if (newValue != "") {
        console.log(newValue, 11111111);
        let ele = this.$refs[newValue][0];
        this.scroll.scrollToElement(ele);
      }
    }
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.box, { scrollY: true });
  }
};
</script>

<style scoped lang='scss'>
.list {
  color: #333;
  overflow: hidden;
  position: absolute;
  top: 2.22rem;
  left: 0;
  right: 0;
  bottom: 0;
  .current {
    .title {
      padding-left: 0.3rem;
      line-height: 0.72rem;
    }
    .address {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 0.84rem;
      background-color: #fff;
      span {
        display: inline-block;
        width: 2rem;
        margin-left: 0.16rem;
        border-radius: 0.1rem;
        height: 0.44rem;
        text-align: center;
        color: #fff;
        line-height: 0.44rem;
        background-color: #00bcd4;
      }
    }
  }
  .hot {
    .title {
      width: 100%;
      height: 0.72rem;
      line-height: 0.72rem;
      padding-left: 0.3rem;
    }
    .address {
      display: flex;
      background-color: #fff;
      padding: 0.2rem 0.1rem;
      width: 100%;
      justify-content: space-around;
      // height:1.4rem;
      flex-wrap: wrap;
      .hot-item {
        width: 2rem;
        height: 0.44rem;
        line-height: 0.44rem;
        border: 1px solid #eee;
        margin: 0.1rem 0;
        border-radius: 0.2rem;
        text-align: center;
        border-radius: 0.1rem;
      }
    }
  }
  .content {
    background-color: #fff;
    .title {
      width: 100%;
      height: 0.72rem;
      box-sizing: border-box;
      padding-left: 0.3rem;
      line-height: 0.72rem;
      background-color: #f5f5f5;
    }
    .items {
      line-height: 0.7rem;
      height: 0.7rem;
      padding-left: 0.24rem;
      font-size: 0.26rem;
      color: #333;
    }
  }
}
</style>