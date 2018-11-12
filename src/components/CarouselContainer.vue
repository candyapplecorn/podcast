<template>
    <!--<carousel>-->
        <!--<slide-->
            <!--v-for="imgPath in images2"-->
            <!--:key="imgPath"-->
        <!--&gt;-->
            <!--<div class="container">-->
                <!--<img :src="imgPath" alt="">-->
            <!--</div>-->
        <!--</slide>-->
        <!--&lt;!&ndash;<slide>&ndash;&gt;-->
            <!--&lt;!&ndash;<img :src="bryce1" alt="">&ndash;&gt;-->
        <!--&lt;!&ndash;</slide>&ndash;&gt;-->
        <!--&lt;!&ndash;<slide>&ndash;&gt;-->
            <!--&lt;!&ndash;<img :src="sideview" alt="">&ndash;&gt;-->
        <!--&lt;!&ndash;</slide>&ndash;&gt;-->
        <!--&lt;!&ndash;<slide>&ndash;&gt;-->
            <!--&lt;!&ndash;<img :src="bryce1" alt="">&ndash;&gt;-->
        <!--&lt;!&ndash;</slide>&ndash;&gt;-->
        <!--&lt;!&ndash;<slide>&ndash;&gt;-->
            <!--&lt;!&ndash;<img src="../assets/hanginfromtherafterspodcast.jpg" alt="">&ndash;&gt;-->
        <!--&lt;!&ndash;</slide>&ndash;&gt;-->
        <!--&lt;!&ndash;<slide>&ndash;&gt;-->
            <!--&lt;!&ndash;<img src="../assets/hanginfromtherafterspodcast.jpg" alt="">&ndash;&gt;-->
        <!--&lt;!&ndash;</slide>&ndash;&gt;-->
    <!--</carousel>-->
    <div>
        <!--<div class="container">-->
            <!--<img :src="images2[0]" alt="">-->
        <!--</div>-->
        <!--<div class="container">-->
            <!--<img :src="images2[1]" alt="">-->
        <!--</div>-->
        <!--<img :src="images2[1]" alt="">-->
        <!--<img :src="images2[0]" alt="">-->
        <img
                v-for="image in images2"
                :src="image"
                :key="image"
                alt=""
        ></img>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    import sideview from '@/assets/sideview.jpg'
    import bryce1 from '@/assets/bryce1.jpg'
    import yeolddrunk from '@/assets/yeolddrunk.jpg'
    import yeoldcigarette from '@/assets/yeoldcigarette.jpg'
    import aust1 from '@/assets/aust1.jpg'

    export default {
        name: "CarouselContainer",
        components: {
            Carousel,
            Slide
        },
        data(){
            const images2 = [
                bryce1,
                sideview,
                yeolddrunk,
                // yeoldcigarette,
                aust1
            ];
            const images = [
                'aust1.jpg',
                'bryce1.jpg',
                'sideview.jpg',
                'yeoldcigarette.jpg',
                'yeolddrunk.jpg'
            ].map(this.fromAssets);
            return {
                images,
                images2,
                sideview,
                bryce1
            }
        },
        methods: {
            fromAssets(path){
                return `../assets/${path}`;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    /*#imgwrap*/
        /*overflow none*/

        /*.container*/
            /*width 100%*/
            /*max-height 150px*/
            /*overflow: hidden*/
            /*display flex*/
            /*justify-content center*/

            img
                width 100%
                position center
</style>