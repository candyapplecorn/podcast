<template>
    <div>
        <social-button
                :href="link"
                :title="service"
                v-for="(link, service) in links"
                :key="service"
        >
        </social-button>
    </div>
</template>

<script>
    import TwitterButton from '@/components/UI/TwitterButton';
    import SocialButton from '@/components/UI/SocialButton';

    export default {
        name: "SocialLinks",
        components: {
            TwitterButton,
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

<style scoped>

</style>