import { defineStore } from 'pinia';

export const useBooksStore = defineStore('books', {
  state: () => ({
    allBooks: [
      {
        id: 1,
        title: 'Мастер и Маргарита',
        author: 'Михаил Булгаков',
        cover_url: 'https://s.f.kz/prod/2841/2840995_1000.jpg',
        price: '5000',
      },
      {
        id: 2,
        title: '1984',
        author: 'Джордж Оруэлл',
        cover_url: 'https://s.f.kz/prod/2415/2414659_1000.jpg',
        price: '4500',
      },
      {
        id: 3,
        title: 'Война и мир',
        author: 'Лев Толстой',
        cover_url: 'https://s.f.kz/prod/543/542095_1000.jpg',
        price: '6000',
      },
      {
        id: 4,
        title: 'Гарри Поттер и философский камень',
        author: 'Джоан Роулинг',
        cover_url: 'https://s.f.kz/prod/4141/4140703_1000.jpg',
        price: '3500',
      },
      {
        id: 5,
        title: 'Убить пересмешника',
        author: 'Харпер Ли',
        cover_url: 'https://s.f.kz/prod/1083/1082113_1000.jpg',
        price: '4000',
      },
      {
        id: 6,
        title: 'Преступление и наказание',
        author: 'Фёдор Достоевский',
        cover_url: 'https://s.f.kz/prod/2805/2804110_1000.jpg',
        price: '5500',
      },
      {
        id: 7,
        title: 'Властелин колец: Братство кольца',
        author: 'Дж. Р. Р. Толкин',
        cover_url: 'https://s.f.kz/prod/2883/2882912_1000.jpg',
        price: '7000',
      },
      {
        id: 8,
        title: 'Моби Дик',
        author: 'Герман Мелвилл',
        cover_url: 'https://s.f.kz/prod/643/642683_550.jpg',
        price: '6500',
      },
      {
        id: 9,
        title: 'Анна Каренина',
        author: 'Лев Толстой',
        cover_url: 'https://s.f.kz/prod/2939/2938841_1000.jpg',
        price: '5600',
      },
      {
        id: 10,
        title: 'Трудно быть богом',
        author: 'Аркадий и Борис Стругацкие',
        cover_url: 'https://s.f.kz/prod/1408/1407059_1000.jpg',
        price: '4200',
      },
    ],
    favorites: [],
    cart: [],
  }),
  actions: {
    getAllBooks() {
      return this.allBooks;
    },

    getCart() {
      return this.cart;
    },

    getAllFavorites() {
      return this.favorites;
    },

    setCart(bookId) {
      if (this.cart.includes(bookId)) {
        this.cart = this.cart.filter((id) => id !== bookId);
      } else {
        this.cart.push(bookId);
      }
    },

    setFavorite(bookId) {
      if (this.favorites.includes(bookId)) {
        this.favorites = this.favorites.filter((id) => id !== bookId);
      } else {
        this.favorites.push(bookId);
      }
    },
  },
});
