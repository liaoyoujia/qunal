<template>
  <div class="box">
    <city-header/>
    <city-search :cities="cities" @hideList="hideList"/>
    <city-list
      :hotCities="hotCities"
      :cities="cities"
      :changeString="changeString"
      :v-show="dataList"
    />
    <city-toggle v-show="dataList" :cities="cities" @changeData="changeData"/>
  </div>
</template>

<script type='text/ecmascript-6'>
import cityHeader from "./cityChildren/cityHeader";
import citySearch from "./cityChildren/citySearch";
import cityToggle from "./cityChildren/cityToggle";
import cityList from "./cityChildren/cityList";
import axios from "axios";

export default {
  data() {
    return {
      cities: {},
      changeString: "",
      hotCities: [],
      dataList: true
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCityInfoSuccess);
    },
    getCityInfoSuccess(res) {
      if (res && res.data && res.data.ret) {
        let data = res.data.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
        console.log(data, 3123);
      }
    },
    changeData(data) {
      this.changeString = data;
    },
    hideList(adc) {
      if (adc) {
        this.dataList = true;
      } else {
        this.dataList = false;
      }
    }
  },
  created() {
    this.getCityInfo();
  },

  components: {
    cityHeader,
    citySearch,
    cityList,
    cityToggle
  }
};
</script>

<style scoped lang='scss'>
.box {
  background-color: #f5f5f5;
}
</style>