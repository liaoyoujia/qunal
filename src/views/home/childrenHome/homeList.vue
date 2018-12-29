<template>
  <div class="list">
    <div class="top">
      <img
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt="猜你喜欢"
        class="heart"
      >
      <span>猜你喜欢</span>
    </div>
    <ul class="main">
      <router-link tag="li"  :to="'/detail/'+item.id" class="item border-top" v-for="item in lists" :key="item.id" v-if="lists.length">
        <div class="left">
          <img
            :src="item.imgUrl"
            alt
          >
        </div>
        <div class="right">
          <p class="name">{{item.title}}</p>
          <p class="address">{{item.address}}</p>
          <p class="price-item">
            <span class="price-symbol">￥</span>
            <span class="price-value">{{item.price}}</span>
            <span class='price-qi'>起</span>
          </p>
          <div class="detail">查看详情</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
    props:{
        lists:Array
    },
  data() {
    return {};
  }
};
</script>

<style scoped lang='scss'>
@import '../../../assets/styles/variable.scss';
.list {
    background-color: #fff;
  .top {
    padding: 0.2rem 0 0.2rem 0.2rem;
    line-height: 0.47rem;
    font-size: 0.3rem;

    .heart {
      vertical-align: baseline;
      width: 0.32rem;
      height: 0.32rem;
    }
  }
  .main {
    .item {
      display: flex;
      padding: 0.2rem 0;
      img {
        width: 2rem;
        height: 2rem;
      }
      .right {
        flex: 1;
        min-width: 0;
        position: relative;
        padding-left: 0.22rem;
        .name {
          margin-top: 0.28rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .address {
            font-size: .24rem;
          margin-top: 0.22rem;
        }
        .price-item {
          font-size: 0;
          margin-top: 0.26rem;
          .price-symbol {
            color: #ff8300;
            vertical-align: bottom;
            font-size: 0.24rem;
          }
          .price-value {
            color: #ff8300;
            font-size: 0.36rem;
          }
          .price-qi{
              font-size: .28rem;
          }
        }
        .detail{
            color:#fff;
            padding:.06rem;
            margin-right:.2rem;
            border-radius: .01rem;
            position: absolute;
            right:0;
            bottom: 0;
            background-color: $bgColor;
        }
      }
    }
  }
}
</style>