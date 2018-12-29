 <template>
  <div class="wrap">
    <swiper :options="swiperOption" v-if="imags.length">
      <swiper-slide v-for="item in imags" :key="item.id">
        <img :src="item.imgUrl"  class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
 <script type='text/ecmascript-6'>
export default {
  props: {
    imags: Array
  },

  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>
 <style scoped lang='scss'>
.wrap {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  .swiper-img{
    width: 100%;
  }
}
</style>