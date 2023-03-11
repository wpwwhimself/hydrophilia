<script setup lang="ts">
const props = defineProps([
  "album"
]);
</script>

<template>
  <div class="album-container flex-right clickable">
    <img
      :src="`src/data/album_pics/${album.code}.png`"
      :alt="`${album.name} album pic`"
      class="album-pic"
      >
    <div class="album-meta">
      <h2>{{ album.name }}</h2>
      <i class="ghost">{{ album.years }}</i>
      <!-- TODO TAGI -->
    </div>
  </div>
</template>

<style scoped>
.album-container{
  align-items: center;
  padding: 0.5em 1.5em;
}
.album-container:hover{
  background-color: var(--bg2);
}
.album-pic{
  height: 5em;
}
.album-meta h2{
  margin: 0;
}

</style>