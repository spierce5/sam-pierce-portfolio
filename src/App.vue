<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div
        :style="{ visibility: route.name == 'Home' ? 'hidden' : 'visible' }"
        class="pageName"
      >
        {{ route.name }}
      </div>
      <nav class="pages">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
        <RouterLink to="contact">Contact</RouterLink>
      </nav>
    </div>
    <section class="content">
      <RouterView />
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 2em;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: min-content;
  padding: 1em 0;
  border-bottom: 2px solid gainsboro;
}

.pageName {
  font-weight: bold;
  font-size: xx-large;
  font-family: 'Roboto', sans-serif;
}

.pages {
  display: flex;
  justify-content: flex-end;
  gap: 1em;
}

.content {
  max-height: 90%;
  /* margin-top: 1em; */
}
</style>
