<template>
    <div id="app">
        <Nav></Nav>
        <router-view/>
    </div>
</template>
<script>
    import Nav from '@/components/Nav';

    export default {
        components: {
            Nav
        }
    }
</script>
<style lang="stylus">
    @import url('https://fonts.googleapis.com/css?family=Metal+Mania')

    body
        background black
        display flex
        justify-content center
        flex-direction column
        align-items center


    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color white
        font-size 1.5em
        max-width 600px
        width 100%

    br
        display block
        @media (min-width 600px)
            display none


    #nav
        padding 30px 0px
        a
            font-weight bold
            color #2c3e50
            &.router-link-exact-active
                color #42b983
</style>
