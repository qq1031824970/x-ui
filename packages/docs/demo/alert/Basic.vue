<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <x-alert type="success">Success alert</x-alert>
    <x-alert type="info">Info alert</x-alert>
    <x-alert type="warning">Warning alert</x-alert>
    <x-alert type="danger">Error alert</x-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <x-alert type="success" title="Success alert" />
    <x-alert type="info" title="Info alert" />
    <x-alert type="warning" title="Warning alert" />
    <x-alert type="danger" title="Error alert" />
  </div>
</template>
