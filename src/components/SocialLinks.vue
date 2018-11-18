<template>
    <div>
        <div id="interview">
            <router-link to="you-sing-and-you-sing-good">
                Want <br>
                to be <br>
                on our <br>
                podcast?
            </router-link>
        </div>

        <social-button
                :href="link"
                :title="service"
                v-for="(link, service) in links"
                :key="service"
        >
        </social-button>

        <div class="padding"></div>
    </div>
</template>

<script>
    import SocialButton from '@/components/UI/SocialButton';

    export default {
        name: "SocialLinks",
        components: {
            SocialButton
        },
        data() {
            return {
                links: {
                    itunes: 'https://itunes.apple.com/us/podcast/hanging-from-the-rafters/id1363364432?mt=2',
                    stitchr: 'https://www.stitcher.com/podcast/hanging-from-the-rafters?refid=stpr',
                    tunein: 'https://tunein.com/podcasts/Comedy-Podcasts/Hanging-from-the-Rafters-p1122053/',
                    twitter: 'https://twitter.com/HangingRafters',
                    instagram: 'https://www.instagram.com/hangingfromtherafterspodcast/',
                    facebook: 'https://www.facebook.com/hangingfromtherafterspodcast/',
                    soundcloud: 'https://soundcloud.com/hangingfromtherafterspodcast'
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import url('https://fonts.googleapis.com/css?family=Metal+Mania')

    #interview
        padding 90px 0 80px 0
        font-size 2em
        font-family 'Metal Mania', cursive
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale

    .padding
        padding 30px 0px

    img
        width 100%

    br
        display block
        @media (min-width 600px)
            display none
</style>
