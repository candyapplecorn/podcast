<template>
    <div>
        <hero />
        <h1>
            We'll <br>contact <br> you soon.
        </h1>
    </div>
</template>

<script>
    import logo from '@/assets/hanginfromtherafterspodcastlogo.png';
    import Hero from '@/components/hero';

    export default {
        name: "InterviewsSubmitted",
        components: {
            Hero
        },
        data(){
            return {
                logo
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => window.setTimeout(() => vm.$router.push({ name: 'home' }), 5000))
        }
    }
</script>

<style lang="stylus" scoped>
    >>>div.hero
        padding-bottom 0

    >>>img.hero
        width 50%
</style>