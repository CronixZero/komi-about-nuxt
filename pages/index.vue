<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <img src="3c9cc0ea3aec71364e004a17e0ec1035.png" alt="Anime Girl"/>
    </div>
    <div>
      <h1 class="text-5xl font-sans">Welcome to my Landing Page!</h1>
      <nuxt-link class="btn btn-outline mt-4" to="/about-me">Get to know more</nuxt-link>
    </div>
  </div>
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Komi says Hi!'
});
</script>