<template>
  <div id="mouse">
    <div class="parent" v-for="i in 1" v-bind:key="i"  @mouseover="hover = i" @mouseout="hover = null">
      <div class="child-one" v-show="hover === null">

        <img  :src="require('@/assets/' + imageData + '')" class="preview">
      </div>
      <div class="child-two" v-show="hover === i">
        <span> {{infoData}}</span>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: ['imageData', 'infoData'],
  name: "HftrPictures",
  data(){
    return{
      hover: null,
    };
  }
}
</script>

<style lang="stylus" scoped>
img
  display: block;
  width: 100%;
  height: auto;



</style>