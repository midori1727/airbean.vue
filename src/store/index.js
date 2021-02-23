import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors:[],
    userInfo: [],
    orderHistory:[],
  },

  mutations: {
  
    decreaseProduct(state, payload){
      const product = state.CartItems.find(item => item.id == payload)
      const indexOf = state.CartItems.indexOf(product)
      if(product.amount > 1){
        product.amount -= 1
      }else {
        state.CartItems.splice(indexOf, 1)
      }
    },

    increaseProduct(state, payload) {
      const product = state.CartItems.find(item => item.id == payload)
      product.amount += 1
    },

    addUserInfo(state, payload) {
      state.errors.splice(0,1)
      let flag = 0
      const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      if(payload.name == ''){
        flag =1
        state.errors.push('Ange ditt namn')
      } else if(payload.ePost === ''){
        flag =1
        state.errors.push('Ange din e-postadress')
      } else if(!regexp.test(payload.ePost)){
        flag =1
        state.errors.push('Se till att din e-postadress stämmer')
      }
      if(flag) {
        return 
      } else {
        state.userInfo.push(payload)
      } 
    },
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

  actions: {
  },
  modules: {
  }
})
