<template>
    <div id="nav">
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <h4>
            <!--Hanging from the Rafters-->
        </h4>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style lang="stylus" scoped>

#nav
    font-family 'Metal Mania', cursive;

    p, h1, h2, h3, h4, h5, h6
        background black
        width 100%
        margin 0
        user-select none

        @media(min-width 600px)
            font-size 2em


    a
        font-weight bold
        color #2c3e50

        &.router-link-exact-active
            color #42b983
</style>