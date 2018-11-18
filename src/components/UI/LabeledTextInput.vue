<template>
    <div class="text-input">
        <label :for="toKebabCase()">{{label}}:</label>
        <slot>
            <input
                    :class="{ 'padding-bottom': fields > 1 && f !== fields }"
                    :name="toKebabCase(f)"
                    v-for="f in fields"
                    :key="f"
                    type="text"
            />
        </slot>
    </div>
</template>

<script>
    export default {
        name: "LabeledTextInput",
        props: {
            label: {
                type: String,
                default: ''
            },
            fields: {
                type: Number,
                default: 1
            },
            _replyto: {
                type: String,
                default: ''
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
        width 100%

    .padding-bottom
        margin-bottom 10px


</style>