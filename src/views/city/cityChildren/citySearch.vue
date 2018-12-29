<template>
  <div class="search">
    <div class="box">
      <input type="text" placeholder="输入城市名或者拼音" v-model.trim="key">
    </div>
    <div class="search-content" ref="wrapper" >
      <ul>
        <li v-for="(item,index) in list" :key="index" class="city-item border-bottom">{{item.name}}</li>
        <!-- <li v-if="!list.length">查询不到匹配数据</li> -->
      </ul>
    </div>
    <div class="search-null" v-if="!list.length&&b">查询不到匹配数据</div>
  </div>
</template>

<script type='text/ecmascript-6'>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      key: "",
      list: [],
      a:true,
      timer: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, { scrollY: true });
  },
  computed:{
    b(){
      if(!this.list.length){
        return false
      }
    }
  },

  
  props: ["cities"],
  watch: {
    key(newValue, oldValue) {
      console.log(newValue, oldValue, 11111);
      console.log(this.key,22222222)
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (newValue == "") {
        this.list = [];
       
        return false;
      }

      this.timer = setTimeout(() => {
        // console.log(1111)
        const arrs = [];
        for (let i in this.cities) {
          this.cities[i].forEach((item, index) => {
            if (
              item.name.indexOf(newValue) > -1 ||
              item.spell.indexOf(newValue) > -1
            ) {
              arrs.push(item);
            }
          });
        }
        this.list = arrs;
      }, 200);
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../../../assets/styles/variable.scss";
.search {
  text-align: center;
  .box {
    width: 100%;
    padding: 0.1rem;
    background: $bgColor;
    input {
      width: 90%;
      box-sizing: border-box;
      padding-left: 35%;
      margin-left: -0.15rem;
      border-radius: 0.1rem;
    }
  }
  .search-content {
    // z-index: 99;
    overflow: hidden;
    position: absolute;
    top: 2.26rem;
    left: 0;
    right: 0;
    bottom: 0;
    .city-item {
      background-color: #fff;
      line-height: 0.7rem;
      text-align: left;
      padding-left: 0.2rem;
    }
  }

  .search-null {
    color: #ccc;
    background-color: #fff;
    padding-top: 0.5rem;
  }
}
</style>