<script setup lang="ts"></script>

<template>
  <main class="home">
    <div class="homeContent">
      <div class="welcomeMsg">
        <div class="welcomeTitle">Hello, I'm Sam Pierce</div>
        I'm a senior technical consultant specializing in maintenance software
        for the manufacturing industry. I have a passion for building efficient,
        reliable solutions and am exploring the world of full-stack development.
        When I'm not designing software, you’ll probably find me making music or
        diving into new creative projects.
      </div>
      <img src="../assets/me_vib.jpg" alt="me" class="portrait" />
    </div>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.homeContent {
  display: flex;
  gap: 1em;
  height: 60%;
  justify-content: flex-end;
  align-items: center;
}

.welcomeMsg {
  text-align: left;
  width: 50%;
}

.welcomeTitle {
  font-family: 'Roboto', sans-serif; /* Choose a clean, welcoming font like Roboto, Arial, or Poppins */
  font-weight: 700; /* Bold font weight */
  font-size: 2.5em; /* Large font size for emphasis */
  color: #2c3e50; /* A warm, dark color */
  text-align: center;
  line-height: 1.2; /* Slightly tighter line height for compactness */
  margin: 0.5em 0;
}

.portrait {
  border-radius: 15px;
  height: 100%;
  box-shadow: -5px 5px 5px 2px slategrey;
}
</style>
