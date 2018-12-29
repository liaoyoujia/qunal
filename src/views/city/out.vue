    <template>
    <div class="contain">
        <city-height/>
        <div class="box">
        <span class="iconfont">&#xe649;&nbsp;</span><span>暂无数据</span>
        </div>
    </div>
    </template>
    
    <script type='text/ecmascript-6'>
    import cityHeight from './cityChildren/cityHeader.vue'
      export default {
        data () {
          return {
          }
        },
        components:{
            cityHeight
        }
      }
    </script>
    
    <style scoped lang='scss'>
    .box{
        text-align: center;
        padding-top:3rem;
    }
    
    </style>