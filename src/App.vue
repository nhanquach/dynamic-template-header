<script setup lang="ts">
import { ref, computed, onUpdated } from 'vue';

import BreadCrumb from './components/BreadCrumb.vue';
import SelectedPalette from './components/SelectedPalette.vue';
import RelatedCombinations from './components/RelatedCombinations.vue';

import json from './assets/_jsons/combinations/combinations.json'
import BrowseMore from './components/BrowseMore.vue';

const { combinations } = json

const path = window.location.pathname.split('/').pop();
const selectedPaletteId = ref(Number(path) || combinations[0].combination.id);

const selectedPalette = computed(() => {
  return combinations.find(({ combination }) => {
    return combination.id === selectedPaletteId.value
  })
})

const setSelectedPalette = (id: number) => {
  selectedPaletteId.value = id
  history.pushState({}, '', `/${id}`)
}

onUpdated(() => {
  if (!selectedPalette.value) {
    setTimeout(() => {
      setSelectedPalette(combinations[0].combination.id)
    }, 1000);
  }
})

</script>

<template>
  <main v-if="!selectedPalette">Color palette not found.<br />Navigating to the default color palette</main>
  <template v-else>
    <div class="background" :style="{ backgroundColor: selectedPalette.combination.color.hex }"></div>
    <main class="main-content">
      <BreadCrumb :name="selectedPalette.combination.name" />
      <SelectedPalette :palette="selectedPalette.combination" />
      <RelatedCombinations :relatedPalettes="selectedPalette.relatedCombinations"
        @select-palette="setSelectedPalette" />
      <BrowseMore :button-color="selectedPalette.combination.color.hex" />
    </main>
  </template>
</template>

<style scoped>
.main-content {
  position: relative;
  text-align: center;
  z-index: 20;
}

.background {
  height: 300px;
  width: 100%;
  position: absolute;
  z-index: 0;
}

.background::after {
  content: '';
  display: block;
  background-image: url('/_images/Asset/foreground.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
}
</style>
