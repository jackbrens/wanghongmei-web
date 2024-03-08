<template>
  <div>
    <breadcrumb />
    <div class="wrapper">
      <div class="title-box animate__fadeInUp onMounted-wow">
        <p>联系我们</p>
        <p>Contact us</p>
        <div class="line"></div>
      </div>
      <div class="list animate__fadeInLeft onMounted-wow">
        <div class="list-item" v-for="(item, index) in contactList" :key="index">
          <div class="left-box">
            <div class="left-line"></div>
            <div class="content-box">
              <p>{{ item.title }}</p>
              <p>{{ item.subtitle }}</p>
            </div>
          </div>
          <div class="icon">
            <img :src="requirePath(item.imgPath)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import { requirePath } from '@/utils/index.js'
import WOW from 'wow.js'
import { onMounted } from 'vue'

onMounted(() => {
  const wowInt = new WOW({
    // 对所有拥有该class的元素挂载动画
    boxClass: 'onMounted-wow',
    // 需要挂载的动画元素
    animateClass: 'animate__animated',
    // 偏移值（即偏移一定距离后再执行动画，推荐设置！）
    offset: 100,
    // 移动设备是否生效
    mobile: true,
    // 是否支持异步
    live: true
  })
  wowInt.init()
})

const contactList = [
  {
    imgPath: 'phone.png',
    title: '全国免费热线：',
    subtitle: '400-8876516'
  },
  {
    imgPath: 'email.png',
    title: '公司邮箱：',
    subtitle: '13956156908@126.com'
  },
  {
    imgPath: 'addr.png',
    title: '公司地址：',
    subtitle: '安徽省芜湖市黄山东路新华文沁苑1栋5单元4层'
  }
]
</script>
<style scoped lang="scss">
@import '@/assets/style/variable';

$color: #59413d;

.title-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333333;
  margin: 50px 0;
  & > p:nth-of-type(1) {
    font-size: 50px;
    @include media($breakpoint-md) {
      font-size: 30px;
    }
  }
  & > p:nth-of-type(2) {
    color: #666666;
    font-size: 24px;
    padding: 10px 0;
    @include media($breakpoint-md) {
      font-size: 18px;
    }
  }
  .line {
    width: 100px;
    height: 1px;
    background-color: $bg-color;
  }
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include media($breakpoint-md) {
    padding: 20px;
  }
  .list-item {
    flex: 46%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #666666;
    font-size: 20px;
    background-color: #f5f5f5;
    margin-bottom: 50px;
    width: 600px;
    padding: 30px;
    @include media($breakpoint-md) {
      font-size: 16px;
    }
    @include media($breakpoint-md) {
      padding: 20px;
      width: 100%;
    }
    &:nth-of-type(2n) {
      background-color: #9e9c99;
    }
    &:nth-of-type(2n) .left-box {
      background-color: #9e9c99;
      color: #ffffff;
    }
    &:nth-of-type(2n) .left-box .left-line {
      background-color: #ffffff;
    }
    .left-box {
      flex: 1;
      display: flex;
      align-items: center;
      margin-right: 20px;
      .left-line {
        width: 6px;
        height: 30px;
        background-color: #666666;
      }
      .content-box {
        margin-left: 30px;
        & > p:nth-of-type(1) {
          font-weight: bold;
          padding-bottom: 10px;
        }
      }
    }
    .icon {
      @include media($breakpoint-md) {
        width: 50px;
        height: 50px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
