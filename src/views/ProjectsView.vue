<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

interface Project {
  id: string
  name: string
  description: string
  html_url: string
}

const API_URL = 'https://api.github.com/search/repositories?q=user:spierce5+topic:featured-repo'
const projects = ref<Project[]>([])

watchEffect(async () => {
  // this effect will run immediately and then
  const url = API_URL
  const res = await (await fetch(url)).json()
  projects.value = res.items
})

// interface GitHubRepo {
//   id: number
//   name: string
//   full_name: string
//   owner: {
//     login: string
//     id: number
//     avatar_url: string
//     html_url: string
//   }
//   private: boolean
//   html_url: string
//   description: string | null
//   fork: boolean
//   url: string
//   created_at: string
//   updated_at: string
//   pushed_at: string
//   git_url: string
//   ssh_url: string
//   clone_url: string
//   svn_url: string
//   homepage: string | null
//   size: number
//   stargazers_count: number
//   watchers_count: number
//   language: string | null
//   forks_count: number
//   open_issues_count: number
//   license: {
//     key: string
//     name: string
//     spdx_id: string
//     url: string | null
//     node_id: string
//   } | null
//   forks: number
//   open_issues: number
//   watchers: number
//   default_branch: string
// }

// async function getProjects() {
// const data = await fetch('https://api.github.com/users/spierce5/repos')
// console.log(data.json())
// const json = await data.json()
// const filteredProjects = await json.filter((repo: GitHubRepo) =>
//   featuredProjects.includes(repo.name),
// )

// return await filteredProjects
// }
</script>

<template>
  <div v-if="projects.length > 0" class="projContainer">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :description="project.description"
      :html_url="project.html_url"
    />
  </div>
</template>

<style>
.projContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  margin-top: 2em;
  justify-content: space-around;
}

@media (max-width: 1024px) {
}

@media (max-width: 820px) {
}

@media (max-width: 768px) {
}

@media (max-width: 480px) {
}
</style>
