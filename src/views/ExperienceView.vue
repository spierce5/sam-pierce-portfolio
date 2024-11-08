<script lang="ts" setup>
import ResumeData from '../assets/resume_data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'

const { experience } = ResumeData
</script>

<template>
  <div class="xpContainer">
    <ExperienceCard
      v-for="xp in experience"
      :title="xp.title"
      :company="xp.company"
      :start_date="new Date(xp.start_date)"
      :end_date="!xp.end_date ? undefined : new Date(xp.end_date)"
      :active="xp.active"
      :responsibilities="xp.responsibilities"
      :location="xp.location"
      :key="xp.title"
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
