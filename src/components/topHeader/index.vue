<template>
  <header>
    <div class="top-bar">
      <div class="wrapper top-box">
        <div class="logo">
          <img :src="logoImg" alt="" />
        </div>
        <div class="right-top">
          <ul class="uls">
            <li
              v-for="(li, index) in menuList"
              :class="{ active: route.name === li.routerName }"
              :key="index"
              @click="handleOnMenu(li.routerName)"
            >
              {{ li.label }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="wrapper"></div>
    </div>
  </header>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import logoImg from '@/assets/menu/logo.png'
import { menuList } from '@/utils/index.js'

const router = useRouter()
const route = useRoute()
const handleOnMenu = (routerName) => {
  router.push({ name: routerName })
}
</script>
<style lang="scss" scoped>
.top-bar {
  .top-box {
    display: flex;
    justify-content: space-between;
    height: 80px;
    .logo {
      padding: 10px 0;
      width: 400px;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    .right-top {
      display: flex;
    }
  }
}
.uls {
  display: flex;
  color: #000;
  & > li {
    padding: 0 24px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: $bg-color;
      color: #ffffff;
    }
  }
  & > li.active {
    background-color: $bg-color;
    color: #ffffff;
  }
}
</style>
