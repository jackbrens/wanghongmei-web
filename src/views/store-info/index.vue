<template>
  <div>
    <breadcrumb />
    <div class="wrapper">
      <div class="mapper">
        <businessItem v-for="(item, index) in businessList" :key="index" :item-obj="item" />
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import businessItem from './components/businessItem'
import { businessList } from '@/views/store-info/config/index.js'
</script>
<style lang="scss" scoped>
.mapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}
</style>
