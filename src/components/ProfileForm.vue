<template>
  <div>
      <!-- <Nav/> -->
      <div class="plofile-form-wrapper">
          <img src="../assets/airbean_a_logo.svg" alt="airbean_a_logo">
          <h1>Välkommen till AirBean-familjen!</h1>
          <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
          <form @submit.prevent="onSubmit">
              <div class="input-form">
                  <label for="name">Namn</label>
                  <input type="text" v-model="name">
                  <label for="ePost">Epost</label>
                  <input type="text" v-model="ePost">
              </div>
              <div class="radio">
                  <input type="radio" name="GDPR" value="GDPR">
                  <label for="GDPR">GDPR OK!</label>
              </div>
              <div class="button">
                  <input type="submit" value="Brew me a cup!">
              </div>
              
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

<style scoped>

.plofile-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #2F2926;
    background-color: #F3E4E1;
}

.radio {
    text-align: left;
     margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.input-form input {
     display: block;
     border-radius: 10px;
     padding: 1rem 1.5rem;
}

.input-form label {
    text-align: left;
    display: block;
}

label {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}





</style> 