<template>
  <div :class="darkMode ? 'dark' : ''" :data-theme="darkMode ? 'night' : 'winter'">
    <header>
      <Navbar/>
    </header>
    <div class="bg-gray-100 dark:bg-slate-900 w-full h-full">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from "./stores/main";
import {storeToRefs} from 'pinia'
import Navbar from "./components/Navbar";

const {darkMode} = storeToRefs(useMainStore());
</script>
