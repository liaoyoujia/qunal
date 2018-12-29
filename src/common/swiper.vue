<template>
<div class="box">
  <swiper :options="swiperOption" >
    <swiper-slide v-for="(slide,index) in gallaryImgs" :key="index" class="swiper"><img :src="slide" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          paginationType: 'fraction',

        }
      }
    };
  },
  props:{
      gallaryImgs:Array
  }
};
</script>

<style scoped lang='scss'>
.box{
    position:fixed;
    top:0;
    left: 0;
    z-index: 99;
    right: 0;
    bottom: 0;
    background-color: #000;
    .swiper{
        overflow: hidden;
        width:100%;
        margin-top:50%;
        height:0;
        padding-bottom: 68.8%;
    
        img{
            width: 100%;
        }
    }
}

</style>