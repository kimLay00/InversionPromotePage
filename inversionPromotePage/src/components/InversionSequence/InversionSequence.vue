<template>
    <div class="scroll-container">
        <section :class="`scroll-sequence__container ${sequenceInfo.scrollWithName}`" v-if="sequenceInfo">
            <div :class="`scroll-sequence ${sequenceInfo.containerName}`"></div>
            <div class="scroll-sequence__content">
                <div class="speak">
                    <h1>Scroll Sequence</h1>
                    <p>Just start scrolling</p>
                </div>
                <div class="speak">
                    <h1>This is Apple's image sequence</h1>
                    <p>All copyrights to them. Please don't sue me!</p>
                </div>
                <div class="speak">
                    <h1>The Text Animation</h1>
                    <p>Is created with Scroll-out.js. Go check it out!</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts" src="./InversionSequence.ts"></script>
<style lang="scss" src="./InversionSequence.scss"></style>