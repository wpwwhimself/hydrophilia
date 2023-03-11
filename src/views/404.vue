<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="flex-down center">
    <h1>404</h1>
    <p>I'm sorry, there doesn't seem to be anything of sorts you requested.</p>
    <Button href="#/" icon="fa-solid fa-angles-left">Go back</Button>
  </div>
</template>

<style scoped>
h1{
  font-size: 30vw;
  margin: 0;
  opacity: 0.2;
  user-select: none;
}
h1, p{
  text-align: center;
}
</style>