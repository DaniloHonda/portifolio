<script setup>
import { TresCanvas } from '@tresjs/core'
import GalaxyScene from './GalaxyScene.vue'
</script>

<template>
  <TresCanvas alpha :clear-alpha="0" :dpr="[1, 2]">
    <TresPerspectiveCamera :position="[0, 3.5, 7.4]" :fov="45" :look-at="[0, 0.55, 0]" />
    <GalaxyScene />
  </TresCanvas>
</template>
