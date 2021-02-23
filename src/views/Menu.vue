<template>
    <div class="wrapper">
        <Header />
        <article>
            <h1> Meny </h1>
            <div>Kundvagn: {{ getCartAmount }}st</div>
        </article>
<Footer />
    </div>
</template>

<script>
// @ is an alias to /src


import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    name: 'Menu',
  components: {
    Header,
    Footer,
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


</style>