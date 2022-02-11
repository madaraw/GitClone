<template>
  <div class="h-14 bg-[#424242] flex justify-between items-center px-5">
    <NuxtLink to="/">
      <div class="text-white flex justify-center items-center gap-1">
        <div>
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
            />
          </svg>
        </div>
        <p class="font-bold text-2xl">GIT</p>
        <p class="text-2xl font-light">Clone</p>
      </div></NuxtLink
    >
    <div
      class="
        flex
        justify-center
        items-center
        gap-5
        text-white
        font-semibold
        text-xl
      "
    >
      <NuxtLink to="/"><p>Home</p></NuxtLink>
      <NuxtLink :to="{ name: 'about' }"> <p>About</p></NuxtLink>
      <NuxtLink :to="{ name: 'RateLimit' }"> <p>Rate limit</p></NuxtLink>
    </div>
  </div>
</template>
