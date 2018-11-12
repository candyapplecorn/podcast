<template>
    <iframe
            id="player"
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/339705991&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    >

    </iframe>
</template>

<script>
    export default {
        name: "SoundCloud"
    }
</script>

<style lang="stylus" scoped>
#player
    height 300px
</style>