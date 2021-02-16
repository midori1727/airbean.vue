<template>
<div>
    <!-- <Nav/> -->
    <h1>{{ getUserName }}</h1>
    <h1>{{ getUserEmail }}</h1>


    <h1>Orderhistorik</h1>
    <div v-if="orderHistory.length">
        <ul v-for="order in orderHistory" :key="order.orderNumber">
            <li>{{ order.orderNumber }}</li>
            <li>{{ order.orderdDate }}</li>
            <li>{{ order.total }}kr</li>
        </ul>
        <p>Totalt spenderat</p>
        <p>{{ getOrderHistryTotalPrice }}kr</p>
    </div>
    <div v-else>
        <p>Du har inget i din Orderhistorik</p>
    </div>
    

    

</div>
  

</template>

<script>

// import Nav from './Nav.vue'

export default {
    components: {
        // Nav
    },
    computed: {
        getUserName() {
            return this.$store.getters.getUserName
        },
        getUserEmail() {
             return this.$store.getters.getUserEmail
        },
        orderHistory() {
            return this.$store.state.orderHistory
        },
        getOrderHistryTotalPrice() {
            return this.$store.getters.getOrderHistryTotalPrice
        }
    }

}
</script>

<style>

ul {
    list-style: none;
}

</style>