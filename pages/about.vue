<template>
  <body
    class="
      flex
      justify-center
      items-center
      min-h-screen
      bg-gradient-to-b
      from-[#121212]
      to-[#252424]
      p-10
    "
  >
    <div class="bg-[#424242] rounded-lg p-5">
      <h1 class="text-white text-2xl font-medium mb-2">About:</h1>
      <p class="text-gray-100 mb-1">
        This website is a project aimed at showing the skills I learned in VueJS
        and NuxtJS aswell as anchoring the information I learned around this dev
        stack. It was created by
        <a
          href="https://github.com/madaraw"
          class="text-[#58A6FF] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          >madaraw</a
        >, and it consists of a
        <a
          href="https://github.com/"
          class="text-[#58A6FF] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          >Github</a
        >
        "clone". It supports Github repositories as well as users and Github's
        search through its repositories. It mimics the GitHub file & folder tree
        to browse through the repositories.
      </p>
      <p class="text-gray-100 mb-1">
        It uses NuxtJS with tailwindCSS as a frontend framework and uses
        Github's REST API as its backend. It is aimed towards pc use and is not
        mobile friendly for simplicity sake.
      </p>
      <p class="text-gray-100 mb-1">
        It is part of my portfolio. You can find the code for the whole app in
        <a
          href="https://github.com/madaraw?tab=repositories"
          class="text-[#58A6FF] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          >my Github Page</a
        >.
      </p>
    </div>
  </body>
</template>