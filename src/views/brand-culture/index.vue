<template>
  <div>
    <breadcrumb />
    <div
      class="brand-item animate__fadeInUp onMounted-wow"
      :data-wow-delay="`${index * 0.3}s`"
      v-for="(item, index) in brandList"
      :key="index"
    >
      <div class="wrapper">
        <div class="img">
          <img :src="requirePath(item.imgPath)" alt="" />
        </div>
        <div class="right-box">
          <p>品牌故事: {{ item.title }}</p>
          <p>{{ item.english }}</p>
          <p>{{ item.subtitle }}</p>
          <div class="line"></div>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import { requirePath } from '@/utils/index.js'
import { onMounted } from 'vue'
import WOW from 'wow.js'
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

const brandList = [
  {
    imgPath: 'logo/xiguan-logo.png',
    title: '安徽喜贯',
    english: 'COMPANY STORY',
    subtitle: '三代传承，以传承中医精髓，弘扬中华文化为己任',
    desc: `喜贯，1956年始，三代传承，一路秉承中医养生健康观、自然观、求己观的发展理念，自始以“传承中医精髓，弘扬中华文化”为己任，
    喜贯打破了传统旧有思维，创造性地整合了中医养生最佳资源，将养生门店、职培学校、中草药种植加工和赋能平台四大业务板块联动运营，
    形成一体三翼的格局，打造了中医养生产业链全闭环体系，力行为行业互为补充、和谐发展的生态圈贡献自己一份力量。`
  },
  {
    imgPath: 'logo/wanghongmei-logo.png',
    title: '王红梅',
    english: 'COMPANY STORY',
    subtitle: '历经五十多年的品牌老店，具有厚重的中华中医文化底蕴',
    desc: `“王红梅祖传按摩”是一家历经五十多年的品牌老店，具有厚重的中华中医文化底蕴，是芜湖市中医推拿界的权威品牌。
    多年来，王红梅医师一直秉承“以人为本”的理念和“健康服务”的原则，不断研究探索中医推拿技术，积累临床经验，
    而千千万万的江城人民也在“王红梅祖传按摩中心”得到了病痛的缓解和治疗，感受到中医文化的博大精深。`
  },
  {
    imgPath: 'logo/rudetang-logo.png',
    title: '茹德堂',
    english: 'COMPANY STORY',
    subtitle: '不忘初心，牢记使命',
    desc: `“茹德堂”是安徽喜贯健康管理咨询有限公司旗下艾灸养生品牌，其创始人是世界中医药学会主办的2015亚洲艾灸高峰论坛（日本大阪）中方
    代表王丽茹女士。“茹德堂”不忘初心，立志于为国家大健康产业发展倾尽绵薄之力，将以前瞻性的健康管理理念为依托，
    凭借专业的健康管理团队和国内外优质的软硬件资源，为社会大众提供专业专享健康服务，引领中医艾灸行业发展。`
  }
]
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.brand-item {
  padding: 50px 0;
  &:nth-of-type(2n-1) {
    background-color: #f1f2f3;
    position: relative;
    z-index: -2;
  }
  &:nth-of-type(2n-1) .wrapper {
    flex-direction: row-reverse;
    @include media($breakpoint-md) {
      flex-direction: column;
      align-items: center;
    }
    .right-box {
      margin: 0 50px 0 0;
      @include media($breakpoint-md) {
        margin: 30px 30px;
      }
    }
  }
  .wrapper {
    display: flex;
    @include media($breakpoint-md) {
      flex-direction: column;
      align-items: center;
    }
  }
  .img {
    width: 400px;
    height: 400px;
    background-color: #f7f7f7;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @include media($breakpoint-md) {
      max-width: 200px;
      max-height: 200px;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: #a12b3d99;
      @include media($breakpoint-md) {
        max-width: 60px;
        max-height: 60px;
      }
    }
    &::before {
      left: 0;
      bottom: 0;
      z-index: -1;
    }
    &::after {
      right: 0;
      top: 0;
    }
    & > img {
      width: 90%;
      height: 90%;
      border-radius: 50%;
      object-fit: contain;
    }
  }
  .right-box {
    margin-left: 50px;
    color: #333333;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include media($breakpoint-md) {
      margin: 30px 30px 0;
    }
    .line {
      height: 4px;
      width: 120px;
      background-color: $bg-color;
      margin: 10px 0 20px;
    }
    & > p:nth-of-type(1) {
      font-size: 28px;
      color: $bg-color;
    }
    & > p:nth-of-type(2) {
      margin: 4px 0 10px;
    }
    & > p:nth-of-type(3) {
      font-size: 25px;
    }
    & > p:nth-of-type(4) {
      font-size: 16px;
      line-height: 40px;
    }
  }
}
</style>
