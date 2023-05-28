<script setup lang="ts">
  import AppleSequence from './components/AppleSequence/AppleSequence.vue'
  import InversionSequence from './components/InversionSequence/InversionSequence.vue'
  let _appleSequence = {
    container: '.apple-sequence',
    containerName: 'apple-sequence',
    scrollWith: '.apple-container',
    scrollWithName: 'apple-container',
    imageSequenceTotal: 131,
    imagesRoot: 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/',
    priorityFrames: [0, 20, 40, 60, 90],
    cover: true,
    playUntil: 'scroll-out',
    starts: 'in'
  },
  _headstandSequence = {
    container: '.headstand-sequence',
    containerName: 'headstand-sequence',
    scrollWith: '.headstand-container',
    scrollWithName: 'headstand-container',
    imageSequenceTotal: 121,
    imagesRoot: '/src/assets/headstandSequence/',
    priorityFrames: [0, 17, 39, 65],
    startFrame: 71,
    cover: true,
    playUntil: 'scroll-out',
    starts: 'in'
  }
</script>

<template>
  <div class="sequenceContainer">
    <AppleSequence :sequenceInfo="_appleSequence" v-if="_appleSequence"/>
    <InversionSequence :sequenceInfo="_headstandSequence" v-if="_headstandSequence"/>
  </div>
</template>

<style scoped>
  body{
    margin: 0px;
  }
</style>
