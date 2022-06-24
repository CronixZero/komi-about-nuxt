<template>
  <div class="flex justify-center items-center h-screen">
    <div class="pr-6">
      <img class="object-scale-down h-50 w-96" src="57e.png" alt="Anime Girl"/>
    </div>
    <div>
      <h1 class="text-5xl font-sans">404: Page not found</h1>
      <p class="text-2xl font-sans text-gray-600 dark:text-gray-400 pt-1">Well this is awkward. Take a ride back
        <nuxt-link class="text-purple-500 dark:text-purple-300" to="/">Home</nuxt-link>.
      </p>
    </div>
  </div>
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: '404: Page not Found'
});
</script>
