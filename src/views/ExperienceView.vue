<script lang="ts" setup>
import ResumeData from '../assets/resume_data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'

const { work } = ResumeData
</script>

<template>
  <div class="xpContainer">
    <ExperienceCard
      v-for="xp in work"
      :title="xp.position"
      :company="xp.name"
      :start_date="new Date(xp.startDate)"
      :end_date="!xp.endDate ? undefined : new Date(xp.endDate)"
      :active="!xp.endDate ? true : false"
      :responsibilities="xp.highlights"
      :location="xp.location"
      :key="xp.position"
    />
  </div>
</template>

<style>
.xpContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1em;
  margin-top: 2em;
}

@media (max-width: 1024px) {
}
</style>
