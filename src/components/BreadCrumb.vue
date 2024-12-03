<template>
    <nav aria-label="breadcrumb">
        <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Colors</a></li>
            <li class="breadcrumb-item"><a href="#">Color Palettes</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{ name }}</li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<style>
.breadcrumb {
    display: flex;
    list-style: none;

    .breadcrumb-item a {
        color: #6a504a
    }

    .breadcrumb-item.active {
        color: #c4a7a6
    }

    .breadcrumb-item+.breadcrumb-item::before {
        content: ">";
        color: #6a504a;
        margin: 0 0.5rem;
    }

}
</style>
