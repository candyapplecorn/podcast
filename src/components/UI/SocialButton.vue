<template>
    <a :href="href" target="_blank">
        {{ title }}
    </a>
</template>

<script>
    export default {
        name: "SocialButton",
        props: {
            href: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    a
        padding 0px 5px
</style>