<script setup lang="ts">
const pages = [
  {
    name: "About",
    icon: "fa-solid fa-house-chimney-user",
    link: "/",
  },
  {
    name: "Albums",
    icon: "fa-solid fa-compact-disc",
    link: "/albums",
  },
  {
    name: "Projects",
    icon: "fa-solid fa-scroll",
    link: "/projects",
  },
];
</script>

<template>
  <nav>
    <li v-for="pos in pages" class="clickable">
      <router-link :to="pos.link">
        <i :class="pos.icon"></i>
        {{ pos.name }}
      </router-link>
    </li>
  </nav>
</template>

<style>
nav{
  z-index: 2;
  display: flex;
}
nav li{
  color: white;
}
</style>