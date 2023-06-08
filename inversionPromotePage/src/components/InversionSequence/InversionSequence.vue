<template>
    <div class="scroll-container">
        <section :class="`scroll-sequence__container ${sequenceInfo.scrollWithName}`" v-if="sequenceInfo">
            <div :class="`scroll-sequence ${sequenceInfo.containerName}`"></div>
            <div class="scroll-sequence__content">
                <div class="speak">
                    <div class="headline">Headstand</div>
                    <div class="description"><span class="black">King</span> of Asanas</div>
                </div>
                <div class="speak">
                    <div class="description">Start in a kneeling position</div>
                </div>
                <div class="speak">
                    <div class="description">Lift your knees off the ground and walk your feet in</div>
                </div>
                <div class="speak">
                    <div class="description">
                        Press down into your forearms and draw one knee into your chest. If this feels comfortable, lift your hips a little bit higher. <br>
                        Then draw the other knee into your chest.
                    </div>
                </div>
                <div class="speak">
                    <div class="description">
                        Extend your legs all the way. <br>
                        Squeeze your inner thighs together. <br>
                        Press down into your hands.
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts" src="./InversionSequence.ts"></script>
<style lang="scss" src="./InversionSequence.scss"></style>