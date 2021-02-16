<template>
<div class="wrapper">
<main class="main">
    <img alt="logo" src="../assets/airbean_logo.svg"/>
</main>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {
  
  }
};
</script>

<style scoped>

.wrapper {
    height: 89vh;
    margin-left: -1%;
  margin-right: -1%;
  margin-bottom: -1%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #38846d;
    text-align: center;
    background-image: url("../assets/header_right.svg"), url("../assets/header_left.svg");
    background-position: right, left;
    background-repeat: no-repeat, no-repeat;
} 




</style>