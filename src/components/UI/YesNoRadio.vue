<template>
    <div class="text-input">
        <label :for="toKebabCase()">{{label}}</label>

        <div class="yes-no-set">
            <div class="radio-container">
                <input
                        type="radio"
                        :name="toKebabCase()"
                        value="yes"
                        required
                >
                <span>Yes</span>
            </div>

            <div class="radio-container">
                <input
                        type="radio"
                        :name="toKebabCase()"
                        value="no"
                >
                <span>No</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YesNoRadio",
        props: {
            label: {
                type: String,
                default: ''
            },
            fields: {
                type: Number,
                default: 1
            }
        },
        methods: {
            toKebabCase(f = 1){
                return this.label.replace(/\W/g, '-').replace(/\W$/, '').toLowerCase() +
                    (f === 1 ? '' : `-${f}`);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .text-input
        display flex
        justify-content flex-start
        flex-direction column
        align-items flex-start
        width 100%
        overflow hidden

    input
        font-size 1em

    .padding-bottom
        margin-bottom 10px

    .radio-container
        display flex
        justify-content flex-start
        width 50%

    .radio-container:nth-child(1)
        padding-right 15px

    .yes-no-set
        display flex

    label
        text-align left
        text-transform capitalize

</style>