<template>
  <topHeader />
  <div class="main">
    <RouterView />
  </div>
  <bottomFooter />
</template>
<script setup>
import { RouterView } from 'vue-router'
import topHeader from '@/components/topHeader'
import bottomFooter from '@/components/bottomFooter'
</script>

<style scoped></style>
