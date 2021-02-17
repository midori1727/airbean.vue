import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderHistory: [],
    errors: [],
    userInfo: [],
  },
  getters: {
    getUserName: state => {
      return state.userInfo[0].name
    },
    getUserEmail: state => {
      return state.userInfo[0].ePost
    },
    getOrderNumber: state => {
      return  state.orderHistory.slice(-1)[0].orderNumber
    },
    getOrderHistryTotalPrice: state => {
      return state.orderHistory.reduce((total, product) => {
        return total + product.total
      }, 0)
    }
  },
  mutations: {
    addUserInfo(state, payload) {
      state.errors.splice(0,1)
      let flag = 0
      const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      if(payload.name == ''){
        flag =1
        state.errors.push('Ange ditt namn')
      } else if(payload.name.match(/^[0-9]+$/)) {
        flag =1
        state.errors.push('Använd bara bokstäver')
      }else if(payload.ePost === ''){
        flag =1
        state.errors.push('Ange din e-postadress')
      } else if(!regexp.test(payload.ePost)){
        flag =1
        state.errors.push('Se till att din e-postadress stämmer')
      } else if(!payload.radio) {
        flag =1
        state.errors.push('Godkänn GDPR')
      }
      if(flag) {
        return 
      } else {
        state.userInfo.push(payload)
      } 
    },
  },
  actions: {},
  modules: {}
});
