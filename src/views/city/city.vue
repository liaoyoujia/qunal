<template>
  <div class="box">
    <city-header/>
    <city-search :cities="cities"/>
    <city-list :hotCities="hotCities"/>
    <city-toggle :cities="cities"/>
  </div>
</template>

<script type='text/ecmascript-6'>
import cityHeader from "./cityChildren/cityHeader";
import citySearch from "./cityChildren/citySearch";
import cityToggle from "./cityChildren/cityToggle"
import cityList from "./cityChildren/cityList"
import axios from "axios";

export default {
  data() {
    return {
      cities:{},
      hotCities:[]
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCityInfoSuccess);
    },
    getCityInfoSuccess(res) {
      if(res&&res.data&&res.data.ret){
        let data=res.data.data;
        this.cities=data.cities
        this.hotCities=data.hotCities
        console.log(data,3123)

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
.box{
  background-color: #f5f5f5;
}
</style>