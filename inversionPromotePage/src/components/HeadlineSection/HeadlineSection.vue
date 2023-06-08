<template>
    <div class="headlineSection">
        <div class="headlineImageContainer">
            <div :class="`headlineImage ${isEnlarged? 'enlarged' : ''}`"></div>
        </div>
        <div class="headlineText">Headstand</div>
    </div>
</template>
<script lang="ts" src="./HeadlineSection.ts"></script>
<style lang="scss" src="./HeadlineSection.scss"></style>