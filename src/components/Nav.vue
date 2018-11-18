<template>
    <div id="nav">
        <div
                v-show="$route.name === 'interviews'"
                id="back-link"
        >
            <router-link
                    to="/"
            >
                back
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style lang="stylus" scoped>
#back-link
    width 100%
    display flex
    justify-content flex-start

    a
        font-size 2em


#nav
    font-family 'Metal Mania', cursive;

    a
        font-weight bold
        color #2c3e50

        &.router-link-exact-active
            color #42b983
</style>