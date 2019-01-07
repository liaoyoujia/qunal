import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    city: localStorage.city || '重庆',
};

const mutations = {
    changeCity(state, city) {
        state.city = city;
        try {
            localStorage.city = city
        } catch(e){
            console.log("err")
        }
    },

};
const store = new Vuex.Store({
    state,
    mutations
});
export default store;