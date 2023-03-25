<script setup lang="ts">
import albums from "@/data/albums.json";
import projects from "@/data/projects.json";
import tracks from "@/data/tracks.json";
import { useRoute } from "vue-router";
import type { Album, Track } from "@/types";
import Button from "@/components/Button.vue";

const route = useRoute();

let album: Album = albums.filter(el =>
  el.name.toLowerCase().replace(/[ ']/g, "-") == route.params.albumName
)[0];
let tracklist: Track[] = tracks
  .filter(el =>
    el.albumCode == album.code
  )
  .sort((a, b) => a.no - b.no);
for(let el of tracklist){
  el.title = projects.filter(el1 => el1.id == el.projectId)[0].title;
}
</script>

<template>
  <div class="grid-2">
    <img class="album" :src="`/album_pics/${album.code}.png`" :alt="`Album art for ${album.name}`" />
    <div>
      <h1 :style="{ color: album.color }">{{ album.name }}</h1>
      <p class="years ghost">{{ album.years }}</p>
      <p class="desc">{{ album.desc }}</p>
      <h2>Track list:</h2>
      <ol class="track-list">
        <li v-for="track in tracklist" :data-no="track.no">
          {{ track.title }}
        </li>
      </ol>
    </div>
  </div>
  <div class="flex-right center">
    <Button href="#/albums" icon="fa-solid fa-angles-left">Back</Button>
  </div>
</template>

<style scoped>
.grid-2{
  justify-items: center;
  grid-template-columns: auto auto;
}
.album{
  width: min(40vw, 40vh);
}
.years{
  font-style: italic;
  text-align: center;
}
.desc{
  text-align: justify;
}
</style>
