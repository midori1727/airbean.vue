<template>
  <div>
      <Nav/>
      <h1>Din beställning</h1>
      <p v-show="!CartItems.length">Din kundvagn är tom</p>
      <ul v-for="product in CartItems" :key="product.id">
        <li>{{ product.name }}</li>
        <li>{{ product.amount }}st</li>
        <li>{{ product.price * product.amount }}kr</li>
        <button @click="decreaseProduct(product.id)">－</button>
        <button @click="increaseProduct(product.id)">＋</button>
    </ul>

    <div v-if="CartItems.length">
        <p >Total {{ cartTotalPrice }}kr</p>
        <button @click="ckeckOut">Take my money!</button>
    </div>
  </div>

</template>

<script>
import Nav from '../components/Nav.vue'
export default {
  components: { Nav },

    computed: {
        CartItems() {
            return this.$store.state.CartItems
        },
        cartTotalPrice() {
            return this.$store.getters.cartTotalPrice
        }
    },

    methods: {
        decreaseProduct(id) {
            this.$store.commit("decreaseProduct", id)
        },
        increaseProduct(id) {
            this.$store.commit('increaseProduct', id)
        },
        ckeckOut() {
            this.$store.commit('ckeckOut')
            if(!this.$store.state.userInfo.length) {
                this.$router.push('/profile')
            } else {
                this.$router.push('/status')
            }
        }
    }

    

}
</script>

<style scoped>

ul {
    list-style: none;
}

</style>