<script setup>
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator height="200" duration="10000" throttle="0" />
      <NuxtPage
        keepalive
        include="index"
      />
    </NuxtLayout>
  </div>
</template>
