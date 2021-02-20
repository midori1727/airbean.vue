<template>
    <div class="wrapper">
        <Header />
        <Nav />
        <article>
            <h1> Meny </h1>
            <div>Kundvagn: {{ getCartAmount }}st</div>
    <ul v-for="product in menuItems" :key="product.id">
        <li>{{ product.name}}</li>
        <li>{{ product.description}}</li>
        <li> {{ product.price}}kr</li>
        <button @click="addCart(product)">＋</button>
    </ul>
    <button @click="toCart">To Card</button>
        </article>
<Footer />
    </div>
</template>

<script>
// @ is an alias to /src


import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav.vue'
export default {
    name: 'Menu',
  components: {
    Header,
    Footer,
    Nav
  },
  computed: {
        menuItems() {
            return this.$store.state.menuItems;
        },
        getCartAmount() {
        return this.$store.getters.getCartAmount
        }
    },
    
    methods: {
        addCart(product) {
            this.$store.commit('addCart', product)
        },
        toCart() {
            this.$router.push('/cart/')
        },
    }
    }
</script>

<style scoped>

.wrapper {
    background: #f3e4e1;
    height:100vh;
    margin-left: -1%;
    margin-right: -1%;
    margin-bottom: -1%;
}


h1 {
    font-family: 'PT Serif', serif;
    font-size: 4.5rem;
    line-height: 1.4em;
    font-weight: 700;
} 

article {
    background: #f3e4e1;
    overflow: hidden;
}

ul {
    list-style: none;
}

</style>