<script setup lang="ts">
import { ref } from 'vue'
import { XCollapse, XCollapseItem } from '../../components/Collapse'

const options = Array.from({ length: 1000 }).map((_, index) => ({
  label: index + 'name',
  value: index,
  description:
    '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
}))

const value = ref({
  label: '6name',
  value: 6,
})

const collapseModelValue = ref(['a'])
const collapseOnChange = () => {
  console.log('collapseOnChange')
}
</script>

<template>
  <x-button type="primary" size="small">Primary</x-button>
  {{ value }}
  <x-select :options="options" v-model="value">
    <!-- <template #option="{ item }">
      <div style="height: 30px">
        {{ item }}
      </div>
    </template> -->
  </x-select>
  <XCollapse accordion v-model="collapseModelValue" @change="collapseOnChange">
    <XCollapseItem name="a" title="title a"> content a </XCollapseItem>
    <XCollapseItem name="b" title="title b"> content b </XCollapseItem>
  </XCollapse>
</template>

<style scoped></style>
