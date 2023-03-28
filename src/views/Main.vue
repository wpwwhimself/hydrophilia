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
  height: calc(100vh - 13.5em);
  display: flex;
  justify-content: center; align-items: center;
}
header .logo{
  height: min(80vw, 80vh);
}
</style>