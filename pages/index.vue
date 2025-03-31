<script setup lang="ts">
const name = "Olivier Recher";
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900 text-gray-900 dark:text-white">
    <h1 class="text-xl font-bold">Hello ! I am <span>{{ name }}</span></h1>
    <h2 class="text-center text-6xl sm:text-9xl font-bold">Full-stack</h2>
    <h2 class="text-center text-6xl sm:text-9xl font-bold text-[#6200ee] dark:text-[#bb86FC]">Developer</h2>
    <skill-ticker />
  </div>
</template>
