<template>
  <div class="banner">
    <div
      class="banner-wrapper"
      :style="{ backgroundImage: 'url(' + requirePath('banner.jpg') + ')' }"
    >
      <div class="wrapper banner-content">
        <span>{{ bannerParams?.title }}</span>
        <div class="line"></div>
        <span>{{ bannerParams?.subtitle }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { requirePath } from '@/utils'
const props = defineProps({
  bannerParams: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.banner {
  .banner-wrapper {
    height: 300px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .banner-content {
      width: 1200px;
      color: #ffffff;
      font-size: 40px;
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      & > span:nth-last-of-type(1) {
        font-size: 26px;
      }
      .line {
        height: 1px;
        width: 10%;
        background-color: #ffffff;
        margin: 10px 0 20px;
      }
    }
  }
}
</style>
