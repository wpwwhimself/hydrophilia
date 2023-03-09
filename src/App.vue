<script setup lang="ts">

</script>

<template>
  <header>
    <img src="@/assets/logo/hydrophilia.png" alt="logo" class="logo">
    <img src="@/assets/logo/text.png" alt="text" class="text">
  </header>
</template>

<style scoped>
header{
  position: relative;
  display: flex; justify-content: center; align-items: center;
  background-image: url("assets/logo/background.jpg");
  background-position: center;
  background-size: contain;
  padding: 4em;
}
header .logo{
  position: absolute;
  z-index: 1;
  height: 15em;
}
.text{
  z-index: 2;
  max-width: 95vw;
}
</style>
