<script setup lang="ts">
  import AppleSequence from './components/AppleSequence/AppleSequence.vue'
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
    _treeSequence = {
      container: '.tree-sequence',
      containerName: 'tree-sequence',
      scrollWith: '.tree-container',
      scrollWithName: 'tree-container',
      imageSequenceTotal: 131,
      imagesRoot: 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/',
      priorityFrames: [0, 20, 40, 60, 90],
      cover: true,
      playUntil: 'scroll-out',
      starts: 'in'
    }
</script>

<template>
  <div class="sequenceContainer">
    <AppleSequence :sequenceInfo="_appleSequence" v-if="_appleSequence"/>
    <AppleSequence :sequenceInfo="_treeSequence" v-if="_treeSequence"/>
  </div>
</template>

<style scoped>

</style>
