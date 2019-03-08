<template>
  <Layout>
    <router-view :key="$route.fullPath"></router-view>
  </Layout>
</template>
<script>
import Layout from '@/layout/default.vue'
export default {
  components: {
    Layout
  }
}
</script>
