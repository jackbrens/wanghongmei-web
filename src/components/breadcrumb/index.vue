<template>
  <div class="breadcrumb">
    <ul class="wrapper">
      <li @click="handleHome">
        <span>首页</span>
        <span>»</span>
      </li>
      <li @click="handleRoutePath">
        <span>{{ route.meta.title }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const handleHome = () => {
  router.push({ name: 'home' })
}
const handleRoutePath = () => {
  router.push({ name: route.name })
}
</script>

<style scoped lang="scss">
.breadcrumb {
  height: 60px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  .wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    li {
      display: flex;
      align-items: center;
    }
    li span:nth-of-type(1) {
      cursor: pointer;
    }
    li span:nth-of-type(2) {
      margin: 0 5px;
    }
  }
}
</style>
