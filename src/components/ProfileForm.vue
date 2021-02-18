<template>
  <div>
      <div class="background">
          <header></header>
      </div>
      <!-- <Nav/> -->
      <div class="plofile-form-wrapper">
          <img src="../assets/airbean_a_logo.svg" alt="airbean_a_logo">
          <h1>Välkommen till AirBean-familjen!</h1>
          <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>

          <p class="error" v-if="errors.length">
          <b>Korrigera följande fel:</b>
              <ul>
                  <li v-for="error in errors" :key="error.index">
                  {{ error }}
                  </li>
              </ul>
          </p>    
          <form @submit.prevent="onSubmit">
              <div class="input-form">
                  <label for="name">Namn</label>
                  <input type="text" v-model="name">
                  <label for="ePost">Epost</label>
                  <input type="text" v-model="ePost">
              </div>
              <div class="radio">
                  <input type="radio" name="GDPR" value="GDPR" v-model="radio">
                  <label for="GDPR">GDPR OK!</label>
              </div>
              <div class="button">
                  <input type="submit" value="Brew me a cup!">
              </div>
          </form>

            

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
            radio: false
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
                ePost: this.ePost,
                radio: this.radio
            }
            this.$store.commit('addUserInfo', info)
            if(this.$store.state.orderHistory.length > 0 && this.$store.state.userInfo.length >  0){
                this.$router.push('/status')
                console.log(this.$store.state.orderHistory)
            }
        }
    }
}
</script>

<style scoped>

.background {
    background-color: #2F2926;
    height: 130vh;

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

.plofile-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #2F2926;
    background-color: #F3E4E1;
    height: 100vh;
    margin-top: -50rem;
    width: 90%;
    margin-left:auto;
    margin-right:auto;
}

h1 {
    font-family: 'PT Serif', serif;
}

.radio {
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.input-form input {
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #2F2926;
    background-color: #F3E4E1;
    margin-bottom: 10px;
}

.input-form label {
    text-align: left;
    display: block;
}

label {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    margin-bottom: 5px;
}

.button {
    margin-top: 50px;
    margin-bottom: 50px;
}

.button input {
    width: 12rem;
    height: 3rem;
    border-radius: 2rem;
    outline: none;
    border: 1px solid #2F2926;
    background-color: #2F2926;
    color: white;
    font-family: 'PT Serif', serif;
    font-size: 1rem;
}

.button input:hover {
    background-color: #E5674E;
    border: none;
}

ul {
    list-style: none;
    padding-left: 0px;
}

.error {
    color: rgb(238, 10, 10);
}





</style> 