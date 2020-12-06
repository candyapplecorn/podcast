<template>
  <div class="carousel-container">

    <span id="merch-link">
      <b>
        <a target="_blank"
           href="https://www.teepublic.com/user/hanging-from-the-rafters-podcast">Check out our merch!</a>
      </b>
    </span>

    <VueSlickCarousel v-bind="settings" class="carousel">
      <div v-for="product in images" :key="product">
        <a :href="product.storeLink">
          <img :src="product.src" :alt="product.copy" class="carousel-image">
        </a>
      </div>
    </VueSlickCarousel>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sticker from '@/assets/hanging_from_the_rafters_merch_sticker.png'
import hoodie from '@/assets/hanging_from_the_rafters_merch_hoodie.png'
import mask from '@/assets/hanging_from_the_rafters_merch_mask.png'
import mug from '@/assets/hanging_from_the_rafters_merch_mug.png'
import tShirt from '@/assets/hanging_from_the_rafters_merch_t-shirt.png'

const speed = 4000

const vueCarouselSettings = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: speed,
  autoplaySpeed: speed,
  cssEase: "linear"
}

const images = {
  sticker: {
    copy: "It's a sticker. With this you can advertise guerrilla warfare style",
    src: sticker,
    storeLink: "https://www.teepublic.com/sticker/16626201-logo"
  },
  hoodie: {
    copy: "It's a t-shirt. The more layers you don, the more you can take off",
    src: hoodie,
    storeLink: "https://www.teepublic.com/hoodie/16626201-logo"
  },
  mask: {
    copy: "It's a mask; great for hiding meth mouth",
    src: mask,
    storeLink: "https://www.teepublic.com/mask/16626201-logo"
  },
  mug: {
    copy: "It's a coffee mug. Or tea if you swing that way (we won't judge)",
    src: mug,
    storeLink: "https://www.teepublic.com/mug/16626201-logo"
  },
  tShirt: {
    copy: "It's a hoodie. For if ya get cold waiting in line to listen to HANGING FROM THE RAFTERS",
    src: tShirt,
    storeLink: "https://www.teepublic.com/t-shirt/16626201-logo?store_id=601594"
  },
}

export default {
  name: "MerchandiseCarousel",
  components: {VueSlickCarousel},
  data() {
    return {
      settings: vueCarouselSettings,
      images
    }
  }
}
</script>

<style scoped lang="stylus">
.carousel
  padding-top 30px

.carousel-image
  width 100px
  height 100px

.carousel-container
  padding-bottom 30px
  padding-top 30px

#merchandise
  width 70%
  padding-bottom 40px

#merch-link
  font-size 1.25em

</style>
