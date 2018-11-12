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
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color white
        font-size 1.5em


    #nav
        padding 30px
        a
            font-weight bold
            color #2c3e50
            &.router-link-exact-active
                color #42b983
</style>
