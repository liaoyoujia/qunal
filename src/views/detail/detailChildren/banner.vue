<template>
  <div class="box">
    <div class="content">
      <div class="img-box">
        <img
          :src="bannerImage"
          alt
        >
      </div>
      <div class="bottom">
        <div class="shadow">
          <span class="iconfont">&#xe872;</span>
          <span>&nbsp;8</span>
        </div>
        <div class="title">
          <span>{{sightName}}</span>
          <span class="iconfont">&#xe62d;</span>
        </div>
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
    bannerImage:String,
    sightName:String
  }
};
</script>

<style scoped lang='scss'>
.box {
  .content {
    position: relative;
    .img-box {
      width: 100%;
      overflow: hidden;
      height: 0;
      padding-bottom: 55%;
      img {
        width: 100%;
      }
    }
    .bottom {
      padding: 0.12rem 0.2rem;
      position: absolute;
      left: 0;
      right: 0;
      color: #fff;
      bottom: 0;
      background-image: linear-gradient(
        top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.8)
      );
      .shadow {
        width: 1.2rem;
        text-align: center;
        margin-bottom: 0.12rem;
        height: 0.34rem;
        border-radius: 0.1rem;
        background: rgba(0, 0, 0, 0.6);
      }
      .title {
        width: 100%;
        // display: inline-flex;
        .iconfont {
          float: right;
        }
      }
    }
  }
}
</style>