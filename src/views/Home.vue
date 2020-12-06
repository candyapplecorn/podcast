<template>
  <div id="home">
    <hero></hero>

    <MerchandiseCarousel />

    <sound-cloud></sound-cloud>

    <social-links></social-links>



    <a target="_blank" href="https://www.patreon.com/hangingfromtherafters">
      <img id=patreon :src="patreon" alt="Support us on Patreon!">
    </a>

    <img :src="alloncouch" alt="Bryce and Fabbio">
    <img :src="austinoncouch" alt="Bryce and Fabbio">
  </div>
</template>

<script>
    import SoundCloud from '@/components/SoundCloud';
    import SocialLinks from '@/components/SocialLinks';
    import Hero from '@/components/hero';

    import alloncouch from '@/assets/alloncouch.jpg';
    import patreon from '@/assets/patreon.png';
    import austinoncouch from '@/assets/austinoncouch.jpg'
    import merchSticker from '@/assets/hanging_from_the_rafters_merch_sticker.png'
    import MerchandiseCarousel from "@/components/MerchandiseCarousel";

    export default {
        components: {
            SoundCloud,
            SocialLinks,
            Hero,
            MerchandiseCarousel
        },
        data(){
            return {
                alloncouch,
                austinoncouch,
                patreon,
                merchSticker,
            }
        }
    };

</script>

<style lang="stylus" scoped>
  img
    width 100%

  #patreon
    width 70%
    padding-bottom 40px

  #merchandise
    width 70%
    padding-bottom 40px

  #merch-link
    font-size 1.25em


</style>
