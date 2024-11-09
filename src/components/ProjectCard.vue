<script setup lang="ts">
defineProps<{
  name: string
  description: string
  html_url: string
}>()

import { FaGithub } from 'vue-icons-plus/fa'

function parseName(name: string): string {
  let nameParts = name.split('-')
  nameParts = nameParts.map(
    part => part.substring(0, 1).toUpperCase() + part.substring(1),
  )
  return nameParts.join(' ')
}
</script>

<template>
  <div class="pjCard">
    <div class="pjName">{{ parseName(name) }}</div>
    <p class="pjDesc">{{ description }}</p>
    <a class="button iconButton" :href="html_url" target="_blank"
      ><FaGithub />View on Github</a
    >
  </div>
</template>

<style scoped>
.pjCard {
  border: 1px solid gainsboro;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-shadow: 5px 5px 5px 2px slategrey;
  height: 30vh;
  aspect-ratio: 2;
}

.pjName {
  font-size: x-large;
  font-weight: bold;
}

.pjDesc {
  flex-grow: 1;
  overflow: auto;
}

@media (max-width: 1024px) {
  .pjCard {
    height: 18vh;
    aspect-ratio: 1.5;
    gap: 1em;
  }

  .pjDesc {
    /* font-size: smaller; */
  }
}

@media (max-width: 768px) {
  .pjCard {
    height: 22vh;
  }
}

@media (max-width: 480px) {
  .pjCard {
    width: 100%;
    height: 250px;
  }
}
</style>
