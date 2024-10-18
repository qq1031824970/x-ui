<template>
  <div>
    <x-button type="primary" loading>Loading</x-button>
    <x-button type="primary" loading-icon="circle-notch" loading
      >Loading</x-button
    >
    <x-button type="primary" loading>
      <template #loading>
        <x-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </x-button>
  </div>
</template>
