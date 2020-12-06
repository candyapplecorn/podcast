<template>
  <div class="hero">
    <a target="_blank" href="https://www.teepublic.com/user/hanging-from-the-rafters-podcast">
      <img class="hero" id=merchandise :src="merchSticker" alt="Buy our merch!">
    </a>
  </div>
</template>

<script>
import merchSticker from '@/assets/hanging_from_the_rafters_merch_sticker.png'


export default {
  name: "hero",
  data() {
    return {
      merchSticker,
    }
  }
}
</script>

<style lang="stylus" scoped>
div.hero
  width 100%
  overflow none
  overflow hidden
  padding 0 0 60px 0

img.hero
  padding 0 0 0 8px
  width 100%
</style>
