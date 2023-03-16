<script setup lang="ts">
import albums from "@/data/albums.json";
import Album from "@/components/Album.vue";

let myAlbums = albums.filter(el => el.group == "mine");
let otherAlbums = albums.filter(el => el.group == "others");
</script>

<template>
  <h1>Serious albums</h1>
  <div class="flex-right center">
    <Album v-for="album in myAlbums" :album="album" />
    </div>
  <h1>Less serious albums</h1>
  <div class="flex-right center">
    <Album v-for="album in otherAlbums" :album="album" />
  </div>
</template>

<style scoped>

</style>
