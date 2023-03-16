<script setup>
import Nav from "./components/Nav.vue";
import HphText from "./components/HphText.vue";
import HphLogo from "./components/HphLogo.vue";

const footer_links = [
  ["fa-solid fa-envelope", "mailto:contact@wpww.pl", "contact@wpww.pl"],
  ["fa-brands fa-facebook", "https://www.facebook.com/WPWWHydrophilia", "WPWWHydrophilia"],
  ["fa-brands fa-instagram", "https://www.instagram.com/wpwwhimself/", "wpwwhimself"],
];

const today = new Date;
</script>

<template>
  <header>
    <img src="@/assets/logo/hydrophilia.png" alt="logo" class="logo hph-logo-cont">
    <HphText />
    <Nav />
  </header>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>
  <footer>
    <div class="flex-right but-mobile-down center">
      <HphLogo />
      <div id="end-bar" class="flex-down">
        <HphText />
        <p>
          Website constructed entirely by
          <a href="http://wpww.pl/">Wojciech Przybyła</a>
        </p>
        <div class="flex-right">
          <a href="https://creativecommons.org/licenses/by-sa/3.0/pl/">
            <i class="fa-brands fa-creative-commons"></i>
            <i class="fa-brands fa-creative-commons-by"></i>
            <i class="fa-brands fa-creative-commons-sa"></i>
          </a> 2018 – {{ today.getFullYear() }}
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

<style>
header{
  position: relative;
  display: flex; justify-content: center; align-items: center;
  flex-direction: column;
  background-image: url("assets/logo/background.jpg");
  background-position: center;
  background-size: cover;
  padding: 5em;
}
header .hph-logo-cont{
  position: absolute;
  z-index: 1;
}
header .logo{
  height: 15em;
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
    gap: 0;
}
footer .logo{
    height: 5em;
}
footer h2, footer p{
    margin: 0;
}
#end-bar{
    align-items: end;
    justify-content: center;
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
