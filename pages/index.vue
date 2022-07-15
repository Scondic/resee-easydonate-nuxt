<template>
  <Header />
  <Navbar />
  <Categories :products="products" />
</template>

<script setup lang="ts">
import Categories from "~/components/shop/categories/categories.vue";

const runtimeConfig = useRuntimeConfig()
const {data: products} = await useFetch('https://easydonate.ru/api/v3/shop/products', {
  headers: {'Shop-Key': runtimeConfig.shopKey}
})

</script>