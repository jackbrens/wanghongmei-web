<template>
  <div>
    <breadcrumb />
    <div class="wrapper">
      <div class="tabs">
        <div
          class="tab-item"
          :class="{ active: currentTab === tab.value }"
          v-for="tab in tabList"
          :key="tab.value"
          @click="handleTab(tab)"
        >
          {{ tab.label }}
        </div>
      </div>
      <div class="list-wrap">
        <div class="list-item" v-for="(item, index) in hasList" :key="index">
          <img class="bg-img" :src="requirePath(item.imgPath)" alt="" />
          <div class="item-content">
            <div class="item-name">
              <ul class="rating">
                <li v-for="i in 5" :key="i">
                  <img class="rating-star" :src="requirePath('star.svg')" alt="" />
                </li>
              </ul>
              <p class="size-30">{{ item.title }}</p>
              <p class="size-14">{{ item.subtitle }}</p>
            </div>
            <div class="item-price">
              <p class="size-30" v-if="item.unit">
                <span>{{ item.unit }}</span>
                <span style="font-size: 18px; margin-left: 8px">分钟</span>
              </p>
              <p>价格：{{ item.price }} 元</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import { requirePath } from '@/utils/index.js'
import { computed, ref } from 'vue'
import {
  auxiliaryConditioning,
  handConditioning,
  massageList,
  moxibustionList
} from '@/views/business-segments/config/index.js'

const tabList = [
  {
    label: '王牌推拿',
    value: '1'
  },
  {
    label: '古法艾灸',
    value: '2'
  },
  {
    label: '手法调理',
    value: '3'
  },
  {
    label: '辅助调理',
    value: '4'
  }
]

const hasList = computed(() => {
  if (currentTab.value === '2') return moxibustionList
  if (currentTab.value === '3') return handConditioning
  if (currentTab.value === '4') return auxiliaryConditioning
  return massageList
})

const currentTab = ref('1')
const handleTab = (tab) => {
  currentTab.value = tab.value
}
</script>
<style lang="scss" scoped>
.size-30 {
  font-size: 30px;
}
.size-14 {
  font-size: 14px;
}
.gary {
  color: #999999;
}
.tabs {
  margin: 50px 0 100px;
  padding: 20px;
  box-shadow: 0 0 45px 0 rgba(228, 226, 238, 0.8);
  display: flex;
  .tab-item {
    border: 1px solid rgb(206, 212, 218);
    border-radius: 4px;
    padding: 16px 30px;
    margin-right: 50px;
    cursor: pointer;
    &:hover {
      background-color: $bg-color;
      color: #ffffff;
    }
    &.active {
      background-color: $bg-color;
      color: #ffffff;
    }
  }
}
.list-wrap {
  display: flex;
  flex-wrap: wrap;
  .list-item {
    width: 32%;
    margin-right: 2%;
    margin-bottom: 2%;
    height: 440px;
    border: 1px solid #ccc;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    &::after {
      content: '';
      position: absolute;
      background-image: linear-gradient(
        179.89deg,
        rgba(0, 0, 0, 0) 58.73%,
        rgba(7, 7, 7, 0.9) 89.09%
      );
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &:hover .bg-img {
      transform: scale(1.2);
    }
    .bg-img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s;
    }
    .item-content {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 20px;
      .item-name {
        .rating {
          display: flex;
          .rating-star {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}
</style>
