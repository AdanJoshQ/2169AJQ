<template>
  <div class="container mt-4">
    <h1 class="mb-4">My SPA Portfolio</h1>

    <Profile />
    <Education />
    <Skills />
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'


export default {
  name: 'App',
  components: {
    Profile,
    Education,
    Skills
  }
}
</script>
