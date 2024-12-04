<template>
    <div class="related-combinations">
        <h2>Related Combinations</h2>
        <div class="grid">
            <div v-for="palette in displayPalettes" :key="palette.id" class="palette-item"
                @click="handleSelect(palette)">
                <ColorPalette :palette="palette" />
            </div>
            <button class="load-more" @click="loadMore" v-if="displayPalettes.length < relatedPalettes.length">
                See more combinations
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { RelatedCombination } from '../types/combination';
import ColorPalette from './ColorPalette.vue';

const props = defineProps<{
    relatedPalettes: RelatedCombination[]
}>()

const emit = defineEmits<{
    (e: 'select-palette', id: number): void
}>()

const maxDispayPalette = ref(5)

const displayPalettes = computed(() => {
    return props.relatedPalettes.slice(0, maxDispayPalette.value)
})

const loadMore = () => {
    maxDispayPalette.value = maxDispayPalette.value + 5
}

const handleSelect = (palette: RelatedCombination) => {
    emit('select-palette', palette.id)
}
</script>

<style scoped>
.related-combinations {
    padding: 16px;
}

.grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, calc(var(--color-box-width)*4));
    gap: 24px;
    grid-column-gap: 32px;
    justify-content: center;
}

.palette-item {
    display: flex;
    align-items: center;
    justify-content: stretch;
    height: 64px;
    cursor: pointer;
}

.load-more {
    background-color: #f2f3f4;
    color: #585557;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    border-radius: 8px;
    height: var(--color-box-height);
    padding: 0;
}
</style>
