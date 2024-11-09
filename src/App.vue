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
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/experience" class="link">Experience</RouterLink>
        <RouterLink to="/projects" class="link">Projects</RouterLink>
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
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
  .content {
    max-height: 70vh;
  }
}

@media (max-width: 480px) {
  .content {
    padding: 0;
    margin: 0;
  }
  .pageName {
    display: none;
  }
  .header {
    justify-content: flex-end;
  }
}
</style>
