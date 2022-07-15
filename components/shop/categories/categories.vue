<template>
  <div class="flex items-center px-4">
    <div class="container mx-auto">

      <div class="flex flex-col mb-10">
        <div class="flex items-center justify-between w-full mb-5">
          <div class="font-semibold text-2xl">Кейсы</div>
          <nuxt-link class="font-semibold text-lg text-gray-dark hover:text-main transition duration-300" to="/">
            Смотреть все
          </nuxt-link>
        </div>
        <div class="flex items-center w-full">
          <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
            <div class="relative bg-white rounded-md w-full p-5" v-for="product in products.response">
              <div
                  class="absolute bg-main w-10 h-10 rounded right-0 mr-5 hover:cursor-pointer hover:scale-105 transition duration-300">
                Buy
              </div>
              <img class="bg-gray p-5 w-28 h-28 rounded mb-5" :src="product.image" :alt="product.name">
              <h3 class="text-lg font-semibold">{{ product.name }}</h3>
              <div class="text-lg font-semibold text-gray-dark">{{ product.price }} ₽</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const {data} = await useFetch('https://easydonate.ru/api/v3/shop/products', {
  headers: {'Shop-Key': runtimeConfig.shopKey}
})

const props = defineProps({
  products: Object
})
</script>