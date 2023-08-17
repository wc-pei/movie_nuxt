<script setup lang="ts">

</script>

<template>
  <nav class="flex justify-center mt-10">
    <NuxtLink
      class="px-4 py-2 border rounded-lg"
      to="/"
    >
    トップ
    </NuxtLink>
  </nav>
  <main>
    <slot />
  </main>
</template>