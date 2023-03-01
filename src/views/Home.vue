<template>
  <div id="home">
    <hero></hero>
    <h2>
      Listen to the assholes ramble
    </h2>
    <sound-cloud></sound-cloud>
  <h2>
    You sing and you sing good!
  </h2>
    <h3>
      (on video)
    </h3>
    <youtube></youtube>

    <MerchandiseCarousel />

    <social-links></social-links>

    <a target="_blank" href="https://www.patreon.com/hangingfromtherafters">
      <img id=patreon :src="patreon" alt="Support us on Patreon!">
    </a>
    <h2>
      See the drunken assholes
    </h2>
    <table>
      <tr>
        <th>Austin</th>
        <th>Chris</th>
      </tr>
      <tr>
        <td><img :src="austinPic1" alt="Austin"></td>
        <td><img :src="chrisPic1" alt="Chris"></td>
      </tr>
      <tr>
        <th>Bryce</th>
        <th>Timmy</th>
      </tr>
      <tr>
        <td><img :src="brycePic1" alt="Bryce"></td>
        <td><img :src="timPic1" alt="Tim"></td>
      </tr>
    </table>
    <h2>
      The assholes and their guests
    </h2>
    <table>
      <tr>
        <td><img :src="alloncouch" alt="Bryce, Nikki, Anthony, Chris"></td>
        <td><img :src="austinoncouch" alt="Austin On Couch"></td>
      </tr>
    </table>
    <!--<img :src="alloncouch" alt="Bryce and Fabbio">
    <img :src="austinoncouch" alt="Bryce and Fabbio"> -->
  </div>
</template>

<script>
    import SoundCloud from '@/components/SoundCloud';
    import Youtube from '@/components/Youtube';
    import SocialLinks from '@/components/SocialLinks';
    import Hero from '@/components/hero';

    import alloncouch from '@/assets/alloncouch.jpg';
    import patreon from '@/assets/patreon.png';
    import austinoncouch from '@/assets/austinoncouch.jpg'
    import austinPic1 from '@/assets/austinPic1.jpeg'
    import brycePic1 from '@/assets/brycePic1.jpeg'
    import chrisPic1 from '@/assets/chrisPic1.jpeg'
    import timPic1 from '@/assets/timPic1.jpeg'
    import merchSticker from '@/assets/hanging_from_the_rafters_merch_sticker.png'
    import MerchandiseCarousel from "@/components/MerchandiseCarousel";

    export default {
        components: {
            SoundCloud,
            Youtube,
            SocialLinks,
            Hero,
            MerchandiseCarousel
        },
        data(){
            return {
                alloncouch,
                austinoncouch,
                austinPic1,
                brycePic1,
                chrisPic1,
                timPic1,
                patreon,
                merchSticker,
            }
        }
    };

</script>

<style lang="stylus" scoped>
  img
    width 100%
    height 100%

  #patreon
    width 70%
    padding-bottom 40px

  #merchandise
    width 70%
    padding-bottom 40px

  #merch-link
    font-size 1.25em




</style>
