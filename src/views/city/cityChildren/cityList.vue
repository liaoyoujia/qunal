<template>
  <div class="list">
    <!-- <h1>当前城市</h1> -->
    <div class="current">
      <div class="title">当前城市</div>
      <div class="address">当涂</div>
    </div>
    <div class="hot">

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
.list {
  .title {
    padding-left: 0.3rem;
    line-height: 0.72rem;
  }
  .address{
      line-height: .84rem;
      background-color: #fff;
  }
}
</style>