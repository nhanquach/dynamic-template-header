<template>
  <div class="selected-palette">
    <img :src="image" alt="Selected Palette" />
    <div class="like-counts">
      <button class="like-button" @click="like">
        {{ likeCount }}
      </button>
    </div>
    <div class="colors">
      <div v-for="(color, index) in colors" :key="index" class="color-box">
        <div :style="{ backgroundColor: color.hex }" class="color-box__color" />
        <div class="color-box__description">
          <div class="color-box-description__name">{{ color.name }}</div>
          <div class="color-box-description__hex-code">{{ color.hex }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Combination } from '../types/combination';

const props = defineProps<{
  palette: Combination
}>()

console.log({ props })

const liked = ref(false)

// TODO: Remove computed and just use props
const colors = computed(() => props.palette.colors)
const image = computed(() => "../_images/Thumbnail/" + props.palette.featuredImage.url)

const like = () => {
  liked.value = !liked.value
}

const likeCount = computed(() => {
  return liked.value ? props.palette.likes + 1 : props.palette.likes
})

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

img {
  max-width: 600px;
  height: auto;
}

.like-counts {
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
}

.colors {
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-box__color {
  width: 150px;
  height: 100px;
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
}
</style>
