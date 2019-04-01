<template lang='pug'>
#ThemesSlideshow
  .eg-slideshow

    slide.slide_start(enter='fadeIn' leave='fadeOut')
      h1 Mitglieder versammlung<br />2019
      img.imageScr1(src='/img/'+'logo_ogv_text2_2018_12.svg')

    slide.sieglinde_1(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInDown')
        h2 20.04.2018 Sieglinde im Kübel

    slide.sieglinde_2(enter='fadeIn' leave='fadeOut')
        h2 20.04.2018 Sieglinde im Kübel

    slide.sieglinde_3(enter='fadeIn' leave='fadeOut')
        h2 20.04.2018 Sieglinde im Kübel

    slide.gartentuer(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInLeft')
        h2 24.06.2018 Tag der offenen Gartentür

    slide.nuertingen(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInUp')
        h2 07.07.2018 Ausflug nach Hohenheim

    slide.kartoffelfest1(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='flipInX')
        h2 03.10.2018 Kartoffelfest

    slide.kartoffelfest2(enter='fadeIn' leave='fadeOut')
        h2 03.10.2018 Kartoffelfest

    slide.kartoffelfest3(enter='fadeIn' leave='fadeOut')
        h2 03.10.2018 Kartoffelfest

    slide.kartoffelfest4(enter='fadeIn' leave='fadeOut')
        h2 03.10.2018 Kartoffelfest

    slide.local-eg-theme-space(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='zoomIn')
        h3 Your bad taste is the limit
</template>
<script>
import eagle from 'eagle.js'
export default {
  name: 'FirstSlideshow',
  mixins: [eagle.slideshow],
  infos: {
    title: 'Themes Slideshows',
    description: 'You can change everything !',
    path: 'themes-slidehow'
  }
}
</script>

<style lang='scss'>
#ThemesSlideshow {
  // STYLES THAT ARE GLOBAL FOR THIS PARTICULAR SLIDESHOW
  h3 {
    font-weight: normal;
    text-transform: uppercase;
  }
  .eg-slide-content {
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }

  h1 {
    //background-color: rgba(100, 100, 100, 0.3);#
    text-shadow: 3px 3px 3px #777;
    color: black;
  }

  // LOCAL THEMES FOR SLIDES
  .slide_start {
    h3 {
      font-family: 'Forum';
      font-size: 1.5em;
      color: rgba(255, 255, 255, 0.75);
      letter-spacing: 1.5px;
      margin-top: 50%;
      background-color: grey;
      opacity: 0.5;
    }
    background-image: url('/img/start.JPG');
    background-position: center;
    background-size: cover;
  }

  .normal_slide {
    h2 {
      font-size: 2.5em;
      margin-bottom: 20px;
      text-shadow: 3px 3px 3px #777;
      color: black;
      bottom:10%;
      position: absolute;
    }
    background-image: url('/img/SiglindeImKuebel_01.JPG');
    background-position: center;
    background-size: cover;
  }

  .sieglinde_1 {
    @extend .normal_slide;
    background-image: url('/img/SiglindeImKuebel_01.JPG');
  }

  .sieglinde_2 {

    @extend .normal_slide;
    background-image: url('/img/SiglindeImKuebel_02.JPG');
  }

  .sieglinde_3 {

    @extend .normal_slide;
    background-image: url('/img/SiglindeImKuebel_03.JPG');
  }

  .gartentuer {

    @extend .normal_slide;
    background-image: url('/img/tagderoffenenGartentuer.JPG');
  }

  .nuertingen {

    @extend .normal_slide;
    background-image: url('/img/Nuertingen.JPG');
  }

  .kartoffelfest1 {

    @extend .normal_slide;
    background-image: url('/img/Kartoffel1.JPG');
  }

  .kartoffelfest2 {

    @extend .normal_slide;
    background-image: url('/img/Kartoffel2.JPG');
  }

  .kartoffelfest3 {

    @extend .normal_slide;
    background-image: url('/img/Kartoffel3.JPG');
  }

  .kartoffelfest4 {

    @extend .normal_slide;
    background-image: url('/img/Kartoffel4.JPG');
  }

  .local-eg-theme-artic {
    background-color: #11a9e2;
    background-image: none;
    color: #fff;
    h1 {
      font-weight: bold;
      font-size: 3em;
    }
    h1, p {
      font-family: "Comfortaa", Helvetica, Arial, sans-serif;
      margin-top: 0;
      position: absolute;
      top:50%;
      left:50%;
      transform: translateX(-50%) translateY(-50%);
      width: 80%;

      text-shadow: 0 0.01em 0 #ccc,
                   0 0.02em 0 #c9c9c9,
                   0 0.03em 0 #bbb,
                   0 0.04em 0 #b9b9b9,
                   0 0.05em 0 #aaa,
                   0 0.06em 0.01em rgba(0,0,0,.1),
                   0 0 0.05em rgba(0,0,0,.1),
                   0 0.01em 0.03em rgba(0,0,0,.3),
                   0 0.03em 0.05em rgba(0,0,0,.2),
                   0 0.05em 0.1em rgba(0,0,0,.25),
                   0 0.1em 0.1em rgba(0,0,0,.2),
                   0 0.2em 0.2em rgba(0,0,0,.15);
    }
  }
  .local-eg-theme-foreword {
    @import url(https://fonts.googleapis.com/css?family=EB+Garamond);
    font-family: 'EB Garamond';
    color: #ccc;
    .eg-slide-content {
      max-width: 90%;
      width: 15em;
    }
    p {
      margin-top: 30%;
    }
  }

  .local-eg-theme-bretagne {
    @import url(https://fonts.googleapis.com/css?family=Pompiere);
    h3 {
      // letter-spacing: 1px;
      font-family: 'Pompiere';
      text-transform: none;
      font-size: 3em;
      color: rgba(255, 255, 255, .6);
    }
    background-image: url('/public/img/start.JPG');
    background-position: center;
    background-size: cover;
  }
  .local-eg-theme-forest-road {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: 'Cabin Sketch';
      margin-top: 50%;
      text-align: left;
      color: rgba(255, 255, 255, .9);
    }
    background-image: url(https://i.imgur.com/hxTMFZW.jpg);
    background-position: center;
    background-size: cover;

  }

  .local-eg-theme-spark {
    @import url(https://fonts.googleapis.com/css?family=Special+Elite);
    h3 {
      position: absolute;
      font-family: 'Special Elite';
      color: rgba(255, 255, 255, .8);
      font-size: 1em;
      bottom: 10%;
      float: left;
    }
    background-image: url(https://i.imgur.com/FL9mwpd.jpg);
    background-position: center;
    background-size: cover;
  }
  .local-eg-theme-city {
    @import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);
    @import 'assets/monokai';
    .eg-code-block {
      margin-top: 30%;
    }
    .code-box {
      box-shadow: 0 0 0.25em 0.25em #ddd
    }
    background-image: url(https://i.imgur.com/kmmHith.jpg);
    background-position: center;
    background-size: cover;
  }
  .local-eg-theme-space {
    @import url(https://fonts.googleapis.com/css?family=Forum);
    h3 {
      font-family: 'Forum';
      font-size: 1.5em;
      color: rgba(255, 255, 255, 0.75);
      letter-spacing: 1.5px;
      margin-top: 50%
    }
    background-image: url(https://i.imgur.com/yO2ivoD.jpg);
    background-position: center;
    background-size: cover;
  }
}

</style>
