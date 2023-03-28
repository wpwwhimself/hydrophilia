<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <div id="wrapper">
    <Header :big-logo="true" />
  </div>
</template>

<style scoped>
#wrapper{
  height: calc(100vh - 7em);
  display: flex;
  justify-content: center; align-items: center;
}
header .logo{
  height: min(80vw, 80vh);
}
@media screen and (max-width: 600px){
  #wrapper{
    height: 80vh;
  }
}
</style>