<template>
  <div class="news-item">
    <div class="img-box">
      <img class="image" :src="requirePath(itemObj?.imgPath)" alt="" />
    </div>
    <div class="news-content">
      <div class="news-title">{{ itemObj?.title }}</div>
      <div class="news-desc">{{ itemObj?.desc }}</div>
      <div class="btn-box">了解更多</div>
    </div>
  </div>
</template>
<script setup>
import { requirePath } from '@/utils/index.js'
const props = defineProps({
  itemObj: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="scss" scoped>
.news-item {
  display: flex;
  padding: 30px 0 40px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 160px;
    height: 1px;
    background-color: #ebebeb;
    transition: all 0.66s cubic-bezier(0.17, 0.84, 0.44, 1);
  }
  &:hover::after {
    width: 100%;
    background-color: $bg-color;
  }
  &:hover .news-content .news-title {
    color: $bg-color;
  }
  &:hover .news-content .btn-box {
    background-color: $bg-color;
    color: #ffffff;
  }
  .img-box {
    width: 160px;
    height: 88px;
    margin-right: 30px;
    .image {
      width: 100%;
      height: 100%;
    }
  }
  .news-content {
    flex: 1;
    .news-title {
      font-size: 22px;
      color: #000000;
      margin-bottom: 20px;
    }
    .news-desc {
      font-size: 12px;
      color: #999999;
    }
    .btn-box {
      border: 1px solid #ebebeb;
      width: 120px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999999;
      cursor: pointer;
      margin-top: 26px;
      font-size: 14px;
      transition: all 0.66s cubic-bezier(0.17, 0.84, 0.44, 1);
    }
  }
}
</style>
