<template>
  <div>

      <!-- <Nav/> -->
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      <form @submit.prevent="onSubmit">
      <label for="name">Namn</label>
      <input type="text" v-model="name">
      <label for="ePost">Epost</label>
      <input type="text" v-model="ePost">
      <input type="radio" name="GDPR" value="GDPR">
      <label for="GDPR">GDPR OK!</label>
      <input type="submit" value="Brew me a cup!">
      </form>

      <p v-if="errors.length">
      <b>Korrigera följande fel:</b>
        <ul>
            <li v-for="error in errors" :key="error.index">
               {{ error }}
            </li>
        </ul>
    </p>      
  </div>
</template>

<script>

// import Nav from './Nav.vue'
export default {

    data() {
        return {
            name: '',
            ePost: '',
        }
    },

    components: {
        // Nav
    },

    computed: {
        errors() {
            return this.$store.state.errors
        }
    },

    methods: {
        onSubmit() {
            const info = {
                name: this.name,
                ePost: this.ePost
            }
            this.$store.commit('addUserInfo', info)
            this.name = ''
            this.ePost = ''
            if(this.$store.state.orderHistory.length > 0 && this.$store.state.userInfo.length >  0){
                this.$router.push('/status')
                console.log(this.$store.state.orderHistory)
            }
        }
    }
}
</script>

<style>

</style> 