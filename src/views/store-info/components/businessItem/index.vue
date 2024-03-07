<template>
  <div class="business">
    <div class="img-box"><img class="image" :src="requirePath(itemObj?.imgPath)" alt="" /></div>
    <div class="content">
      <div class="content-left">
        <p class="desc">
          <span class="title">{{ itemObj?.title }}</span>
          <span class="phone">{{ itemObj?.phone }}</span>
        </p>
        <p class="address">{{ itemObj?.address }}</p>
      </div>
      <div class="content-right">
        <img :src="requirePath('arrow-right.png')" alt="" />
      </div>
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
@import '@/assets/style/variable';
.business {
  width: 380px;
  height: 350px;
  box-shadow: 0 0 5px #c5c5c5;
  margin: 0 30px 30px 0;
  cursor: pointer;
  @include media($breakpoint-md) {
    width: 100%;
    height: 100%;
    margin: 0 30px 30px;
  }
  &:nth-of-type(3n) {
    margin-right: 0;
    @include media($breakpoint-md) {
      margin-right: 30px;
    }
  }
  &:hover .img-box .image {
    transform: scale(1.2);
  }
  &:hover .content .content-left .desc .title,
  &:hover .content .content-left .desc .phone,
  &:hover .content .content-left .address {
    color: $bg-color;
  }
  .img-box {
    width: 100%;
    height: 74%;
    overflow: hidden;
    .image {
      width: 100%;
      height: 100%;
      transition: all 0.5s;
    }
  }
  .content {
    display: flex;
    padding: 18px 24px 13px 18px;
    .content-left {
      color: #666;
      padding-right: 20px;
      .desc {
        display: flex;
        justify-content: space-between;
        padding-bottom: 5px;
        @include media($breakpoint-md) {
          flex-direction: column;
        }
        .title {
          color: #333;
        }
      }
      .address {
        font-size: 14px;
      }
    }
    .content-right {
      display: flex;
      align-items: center;
    }
  }
}
</style>
