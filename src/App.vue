<template>
  <topHeader />
  <div class="main">
    <RouterView />
  </div>
  <bottomFooter />
  <fixedNav />
</template>
<script setup>
import { RouterView } from 'vue-router'
import topHeader from '@/components/topHeader'
import bottomFooter from '@/components/bottomFooter'
import fixedNav from '@/components/fixedNav'
</script>

<style scoped></style>
