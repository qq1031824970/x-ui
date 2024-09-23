<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue'
import type { SelectProps, SelectEmits, Option } from './types'
//@ts-ignore
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import {
  useFloating,
  flip,
  shift,
  autoUpdate,
  offset,
  type ReferenceElement,
} from '@floating-ui/vue'
import { onClickOutside, useFocus } from '@vueuse/core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineOptions({
  name: 'XSelect',
})
const props = withDefaults(defineProps<SelectProps>(), {})
const emits = defineEmits<SelectEmits>()

const state = reactive({
  isFocus: false,
  selectedItem: {} as Partial<Option>,
  hoverItem: {} as Partial<Option>,
  searchValue: '',
  options: [] as Option[],
})

watchEffect(() => (state.options = props.options || []))

watchEffect(() => (state.selectedItem = props.modelValue || {}))

const _ref = ref<HTMLDivElement>()
const floating = ref<HTMLDivElement>()
const descriptionRef = ref<HTMLDivElement>()
const searchInputRef = ref<HTMLDivElement>()

const { floatingStyles, update } = useFloating(_ref, floating, {
  middleware: [flip(), shift()],
  placement: 'bottom-start',
  // whileElementsMounted: autoUpdate,
})
const { floatingStyles: descriptionStyles } = useFloating(
  floating,
  descriptionRef,
  {
    middleware: [flip(), shift(), offset(8)],
    placement: 'right-start',
    whileElementsMounted: autoUpdate,
  }
)

onClickOutside(
  floating,
  () => {
    state.searchValue = ''
    handleSearch()
    state.isFocus = false
  },
  {
    ignore: [_ref],
  }
)
watch(
  () => state.isFocus,
  (val) => {
    if (val) {
      update()
    } else {
      if (floating.value) {
        const cleanup = autoUpdate(
          _ref.value as ReferenceElement,
          floating.value as HTMLElement,
          update
        )
        cleanup()
      }
    }
  }
)

useFocus(searchInputRef, { initialValue: true })
const handleSearch = () => {
  state.options = props.options.filter((item) =>
    item.label.includes(state.searchValue)
  )
}

const handleSelect = (item: any) => {
  if (item.value === state.selectedItem.value) return
  state.selectedItem = item
  emits('update:modelValue', state.selectedItem)
  state.isFocus = false
}

const handleReset = () => {
  state.selectedItem = {}
  emits('update:modelValue', state.selectedItem)
}
</script>

<template>
  <div
    ref="_ref"
    class="x-select"
    tabindex="0"
    :class="{
      'is-focus': state.isFocus,
    }"
    @click="state.isFocus = !state.isFocus"
  >
    <div
      class="x-select-text"
      :title="state.selectedItem.label || state.selectedItem.value"
    >
      {{ state.selectedItem.label || state.selectedItem.value || '' }}
    </div>
    <a
      class="x-select-clear"
      @click.stop="handleReset"
      v-show="Object.keys(state.selectedItem).length"
    >
      <font-awesome-icon icon="close" size="1x" />
    </a>
    <Teleport to="body">
      <div ref="floating" class="x-select-dropdown" :style="floatingStyles">
        <Transition name="fade">
          <div class="x-select-dropdown-content" v-if="state.isFocus">
            <div class="x-select-search-wrapper">
              <input
                ref="searchInputRef"
                class="x-select-search-input"
                type="search"
                placeholder="搜索"
                v-model.trim="state.searchValue"
                @input="handleSearch"
              />
            </div>
            <div class="x-select-options-wrapper">
              <DynamicScroller
                :items="state.options"
                keyField="value"
                :min-item-size="32"
                class="x-select-options-scroller"
              >
                <template v-slot="{ item, index, active }">
                  <DynamicScrollerItem
                    :item="item"
                    :active="active"
                    :size-dependencies="[item.label]"
                    :data-index="index"
                    @click="handleSelect(item)"
                    @mouseover="state.hoverItem = item"
                    @mouseout="state.hoverItem = {}"
                    :class="{
                      selected: item.value === state.selectedItem.value,
                    }"
                  >
                    <slot name="option" v-bind="{ item, index }">
                      <div class="x-select-option">
                        {{ item.label }}
                      </div>
                    </slot>
                  </DynamicScrollerItem>
                </template>
              </DynamicScroller>
            </div>

            <div
              ref="descriptionRef"
              class="x-select-options-description"
              :style="descriptionStyles"
              v-if="Object.keys(state.hoverItem).length"
            >
              <slot name="description">
                <div>
                  <div class="x-select-options-description-header">
                    {{ state.hoverItem.label }}
                  </div>
                  <div class="x-select-options-description-content">
                    {{ state.hoverItem.description }}
                  </div>
                </div>
              </slot>
            </div>
          </div>
        </Transition>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
