import Vue from 'vue'
import App from './App.vue'
import Eagle from 'eagle.js'
// import eagle.js default styles
import 'eagle.js/dist/eagle.css'
// import animate.css for slide transition
import 'animate.css'
import VersammlungSlideshow from './slideshows/VersammlungSlideshow.vue'

Vue.component('versammlung-slideshow', VersammlungSlideshow)
Vue.use(Eagle)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
