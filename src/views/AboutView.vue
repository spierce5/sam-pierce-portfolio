<script lang="ts" setup>
import ResumeData from '../assets/resume_data.json'

const { work } = ResumeData
</script>

<template>
  <div class="about">
    <ul>
      <li v-for="xp in work" v-bind:key="xp.position">
        {{ xp.name }} - {{ xp.position }}
        <ul>
          <li>{{ xp.startDate }} - {{ xp.endDate || 'Current' }}</li>
          <li>{{ xp.location }}</li>
          <li>
            Responsibilities:
            <ul>
              <li v-for="rp in xp.highlights" v-bind:key="rp">
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
