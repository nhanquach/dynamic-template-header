<template>
  <div class="selected-palette">
    <HeaderText :name="palette.name" :color="textColor" />
    <div class="palette-thumbnail">
      <img :src='"../_images/Thumbnail/" + props.palette.featuredImage.url' class="palette-thumbnail__image"
        alt="palette thumbnail" />

      <button class="like-button" @click="like">
        <span class="like-button__icon">
          <HeartIcon :liked="liked" />
        </span>
        <span class="like-button__count">
          {{ likeCount }}
        </span>
      </button>

    </div>
    <div class="colors">
      <div v-for="(color, index) in localColors" :key="index" class="color-box">
        <div :style="{ backgroundColor: color.hex }" class="color-box__color" :data-copy-text="copyStatus"
          @click="copyHexCode(color.hex)" />
        <div class="color-box__description">
          <div class="color-box-description__name">{{ color.name }}</div>
          <div class="color-box-description__hex-code">
            <label :for="`color-picker-${index}`">
              {{ color.hex }}
              <input type="color" v-model="color.hex" :id="`color-picker-${index}`" class="color-picker">
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Combination } from '../types/combination';

import HeartIcon from './HeartIcon.vue';
import HeaderText from './HeaderText.vue';
import { getBestContrastColor } from '../utils/colors';

const props = defineProps<{
  palette: Combination
}>()

const localColors = ref(props.palette.colors)

const liked = ref(false)
const copyStatus = ref('Copy')

const textColor = computed(() => {
  return getBestContrastColor(props.palette.color.hex)
})

const likeCount = computed(() => {
  return liked.value ? props.palette.likes + 1 : props.palette.likes
})

const like = () => {
  liked.value = !liked.value
}

const copyHexCode = async (hexCode: string) => {
  try {
    await navigator.clipboard.writeText(hexCode)
    copyStatus.value = '✓'
  } catch (e) {
    console.error(e)
    copyStatus.value = 'Cannot copy'
  } finally {
    setTimeout(() => {
      copyStatus.value = 'Copy'
    }, 500);
  }
}
</script>

<style scoped>
.selected-palette {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.palette-thumbnail {
  max-width: 600px;
  display: flex;
  position: relative
}

.palette-thumbnail__image {
  width: 100%;
  height: auto;
}

.like-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px;

  .like-button__icon {
    height: 24px;
    width: 24px;
    display: block;
  }

  .like-button__count {
    font-size: 16px;
  }

}

.colors {
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-box__color {
  width: 150px;
  height: 100px;
  position: relative;
  cursor: pointer
}

.color-box__color::before {
  content: attr(data-copy-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-weight: bold;
}

.color-box__color:hover::before {
  opacity: 1;
}


.color-box__description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 100px;

  .color-box-description__name {
    font-weight: 700;
    text-decoration: underline;
  }

  .color-box-description__hex-code {
    text-transform: uppercase;
    color: #a6a3a4;

    label {
      cursor: pointer;

      .color-picker {
        display: block;
        width: 0;
        height: 0;
        border: 0;
      }
    }
  }
}
</style>
