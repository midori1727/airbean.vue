import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: [
      {
        id: 1,
        name: 'Bryggkaffe',
        description: 'Bryggd på månadens bönor',
        price: 49
      },
      {
        id: 2,
        name: 'Caffè Doppio',
        description: 'Bryggd på månadens bönor',
        price: 49
      },
      {
        id: 3,
        name: 'Cappuccino',
        description: 'Bryggd på månadens bönor',
        price: 49
      },
      {
        id: 4,
        name: 'Latte Macchiato',
        description: 'Bryggd på månadens bönor',
        price: 49
      },
      {
        id: 5,
        name: 'Kaffe Latte',
        description: 'Bryggd på månadens bönor',
        price: 49
      },
      {
        id: 6,
        name: 'Cortado',
        description: 'Bryggd på månadens bönor',
        price: 39
      }
    ],

    CartItems: [],
    errors:[],
    userInfo: [],
    orderHistory:[],
  },

  mutations: {
  
    addCart(state, product) {
      let itemObj = state.CartItems.find(item => item.id == product.id)
      if(itemObj) {
        itemObj.amount += 1
      } else {
        state.CartItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          amount: 1
        })
      }
    },
   
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

    ckeckOut(state) {
      function formatDate(dt) {
        var y = ('0' + dt.getFullYear()).slice(-2);
        var m = ('0'+ (dt.getMonth()+1)).slice(-2);
        var d = ('0' + dt.getDate()).slice(-2);
        return (y + '/' + m + '/' + d);
      }
      let date= formatDate(new Date());

      const source ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      const N=13
      let number = '#' + Array.from(Array(N)).map(()=>source[Math.floor(Math.random()*source.length)]).join('')

      const totalPrice= state.CartItems.reduce((total, product) => {
        return total + product.price * product.amount
      }, 0)

      state.orderHistory.push({
        orderdDate: date,
        orderNumber: number,
        total: totalPrice
      })
      state.CartItems = []
    }
  },

  getters: {
    CartItems: state => {
      return state.CartItems
    },

    cartTotalPrice: (state, getters) => {
      return getters.CartItems.reduce((total, product) => {
        return total + product.price * product.amount
      }, 0)
    },
    
    getCartAmount: (state, getters) => {
      return getters.CartItems.reduce((total, product) => {
        return total + product.amount
      }, 0)
    },
   
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
