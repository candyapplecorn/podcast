<template>
  <div id="home">
    <hero></hero>

    <sound-cloud></sound-cloud>

    <social-links></social-links>

    <img :src="alloncouch" alt="Bryce and Fabbio">
    <img :src="austinoncouch" alt="Bryce and Fabbio">
  </div>
</template>

<script>
    import SoundCloud from '@/components/SoundCloud';
    import SocialLinks from '@/components/SocialLinks';
    import Hero from '@/components/hero';

    import alloncouch from '@/assets/alloncouch.jpg';
    import austinoncouch from '@/assets/austinoncouch.jpg'

    export default {
        components: {
            SoundCloud,
            SocialLinks,
            Hero
        },
        data(){
            return {
                alloncouch,
                austinoncouch
            }
        }
    };

</script>

<style lang="stylus" scoped>
  img
    width 100%


</style>