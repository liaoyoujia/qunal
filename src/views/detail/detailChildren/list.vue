<template>
  <div class="list">
    <div class="list-item" v-for="(item,index) in priceType" :key="index">
      <div class="item-title border-bottom">
        <span class="item-icon"></span>
        <span class="item-catery">{{item.name}}</span>
      </div>
      <div class="item-children border-bottom" v-if="item.children">
        <List :priceType="item.children"/>

      </div>
    </div>
    
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name:'List',
  data() {
    return {};
  },
  props:{
    priceType:Array
  }
};
</script>

<style scoped lang='scss'>
.list {
  .list-item {
    .item-title {
      position: relative;
      line-height: 0.7rem;
      .item-icon {
        margin-left: 0.14rem;
        width: 0.4rem;
        height: 0.4rem;
        position: absolute;
        top: 50%;
        margin-top: -0.2rem;

        height: 0.4rem;
        background: url("http://s.qunarzz.com/piao/image/touch/sight/detail.png")
          no-repeat 0 -0.45rem;
        background-size: cover;
      }
      .item-catery {
        margin-left: 0.7rem;
      }
    }
    .item-children{
      margin-left:.7rem;
    }
  }
}
</style>
