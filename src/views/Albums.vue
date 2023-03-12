<script setup lang="ts">
import { ref } from "vue";
import albums from "@/data/albums.json";
import Album from "@/components/Album.vue";
import AlbumHighlighter from "@/components/AlbumHighlighter.vue";

export type Album = {
  code?: string,
  name?: string,
  years?: string,
  desc?: string,
};

const currentAlbum = ref({} as Album);

function openAlbum(event: Event & {target: HTMLElement}, album: Album){
  currentAlbum.value = (currentAlbum.value.code != album.code) ? album : {};
  const container = event.target.closest(".album-container") as HTMLElement;
  const offsetBottom = container.offsetTop + container.offsetHeight;
  document.querySelector<HTMLElement>(".album-highlighter")!.style.top = `calc(${offsetBottom}px + 0.5em)`;
}
</script>

<template>
  <div class="grid-2 relative">
    <h1>Serious albums</h1>
    <Album v-for="album in albums.mine" :album="album" @click="event => openAlbum(event, album)" />
    <h1>Less serious albums</h1>
    <Album v-for="album in albums.others" :album="album" @click="event => openAlbum(event, album)" />
    <AlbumHighlighter :album="currentAlbum" />
  </div>
</template>

<style scoped>
h1{
  grid-column: 1 / span 2;
}
.grid-2{
  padding-bottom: 10em;
}
</style>
