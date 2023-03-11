<script setup lang="ts">
import Logo from "./components/Logo.vue";
//TODO linki do hydrofilii
const footer_links = [
  ["fa-solid fa-envelope", "mailto:contact@wpww.pl", "contact@wpww.pl"],
  ["fa-brands fa-facebook", "https://www.facebook.com/wpwwhimself/", "wpwwhimself"],
  ["fa-brands fa-instagram", "https://www.instagram.com/wpwwhimself/", "wpwwhimself"],
];
</script>

<template>
  <a href="/">
    <header>
      <img src="@/assets/logo/hydrophilia.png" alt="logo" class="logo">
      <img src="@/assets/logo/text.png" alt="text" class="text">
    </header>
  </a>
  <Content />
  <footer>
    <div class="flex-right but-mobile-down center">
      <Logo />
      <div id="end-bar" class="flex-down">
        <h2>Hydrophilia</h2>
        <p>{__("footer_by_me")}</p>
        <div class="flex-right">
          <a href="https://creativecommons.org/licenses/by-sa/3.0/pl/">
            <i class="fa-brands fa-creative-commons"></i>
            <i class="fa-brands fa-creative-commons-by"></i>
            <i class="fa-brands fa-creative-commons-sa"></i>
          </a> 2018 – 2022
        </div>
      </div>
    </div>
    <div id="footer-links">
      <a v-for="el in footer_links" :href="el[1]">
        <i :class="el[0]"></i>
        {{ el[2] }}
      </a>
    </div>
  </footer>
</template>

<style scoped>
header{
  position: relative;
  display: flex; justify-content: center; align-items: center;
  background-image: url("assets/logo/background.jpg");
  background-position: center;
  background-size: contain;
  padding: 4em;
}
header .logo{
  position: absolute;
  z-index: 1;
  height: 15em;
}
.text{
  z-index: 2;
  max-width: 95vw;
}

footer{
    background: #111;
    color: white;
    padding: 1em 5em;
    position: absolute;
    bottom: 0;
    width: calc(100vw - 2*5em);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    font-size: 85%;
    text-align: right;
}
footer>div:first-child{
    flex-direction: row-reverse;
}
footer .logo{
    height: 5em;
}
footer h2, footer p{
    margin: 0;
}
#end-bar{
    align-items: end;
    gap: 0;
}
#lang{
    width: fit-content;
}
#footer-links{
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-wrap: wrap; column-gap: 1em;
    max-height: 5em;
}
</style>
