<script setup lang="ts">
const props = defineProps({
  icon: String,
  href: String,
});


</script>

<template>
  <a :href="href">
    <i v-if="icon" :class="icon"></i>
    <slot />
  </a>
</template>

<style scoped>
a{
  border: 2px solid var(--acc);
  border-radius: 1.5em;
  padding: 0.5em;
  background-color: var(--bg1);
  font-size: 1.25em;
}
a:hover{
  background-color: var(--acc);
  color: white;
  border-color: currentColor;
}
a i{
  margin-right: 0.5em;
}
</style>