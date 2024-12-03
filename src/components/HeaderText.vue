<template>
  <h1>{{ name }}</h1>
  <h1>color combination</h1>
</template>

<script setup lang='ts'>
defineProps<{
    name: string
}>()
</script>

<style scoped>
h1 {
    line-height: 24px;
}
</style>
