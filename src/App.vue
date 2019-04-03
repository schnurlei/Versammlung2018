<template>
  <div id="app">
    <versammlung-slideshow></versammlung-slideshow>
  </div>
</template>

<script>
import VersammlungSlideshow from './slideshows/VersammlungSlideshow.vue'

export default {
  name: 'app',
  components: {
    VersammlungSlideshow
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    background-color: white;
    margin-top: 0px;
  }
  body {
    display: block;
    margin: 0px;
  }

</style>
