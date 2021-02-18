<template>
  <div>
     
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


export default {

    components: {
        ProfileForm,
        OrderHistory
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