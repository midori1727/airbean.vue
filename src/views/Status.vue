<template>
  <div class="wrapper">

      
      <div v-if="orderHistory.length > 0">
          <p>{{ getOrderNumber }}</p>
          <img src="../assets/status_img.svg" alt="airbean_image">
          <h1>Din beställning är på väg!</h1>
          <p><span>13</span> minuter</p>
          <button @click="toTopPage">Ok, cool!</button>
      </div>
          <div class="no_history" v-else>
          <Nav/>
          <p>Du har ingen status just nu</p>
          <button @click="toTopPage">Ok, cool!</button>
      </div>
      
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  components: { Nav },

    computed: {
        orderHistory() {
            return this.$store.state.orderHistory
        },
        getOrderNumber() {
            return this.$store.getters.getOrderNumber
        }
    },
    methods: {
        toTopPage() {
            this.$router.push('/')
        }
    }
    
}
</script>

<style scoped>

.wrapper {
    background-color: #e5674e;
    color: white;
    height: 100vh;
}

img {
    margin-top: 50px;
}

h1 {
    font-family: 'PT Serif', serif;
}

span {
    font-weight: bolder ;
}

button {
    width: 12rem;
    height: 3rem;
    border-radius: 2rem;
    outline: none;
    border: 1px solid white;
    color: #2F2926;
    background-color: white;
    font-family: 'PT Serif', serif;
    font-size: 1.5rem;
    font-weight: bolder;
}

button:hover {
    background-color: #2F2926;
    color: white;
    border: none;
}

.no_history {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.no_history p {
    margin-top: 100px;
    margin-bottom: 50px;
}

</style>