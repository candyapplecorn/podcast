<template>
    <div id="interviews">
        <div>
            Are you an artist or band who would like
            to be interviewed about your new
            music or upcoming tour?
        </div>
        <interview-form id="form" />
    </div>
</template>

<script>
    import InterviewForm from '@/components/InterviewForm';

    export default {
        name: "Interviews",
        components: {
            InterviewForm
        }
    }
</script>

<style lang="stylus" scoped>
    #interviews
        width 100%

    #form
        padding-top 30px
</style>