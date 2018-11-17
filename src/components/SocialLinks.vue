<template>
    <div>
        <div class="padding"></div>

        <h1>
            Want to hang from the rafters too?
        </h1>

        <h3>
            Contact us via our social media:
        </h3>

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
    h1, h3
        font-family 'Metal Mania', cursive
        user-select none

    .padding
        padding 30px 0px

    img
        width 100%

</style>
