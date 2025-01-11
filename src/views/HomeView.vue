<script setup lang="ts">
import { FaLinkedin } from 'vue-icons-plus/fa'
import { AiTwotoneMail } from 'vue-icons-plus/ai'
import { CgFileDocument } from 'vue-icons-plus/cg'
import { useWindowSize } from '@vueuse/core'

// const { viewWidth } = useWindowSize()

const titleText = "Hello, I'm Sam Pierce"
const messageText =
  "I'm a senior technical consultant specializing in maintenance \
software for the manufacturing industry. I have a passion for \
building efficient, reliable solutions and am exploring the world of \
full-stack development. When I'm not designing software, you'll \
probably find me making music or diving into new creative projects."
const imagePath = '/motion-portrait.gif'

const links = [
  {
    path: '/Resume.pdf',
    icon: CgFileDocument,
    text: 'Resume',
  },
  {
    path: 'https://www.linkedin.com/in/pierce-samuel',
    icon: FaLinkedin,
    text: 'linkedin.com/in/pierce-samuel',
  },
  {
    path: 'mailto:sam.pierce76@gmail.com',
    icon: AiTwotoneMail,
    text: 'Sam.Pierce76@gmail.com',
  },
]
</script>

<template>
  <main class="home">
    <div class="homeContent">
      <div class="infoPanel">
        <div class="welcomeMsg">
          <div class="welcomeTitle">{{ titleText }}</div>
          <div>
            {{ messageText }}
          </div>
        </div>
        <div class="contactBar">
          <div v-for="link in links" v-bind:key="link.path">
            <a :href="link.path" target="_blank" class="iconButton link"
              ><component :is="link.icon" />{{ link.text }}</a
            >
          </div>
        </div>
      </div>
      <div class="imageContainer">
        <img :src="imagePath" alt="me" class="portrait" />
      </div>
    </div>
    <div class="homeMobileContent">
      <div class="welcomeTitle">
        {{ titleText.split(' ')[0] }}<br />{{ titleText.split(',')[1] }}
      </div>
      <div class="imageContainer">
        <img :src="imagePath" alt="me" class="portrait" />
      </div>
      <div>
        {{ messageText }}
      </div>
      <div class="contactBar">
        <div v-for="link in links" v-bind:key="link.path">
          <a :href="link.path" target="_blank" class="iconButton link"
            ><component :is="link.icon" />{{ link.text }}</a
          >
        </div>
      </div>
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
  justify-content: space-around;
  align-items: center;
}

.homeMobileContent {
  display: none;
}

.infoPanel {
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-rows: 3fr 1fr;
}

.welcomeTitle {
  font-family: 'Roboto', sans-serif; /* Choose a clean, welcoming font like Roboto, Arial, or Poppins */
  font-weight: 700; /* Bold font weight */
  font-size: 2.5em; /* Large font size for emphasis */
  color: #2c3e50; /* A warm, dark color */
  line-height: 1.2; /* Slightly tighter line height for compactness */
  margin: 0.5em 0;
  text-align: left;

  background: linear-gradient(to right, black, red, blue);
  background-size: 200%;
  color: transparent;
  background-clip: text;
  animation: colorChange 3s ease-in-out infinite;
}

@keyframes colorChange {
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}

.welcomeMsg {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.portrait {
  border-radius: 15px;
  height: 100%;
  /* box-shadow: -5px 5px 5px 2px slategrey; */

  clip-path: polygon(
    0% 0%,
    15% 0%,
    15% 5%,
    16% 0%,
    18% 0%,
    18% 2%,
    19% 0%,
    20% 0%,
    100% 0%,
    100% 10%,
    95% 10%,
    100% 11%,
    100% 100%,
    25% 100%,
    25% 98%,
    23% 98%,
    22% 97%,
    21% 97%,
    21% 96%,
    19% 95%,
    19% 94%,
    17% 94%,
    16% 93%,
    13% 92%,
    12% 91%,
    11% 90%,
    11% 89%,
    10% 89%,
    9% 88%,
    8% 87%,
    8% 86%,
    7% 86%,
    6% 85%,
    5% 84%,
    5% 83%,
    4% 83%,
    3% 82%,
    3% 81%,
    2% 81%,
    1% 80%,
    0% 79%
  );
}

.imageContainer {
  height: 100%;

  filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
}

.contactBar {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .imageContainer {
    height: 75%;
  }

  .home {
    align-items: flex-start;
    transform: translateY(5em);
  }
}

@media (max-width: 768px) {
  .infoPanel {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .home {
    transform: none;
  }

  .homeContent {
    display: none;
  }

  .homeMobileContent {
    display: flex;
    flex-direction: column;
    max-width: 95%;
    align-items: center;
    margin-top: 25px;
    padding-bottom: 70px;
    gap: 2em;
  }

  .welcomeTitle {
    margin-top: 0;
    text-align: center;
  }

  .imageContainer {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .portrait {
    height: 400px;
  }

  .contactBar {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
