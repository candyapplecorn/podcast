<template>
    <form action="https://formspree.io/hangingfromtherafterspodcast@gmail.com" method="POST">

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

        <h4 class="label">Technical</h4>

        <h5>Do you have access to a:</h5>
        <yes-no-radio label="computer with Skype?"/>
        <yes-no-radio label="webcam?"/>
        <yes-no-radio label="microphone?"/>

        <h4 class="label">Availability</h4>
        <labeled-text-input label="Fridays" />
        <labeled-text-input label="Saturdays" />

        <labeled-text-input label="Email">
            <input type="email" name="_replyto" />
        </labeled-text-input>

        <input type="submit" value="Send" />

        <input type="hidden" name="_next" :value="getHomeUrl()" />
    </form>
</template>

<script>
    import LabeledTextInput from '@/components/UI/LabeledTextInput';
    import YesNoRadio from '@/components/UI/YesNoRadio';

    export default {
        name: "InterviewForm",
        components: {
            LabeledTextInput,
            YesNoRadio
        },
        props: {
            label: {
                type: String,
                default: ''
            }
        },
        methods: {
            getHomeUrl() {
                return `${window.location.origin}/#/interviews-submitted`;
            }
        },
        mounted() {
            console.log(this.$route)
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

    .label
        font-family 'Metal Mania', cursive;
        font-size 1.5em

    h5
        margin-top 0

    input[type=submit]
        height 100px
        font-family 'Metal Mania', cursive;
        font-size 2em
        background black
        border 5px solid white
        color white
        margin 20px 0 20px 10px;
        align-content vertical
        display flex
        align-items center
        font-height 3px
        padding 0 40px

</style>