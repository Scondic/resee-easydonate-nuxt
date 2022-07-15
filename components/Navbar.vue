<template>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center justify-center">
          <div class="flex-shrink-0 flex items-center text-2xl text-main font-bold">
            <svg class="h-6 w-auto" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 15C9.47157 15 11.2655 14.2393 12.6041 12.9953C14.1242 12.1309 15.8101 11.8098 20.3763 13.7656C21.5595 14.5459 22.9767 15 24.5 15C28.6421 15 32 11.6421 32 7.5C32 3.35786 28.6421 0 24.5 0C22.5284 0 20.7345 0.760744 19.3959 2.00471C17.8758 2.86912 16.1899 3.19015 11.6237 1.23439C10.4405 0.454132 9.02329 0 7.5 0C6.98223 0 6.47672 0.0524666 5.98849 0.152373C2.57086 0.85172 0 3.87563 0 7.5C0 8.01777 0.0524666 8.52328 0.152373 9.01151C0.85172 12.4291 3.87563 15 7.5 15Z" fill="#005FF9"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 32C17.4716 32 19.2655 31.2393 20.6041 29.9953C22.1242 29.1309 23.8101 28.8098 28.3763 30.7656C29.5595 31.5459 30.9767 32 32.5 32C36.6421 32 40 28.6421 40 24.5C40 20.3579 36.6421 17 32.5 17C30.5284 17 28.7345 17.7607 27.3959 19.0047C25.8758 19.8691 24.1899 20.1901 19.6237 18.2344C18.4405 17.4541 17.0233 17 15.5 17C14.9822 17 14.4767 17.0525 13.9885 17.1524C10.5709 17.8517 8 20.8756 8 24.5C8 25.0178 8.05247 25.5233 8.15237 26.0115C8.85172 29.4291 11.8756 32 15.5 32Z" fill="#005FF9"/>
            </svg>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <nuxt-link active-class="active" class="text-gray px-3 py-2 rounded-md text-sm font-semibold hover:bg-main-light hover:text-main" aria-current="page" to="/" exact>Магазин предметов</nuxt-link>
              <nuxt-link active-class="active" class="text-gray px-3 py-2 rounded-md text-sm font-semibold hover:bg-main-light hover:text-main" to="/team">Команда</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.active {
  color: rgb(0, 95, 245);
  background-color: rgb(229, 239, 255);
}
</style>