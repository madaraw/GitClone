<template>
  <div
    class="
      flex
      justify-between
      rounded-md
      border
      m-1
      p-1
      hover:bg-[#272727] hover:cursor-pointer hover:text-white
    "
  >
    <div class="flex gap-4">
      <svg class="h-6 w-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"
        />
      </svg>
      <p>{{ fileName }}</p>
    </div>
    <div class="hidden sm:block">
      <p>{{ size }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fileName", "size"],
};
</script>