<template>
  <div class="tab">
    <swiper :options="swiperOption" V-if="row.length">
      <swiper-slide v-for="(item,index) in row" :key="index" class="tab-item">
        <div v-for="imgsItem in item" :key="imgsItem.id" class="img-box">
          <img :src="imgsItem.imgUrl" alt>
          <span class="title">{{imgsItem.title}}</span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    icons: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },

  computed: {
    row(){
      let list=[];
      this.icons.forEach((item,index)=>{
        let number = Math.floor(index/8);
        if (! list[number]) {
          list[number] = [];
        } 
          list[number].push(item);
      })
      return list
    }
  }
};
</script>

<style scoped lang='scss'>
.tab{
  background: #fff;
  border-bottom:.2rem solid #efefef ;
.tab-item{
  display: flex;
  flex-wrap: wrap;
  .img-box{
    width: 25%;
    padding:.1rem 0;
    text-align: center;
    // display: flex;
    // flex-direction: column;
    // justify-content:center;
    // align-items: center;
    img{
    width:1.4rem;
    height:1.4rem;

  }
  .title{
    display: block;
  }
  }

}
}
</style>