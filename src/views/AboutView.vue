<script lang="ts" setup>
import ResumeData from '../assets/resume_data.json'

const { experience } = ResumeData
</script>

<template>
  <div class="about">
    <ul>
      <li v-for="xp in experience" v-bind:key="xp.title">
        {{ xp.company }} - {{ xp.title }}
        <ul>
          <li>{{ xp.start_date }} - {{ xp.end_date || 'Current' }}</li>
          <li>{{ xp.location }}</li>
          <li>
            Responsibilities:
            <ul>
              <li v-for="rp in xp.responsibilities" v-bind:key="rp">
                {{ rp }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
  }
}
</style>
