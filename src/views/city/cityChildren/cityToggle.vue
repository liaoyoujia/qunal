<template>
  <div class="box">
    <ul>
      <li
        v-for="(item,index) in dataList"
        :key="index"
        :ref="item"
        @click="toggleWrod"
        @touchstart="handleStart"
        @touchmove="handleMove"
        @touchend="handlEnd"
      >{{item}}</li>
    </ul>
  </div>
</template>


<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      touchStatus: false
    };
  },

  computed: {
    dataList() {
      let dataList = [];
      for (let key in this.cities) {
        dataList.push(key);
      }
      return dataList;
    }
  },
  methods: {
    toggleWrod(e) {
      this.$emit("changeData", e.target.innerText);
    },
    handleStart() {
      this.touchStatus = true;
    },
    handleMove(e) {
      if (this.touchStatus) {
        console.log(e, 1312312312);
      }
    },
    handlEnd() {
      this.touchStatus = false;
    }
  },

  props: ["cities"],

  mounted() {}
};
</script>  

<style scoped lang='scss'>
.box {
  background-color: #fff;
  position: fixed;
  top: 3rem;
  right: 0.3rem;
  color: #00bcd4;
  li {
    font-size: 14px;
    line-height: 0.4rem;
  }
}
</style>