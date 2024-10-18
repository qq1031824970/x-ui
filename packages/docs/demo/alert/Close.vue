<script setup>
// import { XMessage } from 'x-anything'

function handleClose() {
  // XMessage.info('close callback')
  console.log('close callback')
}
</script>
<template>
  <div class="basic block">
    <x-alert title="Unclosable alert" type="success" :closable="false" />
    <x-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
