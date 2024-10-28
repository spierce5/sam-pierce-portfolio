<script setup lang="ts">
defineProps<{
  title: string
  location: string
  company: string
  start_date: Date
  end_date: Date | undefined
  active: boolean
  responsibilities: Array<string>
}>()

const formatDate = (date: Date | undefined): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date)
}
</script>

<template>
  <div class="xpCard">
    <div class="xpInfoRow">
      <div class="company">{{ company }}</div>
      <div>
        {{ formatDate(start_date) }} -
        {{ active ? 'Present' : formatDate(end_date) }}
      </div>
    </div>
    <div class="xpInfoRow">
      <div class="xpTitle">{{ title }}</div>
      <div>{{ location }}</div>
    </div>
    <div>
      <ul>
        <li v-for="rp in responsibilities" v-bind:key="rp">
          {{ rp }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .xpCard {
    border: 1px solid gainsboro;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-shadow: 5px 5px 5px 2px slategrey;
  }

  .xpInfoRow {
    display: flex;
    justify-content: space-between;
  }

  .company {
    font-weight: bold;
  }

  .xpTitle {
    font-style: italic;
  }
}
</style>
