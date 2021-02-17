<template>
<div class="order-history-wrapper">
    <!-- <Nav/> -->
    <img src="../assets/Profile_img.svg" alt="profile-image">
    <h1>{{ getUserName }}</h1>
    <p>{{ getUserEmail }}</p>

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

<style scoped>

.order-history-wrapper {
    background-color: #2F2926;
    color: white;
    height: 100vh;
}

img {
    padding-top: 50px;
}

h1 {
    font-family: 'PT Serif', serif;
}

ul {
    list-style: none;
}

</style>