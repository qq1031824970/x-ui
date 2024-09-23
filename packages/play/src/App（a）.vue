<script setup>
import { useFloating, flip } from '@floating-ui/vue'
import { ref } from 'vue'

const buttonRef = ref(null)
const tooltipRef = ref(null)

const { floatingStyles } = useFloating(buttonRef, tooltipRef, {
  middleware: [flip()],
  placement: 'top',
})
</script>

<template>
  <div>
    <button ref="buttonRef" aria-describedby="tooltip">My button</button>
    <div
      ref="tooltipRef"
      role="tooltip"
      class="tooltip"
      :style="floatingStyles"
    >
      My tooltip
    </div>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
  </div>
</template>

<style lang="scss">
.tooltip {
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  background: #222;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;
}
</style>
