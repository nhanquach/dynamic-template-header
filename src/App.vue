<script setup lang="ts">
import { ref, computed } from 'vue';

import HeaderText from './components/HeaderText.vue';
import BreadCrumb from './components/BreadCrumb.vue';
import SelectedPalette from './components/SelectedPalette.vue';
import RelatedCombinations from './components/RelatedCombinations.vue';

import json from './assets/_jsons/combinations/combinations.json'
import BrowseMore from './components/BrowseMore.vue';

const { combinations } = json

const selectedPaletteId = ref(719)

const selectedPalette = computed(() => {
  return combinations.find((comp) => {
    return comp.combination.id === selectedPaletteId.value
  })
})

const setSelectedPalette = (id: number) => {
  console.log({ id })
  selectedPaletteId.value = id
}

console.log(
  selectedPalette.value
)

</script>

<template>
  <main v-if="!selectedPalette">Color palette not found</main>
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
