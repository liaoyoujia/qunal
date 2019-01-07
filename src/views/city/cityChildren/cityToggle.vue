<template>
  <div class="box" ref="box">
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
      touchStatus: false,
      startY: 0,
      timer: null
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
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          let toggleY = e.touches[0].clientY;
          let trueY = toggleY - this.startY;
          let index = Math.floor(trueY / 20);
          if (index >= 0 && index < this.dataList.length) {
            this.$emit("changeData", this.dataList[index]);
          }
        }, 16);
      }
    },
    handlEnd() {
      this.touchStatus = false;
    }
  },

  props: ["cities"],

  mounted() {
    this.startY = this.$refs.box.offsetTop;
  }
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