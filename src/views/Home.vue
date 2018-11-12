<template>
  <div id="home">
    <img :src="hanginfromtherafterspodcast" alt="Chris and Austin">

    <sound-cloud></sound-cloud>

    <social-links></social-links>

    <img :src="bryce1" alt="Bryce and Fabbio">
  </div>
</template>

<script>
    import SoundCloud from '@/components/SoundCloud';
    import SocialLinks from '@/components/SocialLinks';

    import sideview from '@/assets/sideview.jpg'
    import hanginfromtherafterspodcast from '@/assets/hanginfromtherafterspodcast.jpg'

    export default {
        components: {
            SoundCloud,
            SocialLinks
        },
        data(){
            return {
                sideview,
                hanginfromtherafterspodcast
            }
        }
    };

</script>

<style lang="stylus" scoped>
  img
    width 100%
</style>