<template>
  <div class="min-h-screen bg-gray-light">
    <nav class="flex items-center justify-center h-20 w-screen px-8">
      <h2 class="text-lg font-semibold">Магазин</h2>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('https://easydonate.ru/api/v3/shop', {
  headers: { 'Shop-Key': '0cbed40c0d920b94126eaf5e707be1f5' }
})


</script>