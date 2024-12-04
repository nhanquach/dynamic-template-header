<template>
  <h1 :style="{ color: color }">{{ name }} <br /> color combination</h1>
</template>

<script setup lang='ts'>
defineProps<{
  name: string;
  color?: string;
}>()
</script>
