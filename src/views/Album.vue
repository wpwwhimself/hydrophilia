<script setup lang="ts">
import albums from "@/data/albums.json";
import projects from "@/data/projects.json";
import { useRoute } from "vue-router";
import type { Album, Project } from "@/types";
import Button from "@/components/Button.vue";

const route = useRoute();

let album: Album = albums.filter(el => el.name.toLowerCase().replace(/[ ']/g, "-") == route.params.albumName)[0];
let tracklist: Project[] = projects.filter(
  el => (
    (album.code == "noalbum") ?
      !el.album && ["F", "V", "A"].includes(el.id.substring(0, 1)) :
      el.album == album.name
    )
    && el.status == 0
);
tracklist.sort((a,b) => (a.no ?? 0) - (b.no ?? 0));
</script>

<template>
  <div class="grid-2">
    <img class="album" :src="`/album_pics/${album.code}.png`" :alt="`Album art for ${album.name}`" />
    <div>
      <h1 class="title" :style="{ color: album.color }">{{ album.name }}</h1>
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
.title{
  margin: 0.5em 0 0;
}
@media screen and (max-width: 600px) {
  .grid-2{
    grid-template-columns: auto;
  }
}
</style>
