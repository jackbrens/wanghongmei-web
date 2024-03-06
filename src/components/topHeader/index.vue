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
          <div class="menu-icon" @click="handleIcon"></div>
        </div>
      </div>
      <!--移动端的导航-->
      <div class="navbar-collapse" :class="{ active: isShowCollapse }">
        <ul class="nav-list">
          <li
            :class="{ active: route.name === li.routerName }"
            v-for="(li, index) in menuList"
            :key="index"
            @click="handleOnMenuMobile(li.routerName)"
          >
            {{ li.label }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import logoImg from '@/assets/menu/logo.png'
import { menuList } from '@/utils/index.js'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()
const handleOnMenu = (routerName) => {
  router.push({ name: routerName })
}
const handleOnMenuMobile = (routerName) => {
  router.push({ name: routerName })
  isShowCollapse.value = false
}

const isShowCollapse = ref(false)

const handleIcon = () => {
  isShowCollapse.value = !isShowCollapse.value
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.top-bar {
  background-color: #ffffff;
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

.navbar-collapse {
  position: absolute;
  width: 100%;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  transform: scaleY(0);
  transform-origin: 50% 0;
  opacity: 0;
  &.active {
    transform: scaleY(1);
    opacity: 1;
  }
  .nav-list {
    & > li {
      padding: 10px;
      border-bottom: 1px solid #eeeeee;
      cursor: pointer;
      &.active {
        color: $bg-color;
      }
    }
  }
}
@include media($breakpoint-md) {
  .top-bar {
    position: fixed;
    z-index: 99;
    width: 100%;
    .top-box {
      height: 60px;
      .logo {
        width: 200px;
      }
      .right-top {
        align-items: center;
        .uls {
          display: none;
        }
        .menu-icon {
          background: url('@/assets/menu.svg') no-repeat;
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
