<script setup>
function handleBtnClick() {
  console.log('btn click')
}
</script>

<template>
  <p>
    <x-button @click="handleBtnClick"> with throttle</x-button>
    <x-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</x-button
    >
  </p>
</template>
