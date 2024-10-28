import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    // Will be removed. Keeping around as playground
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/experience',
      name: 'Experience',
      component: ExperienceView,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = `S.Pierce | ${String(to.name)}`
  next()
})

export default router
