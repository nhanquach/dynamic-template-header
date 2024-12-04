<template>
    <div class="browse-more-container">
        <h2>Use this color palette and create beautiful designs and documents!</h2>
        <button class="browse-template" :style="{ backgroundColor: buttonColor, color: textColor }">Browser for
            templates</button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getBestContrastColor } from '../utils/colors';

const props = defineProps<{ buttonColor?: string }>();

const textColor = computed(() => {
    return getBestContrastColor(props.buttonColor, '#000')
})
</script>

<style scoped>
.browse-more-container {
    padding: 16px;
}
</style>
