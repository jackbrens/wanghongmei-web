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
      <div class="mapper">
        <businessItem v-for="(item, index) in hasList" :key="index" :item-obj="item" />
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import businessItem from './components/businessItem'
import { maanshanList, wuhuList } from '@/views/store-info/config/index.js'
import { computed, ref } from 'vue'

const tabList = [
  {
    label: '芜湖地区',
    value: '1'
  },
  {
    label: '马鞍山地区',
    value: '2'
  }
]

const businessList = [
  {
    value: '1',
    childList: wuhuList
  },
  {
    value: '2',
    childList: maanshanList
  }
]
const currentTab = ref('1')

const hasList = computed(() => {
  return businessList.find((v) => v.value === currentTab.value)?.childList || []
})

const handleTab = (tab) => {
  currentTab.value = tab.value
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.tabs {
  margin: 50px 0 100px;
  padding: 20px;
  box-shadow: 0 0 45px 0 rgba(228, 226, 238, 0.8);
  display: flex;
  @include media($breakpoint-md) {
    flex-direction: column;
    margin: 30px;
  }
  .tab-item {
    border: 1px solid rgb(206, 212, 218);
    border-radius: 4px;
    padding: 16px 30px;
    margin-right: 50px;
    cursor: pointer;
    @include media($breakpoint-md) {
      margin-top: 30px;
    }
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
.mapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}
</style>
