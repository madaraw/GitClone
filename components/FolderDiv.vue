<template>
  <div
    class="
      flex
      gap-4
      rounded-md
      border
      m-1
      p-1
      hover:bg-[#272727] hover:cursor-pointer hover:text-white
    "
  >
    <svg class="h-6 w-6" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
      />
    </svg>
    <p>{{ folderName }}</p>
  </div>
</template>

<script>
export default {
  props: ["folderName"],
};
</script>