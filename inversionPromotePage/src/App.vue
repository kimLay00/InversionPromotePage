<script setup lang="ts">
  import AppleSequence from './components/AppleSequence/AppleSequence.vue'
  import InversionSequence from './components/InversionSequence/InversionSequence.vue'
  import HeadlineSection from './components/HeadlineSection/HeadlineSection.vue'
  // let _appleSequence = {
  //   container: '.apple-sequence',
  //   containerName: 'apple-sequence',
  //   scrollWith: '.apple-container',
  //   scrollWithName: 'apple-container',
  //   imageSequenceTotal: 131,
  //   imagesRoot: 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/',
  //   priorityFrames: [0, 20, 40, 60, 90],
  //   cover: true,
  //   playUntil: 'scroll-out',
  //   starts: 'in'
  // },
let  _headstandSequence = {
    container: '.headstand-sequence',
    containerName: 'headstand-sequence',
    scrollWith: '.headstand-container',
    scrollWithName: 'headstand-container',
    imageSequenceTotal: 94,
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
    <!-- <AppleSequence :sequenceInfo="_appleSequence" v-if="_appleSequence"/> -->
    <HeadlineSection></HeadlineSection>
    <InversionSequence :sequenceInfo="_headstandSequence" v-if="_headstandSequence"/>
  </div>
</template>

<style scoped>
  body{
    margin: 0px;
  }
  :root{
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    color: white;
    text-shadow: 0 0 12px rgba(black, .8);
}
</style>
