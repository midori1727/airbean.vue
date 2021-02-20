<template>
  <div>
      <div class="hamburger_btn" v-on:click='ActiveBtn=!ActiveBtn'>
      <span class="line line_01" v-bind:class="{'btn_line01':ActiveBtn}"></span>
      <span class="line line_02" v-bind:class="{'btn_line02':ActiveBtn}"></span>
      <span class="line line_03" v-bind:class="{'btn_line03':ActiveBtn}"></span>
    </div>
    <transition name="menu">
        <div class="menu" v-show="ActiveBtn">
          <!-- <router-link to="/">Home</router-link> -->
          <router-link to="/menu">Meny</router-link>
          <router-link to="/about">Vårt Kaffe</router-link> 
          <router-link to="/profile">Min Profil</router-link> 
          <router-link to="/status">Orderstatus</router-link>
    
        </div>
    </transition>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
    data() {
        return{
            ActiveBtn: false
        }
    }
}
</script>

<style>

.hamburger_btn {
  position: fixed; 
  top: 0;
  left: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: #333333;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 16px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 26px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 36px;
  transition: 0.4s ease;
}


.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}


.menu-enter-active, .menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}

.menu {
  background-color: rgba(247, 240, 240, 0.671);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 80rem;
  top: 0;
  left: 0;
}
.menu a {
  color: rgb(206, 197, 197);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 2rem;
}

</style>