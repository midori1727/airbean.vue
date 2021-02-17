<template>

<div class="order-history-wrapper">
    <!-- <Nav/> -->
    <header></header>
    <img src="../assets/Profile_img.svg" alt="profile-image">
    <div class=user_name>
         <h1>{{ getUserName }}</h1>
         <p>{{ getUserEmail }}</p>
    </div>

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

header {
    background: url('../assets/header.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: cover;
    height: 29vh;
    width: 100%;
    background-color: #2F2926;
}


img {
    padding-top: 50px;
}

h1 {
    font-family: 'PT Serif', serif;
}

.user_name h1 {
     margin-bottom: 0px;
}

.user_name p {
    margin-top: 0px;
}

ul {
    list-style: none;
}

</style>