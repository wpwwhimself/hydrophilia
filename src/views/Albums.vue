<script setup lang="ts">
import albums from "@/data/albums.json";
import Album from "@/components/Album.vue";
</script>

<template>
  <h1>Serious albums</h1>
  <div class="grid-2">
    <Album v-for="album in albums.mine" :album="album" />
  </div>
  <h1>Less serious albums</h1>
  <div class="grid-2">
    <Album v-for="album in albums.others" :album="album" />
  </div>
</template>
