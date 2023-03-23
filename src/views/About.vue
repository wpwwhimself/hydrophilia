<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>

<template>
  <h1>About</h1>
  <p>
    <em>Hydrophilia</em> is my big music project which spans quite a few years of my life.
    In it, I mostly compose my own songs and play a lot of different instruments, knitting material inspired by hard-rock, jazz, and electronic music.
  </p>
  <p>
    The earliest attempts of writing my own songs come from when I was about 10.
    My first songs were nothing to write home about but still, they form part of my history with music.
    Sadly, almost all pieces from that time are gone. What's left is kept here.
  </p>
  <p>
    As I grew, I attempted more techniques and acquired new software.
    The quality grew with me and though I couldn't decide on the name for myself, that didn't stop me from releasing songs.
    I also tried to incorporate more live elements to my pieces, such as wind instruments.
  </p>
  <p>
    On the following pages you can find the legacy, current state, and plans regarding my work.
    Unfortunately, as I come to a shocking realization that free time dwindles with age, the amount of new songs drop to the floor.
    However I still hope there is going to be more...
  </p>
  <div class="flex-right center">
    <Button href="#/albums" icon="fa-solid fa-compact-disc">My music</Button>
    <Button href="#/projects" icon="fa-solid fa-scroll">All of my projects</Button>
  </div>
</template>

<style scoped>
p{
  text-indent: 1em;
  text-align: justify;
}
</style>
