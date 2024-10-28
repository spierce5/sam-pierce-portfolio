<script setup lang="ts">
defineProps<{
  name: string
  description: string
  html_url: string
}>()

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
    <a class="pjButton" :href="html_url" target="_blank">View on Github</a>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
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
  }

  .pjButton {
    border-radius: 5px;
    color: white;
    background-color: darkslategray;
    max-width: min-content;
    text-wrap: nowrap;
    justify-self: flex-end;
  }
}
</style>
