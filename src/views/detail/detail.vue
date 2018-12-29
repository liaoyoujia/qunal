<template>
  <div class="detail">
    <Header :sightName="sightName"/>
    <Banner :bannerImage="bannerImg" :sightName="sightName" @click.native="showImage "/>
    <Fade>
    <Swiper :gallaryImgs="gallaryImgs" v-if="blackImage" @click.native="hiddenImage" key="image"/>
    </Fade>
    <div class="content">
      <List :priceType="priceType"/>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import Banner from "./detailChildren/banner";
import List from "./detailChildren/list";
import Header from "./detailChildren/header";
import Swiper from "../../common/swiper";
import Fade from "../../common/fade";
import axios from "axios";

export default {
  name: "Detail",
  data() {
    return {
      bannerImg: "",
      pageId: 0,
      sightName: "",
      gallaryImgs: [],
      priceType: [],
      blackImage: false
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailInfoSuccess);
    },
    getDetailInfoSuccess(res) {
      if (res && res.data && res.data.ret) {
        var data = res.data.data;
        console.log(data, 321312);
        this.bannerImg = data[this.pageId].bannerImg;
        this.sightName = data[this.pageId].sightName;
        this.gallaryImgs = data[this.pageId].gallaryImgs;
        this.priceType = data[this.pageId].priceType;
      }
    },
    hiddenImage() {
      this.blackImage = false;
    },
    showImage() {
      this.blackImage = true;
    }
  },
  created() {
    this.getDetailInfo();
  },
  activated() {
    this.getDetailInfo();
    this.pageId = Number(this.$route.params.id) - 1;
  },

  components: {
    Banner,
    List,
    Header,
    Swiper,
    Fade
  }
};
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  height: 20rem;
}
</style>