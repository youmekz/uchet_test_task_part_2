<template>
  <header
    class="fixed left-0 top-0 z-50 flex h-12 w-full items-center justify-between bg-white p-4 shadow-md"
  >
    <NuxtLink to="/" class="hover:scale-110">
      <img src="/img/logo.svg" class="h-10" alt="Uchet.kz logo" />
    </NuxtLink>
    <div class="flex items-center space-x-4">
      <NuxtLink to="/cart">
        <img
          src="/img/icons/cart.png"
          class="w-10 hover:scale-110"
          alt="Cart icon"
        />
      </NuxtLink>
      <NuxtLink to="/favorites">
        <img
          src="/img/icons/favorite.png"
          class="w-10 hover:scale-110"
          alt="Favorite icon"
        />
      </NuxtLink>
    </div>
  </header>
</template>
