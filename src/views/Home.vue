<template>
  <div id="about">
    <img src="../assets/banner.jpg" alt="">
    <sound-cloud></sound-cloud>
    <carousel-container></carousel-container>
    <social-links></social-links>
  </div>
</template>

<script>
    import SoundCloud from '@/components/SoundCloud';
    import SocialLinks from '@/components/SocialLinks';
    import CarouselContainer from '@/components/CarouselContainer';

    export default {
        components: {
            SoundCloud,
            SocialLinks,
            CarouselContainer
        }
    };

</script>

<style lang="stylus" scoped>
  img
    width 100%
</style>