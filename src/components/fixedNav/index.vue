<template>
  <div class="fixed-nav">
    <div class="fixed-nav-item">
      <img class="icon" :src="requirePath('weixin.png')" alt="" />
      <p>二维码</p>
      <div class="position-box">
        <img :src="requirePath('contact.jpg')" alt="" />
      </div>
    </div>
    <div class="fixed-nav-item">
      <img class="icon" :src="requirePath('rexian.png')" alt="" />
      <p>联系我们</p>
      <div class="position-box contact"><p style="padding: 10px">400-8876516</p></div>
    </div>
  </div>
</template>
<script setup>
import { requirePath } from '../../utils/index.js'
const list = [
  {
    label: '二维码',
    imgPath: 'weixin.png'
  },
  {
    label: '联系我们',
    imgPath: 'rexian.png'
  }
]
</script>
<style scoped lang="scss">
@import '@/assets/style/variable';
.fixed-nav {
  position: fixed;
  width: 60px;
  right: 10px;
  bottom: 10%;
  z-index: 9;
  background-color: $bg-color;
  border-radius: 2px;
  color: #ffffff;
  font-size: 12px;
  .fixed-nav-item {
    border-bottom: 1px solid #eeeeee40;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    position: relative;
    &:last-of-type {
      border-bottom: 0;
    }
    &:hover {
      background-color: #9b6526;
    }
    .icon {
      width: 16px;
    }
    &:hover .position-box {
      display: block;
    }
    .position-box {
      position: absolute;
      bottom: 0;
      left: -210px;
      box-shadow: 0 2px 5px #bdbdbd;
      background-color: #ffffff;
      display: none;
      & > img {
        width: 200px;
        height: 240px;
      }
    }
    .contact {
      background-color: $bg-color;
      left: -143px;
      font-size: 18px;
    }
  }
}
</style>
