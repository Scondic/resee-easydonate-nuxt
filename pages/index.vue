<template>
  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <div class="group relative" v-for="product in data.response">
      <div
          class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img :src="product.image"
             :alt="product.name"
             class="w-full h-full object-center object-cover lg:w-full lg:h-full">
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <NuxtLink to="/item/234254">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {{ product.name }}
            </NuxtLink>
          </h3>
          <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">{{ product.price }} $</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {data} = await useFetch('https://easydonate.ru/api/v3/shop/products', {
  headers: {'Shop-Key': '0cbed40c0d920b94126eaf5e707be1f5'}
})
</script>