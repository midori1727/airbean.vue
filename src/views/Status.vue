<template>
  <div>
      <div v-if="orderHistory.length > 0">
          <p>{{ getOrderNumber }}</p>
          <p>Din beställning är på väg!</p>
          <button @click="toTopPage">Ok, cool!</button>
      </div>
      <div v-else>
          <!-- <Nav/> -->
          <p>Du har ingen status just nu</p>
      </div>
      
  </div>
</template>

<script>
// import Nav from '../components/Nav.vue'

export default {
//   components: { Nav },

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

<style>

</style>