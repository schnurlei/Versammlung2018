<template lang='pug'>
#ThemesSlideshow
  .eg-slideshow

    slide.slide_start(enter='fadeIn' leave='fadeOut')
      h1 Mitglieder versammlung<br />2019
      img.imageScr1(src='/img/'+'logo_ogv_text2_2018_12.svg')

    slide(enter='fadeIn' leave='fadeOut')
        h2 Tagesordnung
        p  1. Eröffnung und Begrüßung
        p  2. Bericht des 1. Vorsitzenden
        p  3. Bericht der Schriftführerin
        p  4. Bericht der Kassiererin
        p  5. Entlastung der Kassiererin und der Vorstandschaft
        p  6. Grußworte der anwesenden Gäste
        p  7. Ehrungen
        p Blumenverlosung im Anschluss

    slide.sieglinde_1(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInDown')
        h2 20.04.2018 Sieglinde im Kübel

    slide.sieglinde_2(enter='fadeIn' leave='fadeOut')
        h2 20.04.2018 Sieglinde im Kübel

    slide.sieglinde_3(enter='fadeIn' leave='fadeOut')
        h2 20.04.2018 Sieglinde im Kübel

    slide(enter='fadeIn' leave='fadeOut')
        h2 23.04.2018 Einweihung Alpinum Kreismustergarten

    slide.kreismustergarten(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInLeft')
        h2 26.05.2018 Aufsicht Kreismustergarten

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

    slide.leader(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInUp')
        h2 20.9.18 Leader Streuobsterfassung

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
      eg-transition(enter='fadeInDown')
        h2 23.03.2019 Streuobstwiese Baumpflege

    slide.streuobst2(enter='fadeIn'  leave='fadeOut')
      eg-transition(enter='flipInX')
        h2 Baumpaten

    slide.streuobst3(enter='fadeIn'  leave='fadeOut')
        h2 Baumpaten

    slide.dorf1(enter='fadeIn'  leave='fadeOut')
        h2 Dorfverschönerung

    slide.dorf2(enter='fadeIn'  leave='fadeOut')
        h2 Dorfverschönerung

    slide.umwelt1(enter='fadeIn'  leave='fadeOut')
        h2 Artenvielfalt

    slide.homepage(enter='fadeIn'  leave='fadeOut')
        h2

    slide(enter='fadeIn'  leave='fadeOut')
        h2 Wettbewerb Gartenbauvereine
        p Blumenschmuckwettbewerb
        p Der naturgemäße Garten
        p Mein Hausbaum

    slide.baum

    slide.kraeuter(enter='fadeIn'  leave='fadeOut')
        h2

    slide.villandry2

    slide.villandry1

    slide.villandry3

    slide.frank

    slide.beth3

    slide.beth4

    slide.beth5

    slide.beth6

    slide.beth7

    slide.beth8

    slide.sussex1

    slide.sussex2

    slide.wisley1

    slide.wisley3

    slide.wisley4

    slide.wisley5

    slide.wisley6

    slide.hermann1

    slide.hermann2

    slide.hermann3

    slide.hermann4

    slide.hermann5

    slide.weihen1

    slide.weihen2

    slide.hyde1

    slide.hyde2

    slide.hyde3

    slide.hyde4

    slide.hyde5

    slide.dungeness

    slide.schiessen

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
  .eg-slideshow {
    background-color: white;
  }

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
    background-size: contain;
    background-repeat: no-repeat;
  }

  .foto_slide {
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
    background-repeat: no-repeat;
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

  .kreismustergarten {

    @extend .normal_slide;
    background-image: url('/img/Kreismustergarten2.JPG');
  }

  .leader {

    @extend .normal_slide;
    background-image: url('/img/Sortenkartierung.jpg');
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
    background-image: url('/img/RabatteKirche.JPG');
  }

  .dorf2 {

    @extend .normal_slide;
    background-image: url('/img/RabatteDorfkreuz.JPG');
  }

  .umwelt1 {

    @extend .normal_slide;
    background-image: url('/img/Josefskapelle.JPG');
  }

  .kraeuter {

    @extend .normal_slide;
    background-image: url('/img/kräuterspaziergang.svg');
  }

  .homepage {

    @extend .normal_slide;
    background-image: url('/img/homepage-ogv.jpg');
  }

  .villandry1 {

    @extend .foto_slide;
    background-image: url('/img/00_villandryDSC06642.jpg');
  }

  .villandry2 {

    @extend .foto_slide;
    background-image: url('/img/00_villandryDSC06908.jpg');
  }

  .villandry3 {

    @extend .foto_slide;
    background-image: url('/img/01_villandryDSC06727.jpg');
  }

  .beth1 {

    @extend .foto_slide;
    background-image: url('/img/1beth_chatto_DSC08864.JPG');
  }

  .beth2 {

    @extend .foto_slide;
    background-image: url('/img/1beth_chatto_DSC08883.JPG');
  }

  .beth3 {

    @extend .foto_slide;
    background-image: url('/img/1beth_chatto_DSC09019.jpg');
  }

  .beth4 {

    @extend .foto_slide;
    background-image: url('/img/1beth_chatto_DSC09032.jpg');
  }

  .beth5 {

    @extend .foto_slide;
    background-image: url('/img/1beth_chatto_DSC09037.jpg');
  }

  .beth6 {

    @extend .foto_slide;
    background-image: url('/img/1beth_chatto_DSC09047.jpg');
  }

  .beth7 {

    @extend .foto_slide;
    background-image: url('/img/1beth_chatto_DSC09061.jpg');
  }

  .beth8 {

    @extend .foto_slide;
    background-image: url('/img/1beth_chatto_DSC09069.jpg');
  }

  .dennmann {

    @extend .foto_slide;
    background-image: url('/img/1dennmann.JPG');
  }

  .sussex1 {

    @extend .foto_slide;
    background-image: url('/img/1sussex_prairie_DSC08403.JPG');
  }

  .sussex2 {

    @extend .foto_slide;
    background-image: url('/img/1sussex_prairie_DSC08458.JPG');
  }

  .dungeness {

    @extend .foto_slide;
    background-image: url('/img/2dungeness.JPG');
  }

  .wisley1 {

    @extend .foto_slide;
    background-image: url('/img/30_wisley.jpg');
  }

  .wisley2 {

    @extend .foto_slide;
    background-image: url('/img/30_wisleyDSC02507.jpg');
  }

  .wisley3 {

    @extend .foto_slide;
    background-image: url('/img/30_wisley_2.jpg');
  }

  .wisley4 {

    @extend .foto_slide;
    background-image: url('/img/31_wisleyDSC02155.jpg');
  }

  .wisley5 {

    @extend .foto_slide;
    background-image: url('/img/31_wisleyDSC02423.jpg');
  }

  .wisley6 {

    @extend .foto_slide;
    background-image: url('/img/31_wisleyDSC02479.jpg');
  }

  .hermann1 {

    @extend .foto_slide;
    background-image: url('/img/40_DSC07519.jpg');
  }

  .hermann2 {

    @extend .foto_slide;
    background-image: url('/img/40_herrmannshofDSC07466.jpg');
  }

  .hermann3 {

    @extend .foto_slide;
    background-image: url('/img/41_DSC07501.jpg');
  }

  .hermann4 {

    @extend .foto_slide;
    background-image: url('/img/41_DSC07517.jpg');
  }

  .hermann5 {

    @extend .foto_slide;
    background-image: url('/img/41_DSC07575.jpg');
  }

  .weihen1 {

    @extend .foto_slide;
    background-image: url('/img/50_weihenstephanDSC00474.jpg');
  }

  .weihen2 {

    @extend .foto_slide;
    background-image: url('/img/50_weihenstephanDSC00493.jpg');
  }

  .frank {

    @extend .foto_slide;
    background-image: url('/img/53_frankreich.jpg');
  }

  .hyde1 {

    @extend .foto_slide;
    background-image: url('/img/60_hydeHallDSC08856.jpg');
  }

  .hyde2 {

    @extend .foto_slide;
    background-image: url('/img/60_hydeHallDSC08859.jpg');
  }

  .hyde3 {

    @extend .foto_slide;
    background-image: url('/img/60_hydeHallDSC08918.jpg');
  }

  .hyde4 {

    @extend .foto_slide;
    background-image: url('/img/60_hydeHallDSC08927.jpg');
  }

  .hyde5 {

    @extend .foto_slide;
    background-image: url('/img/60_hydeHallDSC08929.jpg');
  }

  .dungeness {

    @extend .foto_slide;
    background-image: url('/img/2dungeness.JPG');
  }

  .baum {

    @extend .normal_slide;
    background-image: url('/img/90_baum.jpg');
  }

  .schiessen {

    @extend .foto_slide;
    background-image: url('/img/90_schiessen.jpg');
  }

}

</style>
