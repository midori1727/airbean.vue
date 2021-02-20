<template>
    <div class="wrapper">
        <Header />
        <Nav />
        <article>
            <h1> Vårt kaffe </h1>
            <p class="bold-text">Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
            </p>
            <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
            </p>
            <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
            </p>
        </article>
<section>
    <img class="owner" src="../assets/Owner.png">
</section>
<Footer />
    </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav.vue'
export default {
    name: 'About',
  components: {
    Header,
    Footer,
    Nav
  }
    }
</script>

<style scoped>

h1 {
    font-family: 'PT Serif', serif;
    font-size: 4.5rem;
    line-height: 1.4em;
    font-weight: 700;
} 

.bold-text{
font-family: 'Work Sans', sans-serif;
    font-size: 1em;
    padding: 16px 0;
    font-weight: bold;
}

h3 {
    font-weight: 700;
    font-size: 2em;
}
p {
    font-family: 'Work Sans', sans-serif;
    font-size: 1em;
    padding: 16px 0;
}
/* Layout */
html, section, article {
    background: #f3e4e1;
    overflow: hidden;
}

.wrapper {
    background: #f3e4e1;
    height:33vh;
    margin-left: -1%;
    margin-right: -1%;
    margin-bottom: -1%;
}

article {
  padding: 0 20% 0 20%;
  
}
article p {
    line-height: 1.5;
}

.owner {
  margin-top: 5em;
}
</style>
