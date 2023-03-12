<script setup lang="ts">
import { Fragment } from 'vue';

const props = defineProps(["album"]);
</script>

<template>
  <div class="album-highlighter">
    <template v-if="album.name">
      <h3>{{ album.name }}</h3>
      <p>{{ album.desc }}</p>
    </template>
  </div>
</template>

<style>
.album-highlighter{
  transition-duration: 0s;
  position: absolute;
  background-color: var(--bg2);
  padding: 0 2em;
  width: calc(100% - 4em);
}
</style>