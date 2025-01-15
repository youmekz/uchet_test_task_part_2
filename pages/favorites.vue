<template>
  <div class="flex flex-wrap justify-center">
    <div v-if="favoriteBooks.length === 0" class="w-full py-10 text-center">
      <p class="text-gray-500">У вас нет избранных книг.</p>
    </div>

    <div v-for="book in favoriteBooks" :key="book.id">
      <Card :book="book" />
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from '@/stores/books';
import { computed } from 'vue';

const booksStore = useBooksStore();

const favoriteBooks = computed(() => {
  return booksStore
    .getAllBooks()
    .filter((book) => booksStore.getAllFavorites().includes(book.id));
});
</script>
