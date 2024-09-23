<template>
  <div>
    <DynamicScroller :items="dataList" :min-item-size="51" class="scroller">
      <template v-slot="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :size-dependencies="[item.label]"
          :data-index="index"
        >
          <div style="overflow-wrap: break-word">
            {{ item.label }}
          </div>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>
</template>

<script setup>
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const dataList = Array.from({ length: 100 }).map((item, index) => ({
  id: index + 1,
  label: index + 1 + 'name',
}))
</script>

<style>
.scroller {
  height: 300px;
  overflow-y: auto;
}

.item {
  height: 30px;
  line-height: 30px;
}
.item2 {
  height: 60px;
  line-height: 60px;
  background-color: plum;
}
</style>
