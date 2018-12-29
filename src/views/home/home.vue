<template>
<div class='box'>
    <home-header/>
    <home-swiper :imags='swiperList'/>
    <home-tab :icons='iconList'/>
    <home-list :lists='recommendList'/>
    <home-weekday :weekdays='weekendList'/>
    <div class="bottom">Qunal Web触屏版</div>

</div>
</template>

<script type='text/ecmascript-6'>
import homeHeader from './childrenHome/homeHeader'
import homeSwiper from './childrenHome/homeSwiper'
import homeTab from './childrenHome/homeTab'
import homeList from './childrenHome/homeList'
import homeWeekday from './childrenHome/homeWeekday'
import axios from 'axios'

  export default {
    data () {
      return {
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
    },
    components:{
        homeHeader,
        homeSwiper,
        homeTab,
        homeList,
        homeWeekday
    },
    created(){
      this.initImage()
    },
    methods:{
      initImage(){
        axios.get('/api/index.json?city='+'重庆')
        .then(this.getHomeInfoSuccess)
      },
      getHomeInfoSuccess(res){
        if(res&&res.data&&res.data.data){
          console.log(res.data.data)
          let data=res.data.data
          this.swiperList=data.swiperList
          this.iconList=data.iconList
          this.recommendList=data.recommendList
          this.weekendList=data.weekendList
        }
      }

    }
  }
</script>

<style scoped lang='scss'>
.box{
  background-color: #f5f5f5;
  .bottom{
    line-height: .8rem;
    text-align: center;

  }
}


</style>