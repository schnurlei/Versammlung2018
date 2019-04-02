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

    slide.alpinum(enter='fadeIn' leave='fadeOut')
        h2 23.04.2018 Einweihung Alpinum

    slide.fronleichnam(enter='fadeIn' leave='fadeOut')
        h2 31.05.2018 Fronleichnam

    slide.rosengarten(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='zoomIn')
        h2 11.06.2018 Besichtigung Rosengarten

    slide.wuerzburg(enter='fadeIn' leave='fadeOut')
        h2 16.06.2018 Landesgartenschau Würzburg

    slide.gartentuer(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInLeft')
        h2 24.06.2018 Tag der offenen Gartentür

    slide.nuertingen(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInUp')
        h2 07.07.2018 Ausflug nach Hohenheim

    slide.mosten1(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInUp')
        h2 August/Oktober Mosten

    slide.mosten2(enter='fadeIn' leave='fadeOut')
        h2 August/Oktober Mosten

    slide.kartoffelfest1(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='flipInX')
        h2 03.10.2018 Kartoffelfest

    slide.kartoffelfest2(enter='fadeIn' leave='fadeOut')
        h2 03.10.2018 Kartoffelfest

    slide.kartoffelfest3(enter='fadeIn' leave='fadeOut')
        h2 03.10.2018 Kartoffelfest

    slide.kartoffelfest4(enter='fadeIn' leave='fadeOut')
        h2 03.10.2018 Kartoffelfest

    slide.weihnachtsmarkt(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='zoomIn')
        h2 01.12.2018 Weihnachtsmarkt

    slide.baumschnitt01(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='fadeInUp')
        h2 26.01.2019 Baumschnittkurs Streuobstwiese

    slide.baumschnitt03(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='flipInX')
        h2 09.03.2019 Baumschnittkurs

    slide.gartenpfleger1(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='flipInX')
        h2 16.03.2019 Gartenpflegerkurs

    slide.gartenpfleger2(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='flipInX')
        h2 16.03.2019 Gartenpflegerkurs

    slide.streuobst1(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='flipInX')
        h2 23.03.2019 Streuobstwiese Baumpflege

    slide.streuobst2(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='flipInX')
        h2 Baumpaten

    slide.streuobst3(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='flipInX')
        h2 Baumpaten

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

  .alpinum {

    @extend .normal_slide;
    /*background-image: url('/img/SiglindeImKuebel_03.JPG');*/
  }

  .fronleichnam {

    @extend .normal_slide;
    background-image: url('/img/fronleichnam.JPG');
  }

  .rosengarten {

    @extend .normal_slide;
    background-image: url('/img/rosengarten.jpg');
  }

  .wuerzburg {

    @extend .normal_slide;
    background-image: url('/img/Wuerzburg1.JPG');
  }

  .gartentuer {

    @extend .normal_slide;
    background-image: url('/img/tagderoffenenGartentuer.JPG');
  }

  .nuertingen {

    @extend .normal_slide;
    background-image: url('/img/Nuertingen.JPG');
  }

  .mosten1 {

    @extend .normal_slide;
    background-image: url('/img/mosten1.jpg');
  }

  .mosten2 {

    @extend .normal_slide;
    background-image: url('/img/mosten2.jpeg');
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

  .weihnachtsmarkt {

    @extend .normal_slide;
    background-image: url('/img/weihnachtsmarkt.JPG');
  }

  .baumschnitt01 {

    @extend .normal_slide;
    background-image: url('/img/baumschnitt01.JPG');
  }

  .baumschnitt03 {

    @extend .normal_slide;
    background-image: url('/img/baumschnitt03.JPG');
  }

  .gartenpfleger1 {

    @extend .normal_slide;
    background-image: url('/img/Gartenpflegerkurs_03_16_01.JPG');
  }

  .gartenpfleger2 {

    @extend .normal_slide;
    background-image: url('/img/Gartenpflegerkurs_03_16_02.JPG');
  }

  .streuobst1 {

    @extend .normal_slide;
    background-image: url('/img/baumpaten.jpg');
  }

  .streuobst2 {

    @extend .normal_slide;
    background-image: url('/img/TafelStreuobst.JPG');
  }

  .streuobst3 {

    @extend .normal_slide;
    background-image: url('/img/StreuobstIngstetten.JPG');
  }

  .dorf1 {

    @extend .normal_slide;
    background-image: url('/img/StreuobstIngstetten.JPG');
  }
}

</style>
