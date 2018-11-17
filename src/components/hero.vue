<template>
    <div class="hero">
        <img class="hero" :src="heroImg" alt="Chris and Austin">
    </div>
</template>

<script>
    import heroImg from '@/assets/hanginfromtherafterspodcastlogo.png';

    export default {
        name: "hero",
        data(){
            return {
                heroImg
            }
        }
    }
</script>

<style lang="stylus" scoped>
    div.hero
        width 100%
        overflow none
        overflow hidden
        padding 0 0 60px 0

    img.hero
        padding 0 0 0 8px
</style>