<template>
  <div class="palette">
    <div class="palette__colors">
      <div class="color-box" v-for="color in palette.colors" :key="color" :style="{ backgroundColor: color }" />
    </div>
    <div class="palette__description">
      <div class="palette__name">{{ palette.name }}</div>
      <div class="palette__likes">
        <span class="palette-likes__icon">
          <HeartIcon :liked="palette.liked" />
        </span>
        <span class="palette-likes__count">
          {{ palette.likes }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeartIcon from './HeartIcon.vue';

import { RelatedCombination } from '../types/combination'

defineProps<{
  palette: RelatedCombination
}>()

</script>

<style scoped>
.palette {
  height: var(--color-box-height);
  transition: all 500ms ease-in-out;
  overflow: hidden;
  border: 0.5px solid #a6a3a4;
  border-radius: 8px;
  position: relative;

  .palette__description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 8px;
    gap: 8px;
    transition: all 500ms ease-in-out;
  }

  .palette__name {
    text-align: left;
    overflow: hidden;
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .palette__likes {
    transition: all 500ms ease-in-out;
    display: flex;
    align-items: center;
    gap: 4px;

    .palette-likes__icon {
      width: 1.5rem;
      height: 1.5rem;
      display: block;
    }

    .palette-likes__count {
      font-size: 14px;
    }
  }
}

.palette:hover {
  .color-box {
    transform: translateY(-50%);
  }

  .palette__description {
    transform: translateY(-100%)
  }

  .palette__name,
  .palette__likes {
    bottom: 4px;
  }
}

.palette__colors {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: relative;
}

.color-box {
  width: var(--color-box-width);
  height: var(--color-box-height);
  transition: all 200ms ease-in-out;
}
</style>
