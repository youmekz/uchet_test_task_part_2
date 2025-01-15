<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="book in books" :key="book.id">
      <Card :book="book" :show="true" />
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from '@/stores/books';

const booksStore = useBooksStore();
const books = booksStore.getAllBooks();
</script>
