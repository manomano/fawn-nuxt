<template>
  <div class="content">
    <Home />
    <About />
    <Service />
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Service from '@/components/Service.vue'
export default {
  components: {
    Home,
    About,
    Service,
  },
}
</script>

<style></style>
