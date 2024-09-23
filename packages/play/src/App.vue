<script setup lang="ts">
import { ref } from 'vue'
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
</template>

<style scoped></style>
