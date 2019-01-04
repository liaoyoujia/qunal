<template>
  <div class="list">
    <!-- <h1>当前城市</h1> -->
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
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {};
  },
  props:{
    hotCities:Array
  },
  mounted(){
    console.log(this.hotCities,23432)
  }
};
</script>

<style scoped lang='scss'>
.list {
  color: #333;
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
      padding:.2rem .1rem;
      width: 100%;
      justify-content: space-around;
      // height:1.4rem;
      flex-wrap: wrap;
      .hot-item{
        width: 2rem;
        height:.44rem;
        line-height:.44rem;
        border:1px solid #eee;
        margin:.1rem 0;
        border-radius: .2rem;
        text-align: center;
        border-radius: .1rem;
      }
    }
  }
}
</style>