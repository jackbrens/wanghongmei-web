<template>
  <div>
    <breadcrumb />
    <div class="news-content">
      <div class="wrapper">
        <newsItem v-for="(item, index) in newsList" :key="index" :item-obj="item" />
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import newsItem from '@/views/news/components/newsItem/index.vue'
import { newsList } from '@/assets/news/config/index.js'
</script>
<style lang="scss" scoped></style>
