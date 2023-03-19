<script setup lang="ts">
import type { Album } from '@/types';

const props = defineProps<{
  album: Album
}>();
</script>

<template>
  <router-link :to="`/albums/${album.name.toLowerCase().replace(/[ '']/g, '-')}`">
    <div class="album-container relative">
      <img
        :src="`/album_pics/${album.code}.png`"
        :alt="`${album.name} album pic`"
        class="album-pic"
        >
      <div class="album-meta flex-down center">
        <h2 :style="{ color: album.color }">{{ album.name }}</h2>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.album-meta{
  opacity: 0;
  user-select: none;
  position: absolute;
  top: 0; left: 0;
  background: radial-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9));
  width: 100%; height: calc(100% - 4px);
  border-radius: 0;
}
.album-container:hover .album-meta{
  opacity: 1;
}
.album-pic{
  height: 15em;
}
.album-meta h2{
  text-align: center;
}

</style>