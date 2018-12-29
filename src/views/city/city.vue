<template>
  <div class="box">
    <city-header/>
    <city-search :cities="cities"/>
    <city-list/>
  </div>
</template>

<script type='text/ecmascript-6'>
import cityHeader from "./cityChildren/cityHeader";
import citySearch from "./cityChildren/citySearch";
import cityList from "./cityChildren/cityList"
import axios from "axios";

export default {
  data() {
    return {
      cities:[]
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
        console.log(this.cities,3123)

      }
    }
  },
  created() {
    this.getCityInfo();
  },

  components: {
    cityHeader,
    citySearch,
    cityList
  }
};
</script>

<style scoped lang='scss'>
.box{
  background-color: #f5f5f5;
}
</style>