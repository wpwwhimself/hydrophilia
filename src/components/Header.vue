<script setup lang="ts">
import HphText from './HphText.vue';
import Nav from './Nav.vue';

const props = defineProps<{
  bigLogo: boolean,
}>();
</script>

<template>
  <header>
    <img src="@/assets/logo/hydrophilia.png" alt="logo" :class="`logo ${props.bigLogo && 'large'} hph-logo-cont`">
    <HphText />
    <Nav />
  </header>
</template>

<style scoped>
.logo.large{
  height: min(80vh, 80vw);
}
</style>