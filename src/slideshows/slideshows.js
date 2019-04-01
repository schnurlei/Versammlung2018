// This is the list of all slideshows that will be registered on the
// website, don't forget to register your new slideshows in the list:
export default {
  list: [
    require('./introducing-eagle/IntroducingEagle').default,
    require('./eagle-recipes/EagleRecipes').default,
    require('./VersammlungSlideshow').default,
    require('./first-slideshow/FirstSlideshow').default
  ]
}
