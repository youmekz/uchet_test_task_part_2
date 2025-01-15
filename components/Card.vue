<template>
  <div
    class="h-100 m-1 flex w-60 cursor-pointer flex-col space-y-4 rounded-md border-2 border-gray-100 bg-white p-3 hover:border-gray-200 hover:shadow-lg"
  >
    <div class="flex justify-end">
      <Favorite :id="book.id" />
    </div>

    <img
      :src="book.cover_url"
      class="h-64 min-h-72 rounded-md"
      alt="Preview Book"
    />

    <p class="h-10 text-center">
      {{ book.title }}
    </p>
    <small class="text-right text-gray-400">
      {{ book.author }}
    </small>

    <hr />
    <p>{{ book.price }} ₸</p>

    <button
      @click="toggleCart(book.id)"
      class="rounded-md bg-blue-500 px-4 py-2 text-xs text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {{ cartContainsBook ? 'Удалить из корзины' : 'Добавить в корзину' }}
    </button>
  </div>
</template>

<script setup>
import { useBooksStore } from '@/stores/books';

const booksStore = useBooksStore();

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const cartContainsBook = computed(() => {
  return booksStore.getCart().includes(props.book.id);
});

function toggleCart(id) {
  booksStore.setCart(id);
}
</script>
