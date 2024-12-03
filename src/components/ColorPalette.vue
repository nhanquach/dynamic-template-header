<template>
  <div class="palette">
    <div class="color-box" v-for="color in colors" :key="color" :style="{ backgroundColor: color }">
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  colors: string[]
}>()

</script>

<style scoped>
.palette {
  display: flex;
  justify-content: center;
  align-items: center;
}

.color-box {
  width: 64px;
  height: 64px;
}
</style>
