<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

import HeaderText from './components/HeaderText.vue';
import BreadCrumb from './components/BreadCrumb.vue';
import SelectedPalette from './components/SelectedPalette.vue';
import RelatedCombinations from './components/RelatedCombinations.vue';

import json from './assets/_jsons/combinations/combinations.json'
import BrowseMore from './components/BrowseMore.vue';

const { combinations } = json

const pathname = window.location.pathname;
const selectedPaletteId = ref(Number(pathname.replace("/", '')) || combinations[0].combination.id);

const selectedPalette = computed(() => {
  return combinations.find((comp) => {
    return comp.combination.id === selectedPaletteId.value
  })
})

const setSelectedPalette = (id: number) => {
  selectedPaletteId.value = id
  window.location.pathname = `/${id}`;
}

console.log(
  selectedPalette.value
)

onMounted(() => {
  if (!selectedPalette.value) {
    setTimeout(() => {
      setSelectedPalette(combinations[0].combination.id)
    }, 1000);
  }
})

</script>

<template>
  <main v-if="!selectedPalette">Color palette not found.<br />Navigating to the default color palette</main>
  <main v-else class="main-content">
    <BreadCrumb :name="selectedPalette.combination.name" />
    <HeaderText :name="selectedPalette.combination.name" />
    <SelectedPalette :palette="selectedPalette.combination" />
    <RelatedCombinations :relatedPalettes="selectedPalette.relatedCombinations" @select-palette="setSelectedPalette" />
    <BrowseMore />
  </main>
</template>

<style scoped>
.main-content {
  text-align: center
}
</style>
