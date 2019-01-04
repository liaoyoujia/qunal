<template>
  <div class="box">
    <ul v-for="(value,key,index) in cities" :key="index">
      <li class="title">{{key}}</li>
      <li></li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {};
  },
  props: ["cities"],
  mounted() {}
};
</script>

<style scoped lang='scss'>
.box {
  .title {
    width: 100%;
    height: 0.72rem;
    box-sizing: border-box;
    padding-left: 0.3rem;
    line-height: 0.72rem;
    background-color: #f5f5f5;
  }
}
</style>