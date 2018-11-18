<template>
    <form action="https://formspree.io/your@email.com" method="POST">

        <h4 class="label">General Info</h4>
        <labeled-text-input label="Band/Artist Name"/>
        <labeled-text-input label="Genre" />
        <labeled-text-input label="Country" />
        <labeled-text-input label="Members" :fields="6" />
        <labeled-text-input label="Who will be interviewing?" :fields="6" />


        <h4 class="label">Music Page Links <br>(If Applicable)</h4>
        <labeled-text-input label="Spotify" />
        <labeled-text-input label="Apple Music" />
        <labeled-text-input label="Bandcamp" />
        <labeled-text-input label="Soundcloud" />
        <labeled-text-input label="Other" />

        <h4 class="label">Social Media Links <br>(If Applicable)</h4>
        <labeled-text-input label="Instagram" />
        <labeled-text-input label="Facebook" />
        <labeled-text-input label="Twitter" />
        <labeled-text-input label="Other" />

        <h4 class="label">Availability</h4>
        <labeled-text-input label="Fridays" />
        <labeled-text-input label="Saturdays" />



        <!--<input type="email" name="_replyto">-->
        <!--<input type="submit" value="Send">-->
    </form>
</template>

<script>
    import LabeledTextInput from '@/components/UI/LabeledTextInput';
    export default {
        name: "InterviewForm",
        components: {
            LabeledTextInput
        },
        props: {
            label: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import url('https://fonts.googleapis.com/css?family=Metal+Mania')

    form
        display flex
        padding 5px
        flex-direction column
        align-items flex-start
        justify-content flex-start
        background red

    .label
        font-family 'Metal Mania', cursive;
        font-size 1.5em

</style>