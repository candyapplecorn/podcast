<template>
    <div id="nav">
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <p>
            Hanging from the Rafters
        </p>
    </div>
</template>

<script>
    import banner from '@/assets/banner.jpg';

    export default {
        name: "Nav",
        components: {
            banner
        }
    }
</script>

<style lang="stylus" scoped>

#nav
    /*background url(../assets/hanginfromtherafterspodcast.jpg)*/
    font-family 'Metal Mania', cursive;
    p
        background black
        width 100%
        margin 0


    padding 5px 0px 15px
    a
        font-weight bold
        color #2c3e50

        &.router-link-exact-active
            color #42b983
</style>