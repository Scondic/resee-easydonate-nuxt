<template>
  <div class="absolute sticky top-0 border-b-2 border-b-main-light bg-main-dark w-full z-10">
    <div class="flex items-center justify-between container mx-auto h-20">
      <div class="flex">
        <div class="font-medium text-main-light hover:text-white hover:cursor-pointer transition duration-300 mr-10">Меню</div>
        <div class="font-medium text-main-light hover:text-white hover:cursor-pointer transition duration-300 mr-10">Правила</div>
        <div class="font-medium text-main-light hover:text-white hover:cursor-pointer transition duration-300 mr-10">Магазин предметов</div>
      </div>
      <button class="flex items-center justify-center bg-white w-12 h-12 rounded w-fit font-medium text-main hover:scale-105 transition duration-300">
        <svg width="26" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.92501 9.36831C1.89438 9.24549 1.89212 9.11731 1.91843 8.99349C1.94473 8.86967 1.99889 8.75347 2.0768 8.65371C2.15472 8.55395 2.25433 8.47325 2.36809 8.41773C2.48185 8.36222 2.60676 8.33335 2.73334 8.33331H17.2667C17.3933 8.33335 17.5182 8.36222 17.6319 8.41773C17.7457 8.47325 17.8453 8.55395 17.9232 8.65371C18.0011 8.75347 18.0553 8.86967 18.0816 8.99349C18.1079 9.11731 18.1056 9.24549 18.075 9.36831L16.5658 15.4041C16.4757 15.7647 16.2677 16.0848 15.9747 16.3136C15.6818 16.5423 15.3208 16.6666 14.9492 16.6666H5.05084C4.67918 16.6666 4.31821 16.5423 4.02528 16.3136C3.73236 16.0848 3.5243 15.7647 3.43417 15.4041L1.92501 9.36915V9.36831Z" stroke="#919399" stroke-width="2" stroke-linejoin="round"/>
          <path d="M15 8.33331L11.6667 3.33331M7.5 11.6666V13.3333V11.6666ZM12.5 11.6666V13.3333V11.6666ZM5 8.33331L8.33333 3.33331L5 8.33331Z" stroke="#919399" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
  <div class="flex flex-col h-screen bg-main-dark">
    <div class="flex justify-center flex-col grow container mx-auto">
      <div class="bg-white py-2 px-4 rounded w-fit mb-4 font-medium text-main">Общий онлайн проекта - 7538 игрока</div>
      <h1 class="font-semibold text-3xl text-white w-1/3 mb-6">{{ info.response.description }}</h1>
      <p class="font-semibold text-lg text-main-light w-1/3 mb-10">Получайте ежедневные бонусы при входе на сайт, покупайте предметы, инструменты, кейсы и привилегии.</p>
      <button class="bg-white py-4 px-6 rounded w-fit font-medium text-main hover:scale-105 transition duration-300 mb-4">Получить бонус</button>
      <p class="font-semibold text-lg text-main-light w-1/3">* Бонусная система работает раз в 24 часа.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const { data: info } = await useFetch('https://easydonate.ru/api/v3/shop', {
  headers: { 'Shop-Key': runtimeConfig.shopKey }
})
</script>