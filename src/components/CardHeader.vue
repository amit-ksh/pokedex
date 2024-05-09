<template>
  <div class="">
    <h2 class="font-semibold flex-1 text-lg text-black/70">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>
