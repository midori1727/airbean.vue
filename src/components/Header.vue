<template>
  <header> <div id="abovepic"></div></header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>
header {
    
    background-color: #f3e4e1;;
}
#abovepic {
        background: url('../assets/header.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-size: cover;
        height: 29vh;
        width: 100%;
        background-color: #f3e4e1;;     
}
</style>