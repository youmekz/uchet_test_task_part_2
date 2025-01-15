<template>
  <div class="flex flex-wrap justify-center">
    <div v-if="cartBooks.length === 0" class="w-full py-10 text-center">
      <p class="text-gray-500">У вас нет заказанных книг.</p>
    </div>

    <div v-for="book in cartBooks" :key="book.id">
      <Card :book="book" />
    </div>

    <div v-if="cartBooks.length > 0" class="w-full p-16">
      <hr class="mb-16" />
      <h2 class="text-lg font-semibold">Общая стоимость: {{ totalCost }} ₸</h2>

      <button
        class="text-md rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from '@/stores/books';
import { computed } from 'vue';

const booksStore = useBooksStore();

const cartBooks = computed(() => {
  return booksStore
    .getAllBooks()
    .filter((book) => booksStore.getCart().includes(book.id));
});

const totalCost = computed(() => {
  return cartBooks.value
    .reduce((total, book) => total + parseFloat(book.price), 0)
    .toFixed(2);
});
</script>
