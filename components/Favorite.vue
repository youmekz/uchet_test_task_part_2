<template>
  <button @click="toggleFavorite">
    <img
      :src="
        isFavorite ? '/img/icons/favorite.png' : '/img/icons/favorite_empty.png'
      "
      class="w-8 hover:scale-110"
      alt="Favorite icon"
    />
  </button>
</template>

<script setup>
import { useBooksStore } from '@/stores/books';
import { computed } from 'vue';

const booksStore = useBooksStore();

const { id } = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const isFavorite = computed(() => {
  return booksStore.getAllFavorites().includes(id);
});

function toggleFavorite() {
  booksStore.setFavorite(id);
}
</script>
