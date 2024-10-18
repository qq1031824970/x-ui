<template>
  <p>
    <x-button-group disabled>
      <x-button type="primary" icon="arrow-left">Previous Page</x-button>
      <x-button type="primary">
        Next Page<x-icon icon="arrow-right" style="margin-left: 8px" />
      </x-button>
    </x-button-group>
  </p>
  <p>
    <x-button-group type="warning" size="small">
      <x-button type="primary" icon="edit" round />
      <x-button type="primary" icon="share" />
      <x-button type="primary" icon="trash" round />
    </x-button-group>
  </p>
</template>
