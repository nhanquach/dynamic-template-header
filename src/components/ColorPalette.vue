<template>
  <div class="palette">
    <div class="color-box-container">
      <div class="color-box" v-for="color in palette.colors" :key="color" :style="{ backgroundColor: color }" />
    </div>
    <div class="palette__name">{{ palette.name }}</div>
    <div class="palette__likes">
      <span class="heart-icon">
        <HeartIcon :liked="palette.liked" />
      </span>
      {{ palette.likes }}
    </div>
  </div>
</template>

<script setup lang="ts">
import HeartIcon from './HeartIcon.vue';

import { RelatedCombination } from '../types/combination.d.ts'

const props = defineProps<{
  palette: RelatedCombination
}>()

</script>

<style scoped>
.palette {
  height: 64px;
  transition: all 500ms ease-in-out;
  overflow: hidden;
  border: 0.5px solid #a6a3a4;
  border-radius: 8px;
  position: relative;

  .palette__name {
    transition: all 500ms ease-in-out;
    position: absolute;
    bottom: 0;
    left: 8px;
  }

  .palette__likes {
    transition: all 500ms ease-in-out;
    position: absolute;
    bottom: 0;
    right: 8px;
    display: flex;
    gap: 4px;


    .heart-icon {
      width: 1.5rem;
      height: 1.5rem;
      display: block;
    }
  }
}

.palette:hover {
  .color-box {
    transform: translateY(-50%);
  }

  .palette__name,
  .palette__likes {
    bottom: 4px;
  }
}

.color-box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: relative;
}

.color-box {
  width: 64px;
  height: 64px;
  transition: all 200ms ease-in-out;
}
</style>
