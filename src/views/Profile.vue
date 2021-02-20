<template>
  <div>
      <Nav />
     
      <div v-if="!userInfo.length">
          <ProfileForm/>
      </div>
      <div v-else>
          <OrderHistory/>
      </div>
  </div>
</template>

<script>
import ProfileForm from '../components/ProfileForm.vue'
import OrderHistory from '../components/OrderHistory.vue'
import Nav from '../components/Nav.vue'


export default {

    components: {
        ProfileForm,
        OrderHistory,
        Nav
    },

    computed: {
        userInfo() {
            return this.$store.state.userInfo
        }
    }


}
</script>

<style>

</style>