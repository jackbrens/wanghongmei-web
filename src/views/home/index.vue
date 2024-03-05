<template>
  <div>
    <swiper :initial-slide="1" :pagination="{ clickable: true }" :centered-slides="true">
      <swiper-slide v-for="item in ['swiper/swiper-1.jpg', 'swiper/swiper-2.jpg']" :key="item">
        <div class="swiper-item">
          <img
            :src="requirePath(item)"
            alt=""
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
// 导入 模块 关于各个模块解释在最下面
import SwiperCore, { EffectCoverflow, Navigation, Pagination, A11y, Autoplay } from 'swiper/core'
import { reactive } from 'vue'
import { requirePath } from '@/utils/index.js'

// 注册使用
SwiperCore.use([EffectCoverflow, Navigation, Pagination, A11y, Autoplay])

// 定义轮播图分页
const swiperOption = reactive({
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
</script>
<style lang="scss" scoped>
.swiper-item {
  height: 600px;
}
</style>
