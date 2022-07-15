<template>
  <h1>Debug id - {{ $route.params.id }}</h1>
  <p>Сгенерированная ссылка - {{ data }}</p>
</template>

<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
// const {data: product} = await useFetch(() => `https://easydonate.ru/api/v3/shop/product/${route.params.id}`, {
//   headers: {'Shop-Key': '0cbed40c0d920b94126eaf5e707be1f5'}
// })

const { data } = await useFetch(() => 'https://easydonate.ru/api/v3/shop/payment/create', {
  headers: {
    'Shop-Key': runtimeConfig.shopKey,
  },
  params: {
    'customer': 'Scondic',
    'server_id': 30506,
    'products': `{"${route.params.id}": 10}`
  }
})

</script>