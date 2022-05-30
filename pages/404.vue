<template>
  <div class="flex justify-center items-center h-screen">
    <div class="pr-6">
      <img class="object-scale-down h-50 w-96" src="57e.png" alt="Anime Girl" />
    </div>
    <div>
      <h1 class="text-5xl font-sans text-black dark:text-gray-50">404: Page not found</h1>
      <p class="text-2xl font-sans text-gray-400 pt-1">Well this is awkward. Take a ride back
        <nuxt-link class="text-purple-300" to="/">Home</nuxt-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
}
</script>
