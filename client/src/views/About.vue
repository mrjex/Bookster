<template>
  <div>
    <!-- <img src="../resources/AboutBooksterDescription.png" class="about-img-card"> PREVIOUS -->
    <img src="../resources/About-Pic-Top-Img2.png" class="hero-image">
    <h1 class="hero-title">Bookster</h1>
    <h1 class="hero-text">Where literacy becomes prosperity.</h1>

    <!-- <img src="../resources/DynamicTopScreensTemplate.png" class="top-screen-template"> -->
    <img src="../resources/DynamicBottomScreensTemplate2.png" class="bottomTemplate">
    <h4 id="transform-reading-game-h4" class="feature-text">Transform reading into a game.</h4>
    <div class="tempVideoShape"></div>

    <!-- <img src="../resources/Bookster-Waves-Background.svg" class="waves-top"> -->
    <img src="../resources/blob.svg" class="blob-svg">
    <img src="../resources/blob2.svg" class="blob-svg2">
    <img src="../resources/blob3.svg" class="blob-svg3">
    <img src="../resources/blob4.svg" class="blob-svg4">

    <!-- WHITE: card text-dark bg-light mb-3 -->
    <!-- BLACK: card text-white bg-dark mb-3 -->
  <div class="card text-white bg-dark mb-3 wioplayCard" style="max-width: 18rem;">
    <div class="card-header">
      <h4>Why Trust Bookster?</h4>
      </div>
    <div class="card-body">
      <!-- <h5 class="card-title">From the creators of WioPlay:</h5> -->
      <p class="card-text">From the creators of WioPlay: An entrusted prominent project that yields joy and happiness
        while cultivating self-love by focusing on enhancing our users' physical health
      </p>
    </div>
  </div>

    <h4 id="entrusted-project-h4">Our other entrusted project:</h4>

    <!--
    <div id="myCircle"></div>
    <div id="myCircle2"></div>
    -->
    <div id="page-background"></div>

    <!--
    <video autoplay muted loop class="changing-texts">
      <source src="../resources/ChangingTexts.mp4">
    </video>

    <div id="change-image-box">
      <video autoplay muted loop class="changing-images">
        <source src="../resources/Bookster-AboutPage-ChangingImages.mp4">
      </video>
    </div>
    -->

    <video autoplay muted loop class="wioplay-demo">
      <source src="../resources/Group 10 WioPlay Demo - Whitebars.mp4">
    </video>

    <button type="button" class="btn-2">JOIN BOOKSTER</button>

    <div id="carouselTest">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1vh 1vh 1vh #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="Performance Charts"
          text="Track your daily progress."
          img-src="https://i.ibb.co/6PStNss/Bookster-Performance-Charts2.png"
        ></b-carousel-slide>

        <b-carousel-slide
          caption="Allocation Charts"
          text="Track your distribution of completed books."
          img-src="https://i.ibb.co/fC9C9pd/Bookster-Allocation-Charts.png">
        </b-carousel-slide>

        <b-carousel-slide
          caption="Why even bother to join the game of literacy?"
          text="Reading for pleasure is the single biggest indicator of a child's future success."
          img-src="https://i.ibb.co/7JYM3QM/Carousel-Stats-Pic-Test4.png"
        ></b-carousel-slide>

        <b-carousel-slide
          caption="Why even bother to join the game of literacy?"
          text="85% of self-made millionaires read two or more books per month."
          img-src="https://i.ibb.co/MNnvFg8/Carousel-Stats-Pic-Test8.png"
        ></b-carousel-slide>

        <b-carousel-slide
          caption="Why even bother to join the game of literacy?"
          text="Increase your imagination and creativity."
          img-src="https://i.ibb.co/ccY0z5h/Coursel-Test-Img3-2.png"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
// import UtilsComponent from '../components/UtilsComponent.vue'
export default {
  name: 'About',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  created() {
    console.warn(localStorage.getItem('refresh-state'))
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
h4 {
  color: rgb(54, 206, 49);
  font-size: 1.2em;
}

.card-text {
  color: #7dcfcb9d;
}

.blob-svg {
  position: absolute;
  top: 50vh;
  left: 12vw;
  z-index: 10;
  width: 40%;
  height: auto;
  z-index: 5;
}

.blob-svg2 {
  position: absolute;
  top: 50vh;
  left: 48vw;
  z-index: 5;
  width: 40%;
  height: auto;
  z-index: 4;
}

.blob-svg3 {
  position: absolute;
  top: 74vh;
  left: 44vw;
  z-index: 5;
  width: 40%;
  height: auto;
  z-index: 5;
}

.blob-svg4 {
  position: absolute;
  top: 30vh;
  left: 19vw;
  z-index: 5;
  width: 70%;
  height: auto;
  z-index: 2;
  -webkit-mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 1) 50%,
    rgb(0 0 0 / 0.3) 75%,
    rgb(0 0 0 / 0.1) 80%,
    rgb(0 0 0 / 0) 83%
  );
  mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 1) 50%,
    rgb(0 0 0 / 0.3) 75%,
    rgb(0 0 0 / 0.1) 80%,
    rgb(0 0 0 / 0) 83%
  );
}

.waves-top {
  position: absolute;
  top: 0vh;
  left: 0vw;
  width: 100%;
  height: auto;
  z-index: 10;
}

.wioplayCard {
  position: absolute;
  top: 310vh;
  left: 15vw;
}

.top-screen-template {
  position: relative;
  top: 52.5vh;
  z-index: 1;
}

.bottomTemplate {
  position: absolute;
  top: 180vh;
}

#transform-reading-game-h4 {
  position: absolute;
  top: 196.5vh;
  left: 37vw;
  font-weight: 900;
}

#page-background {
  top: 0vh;
  left: 0vw;
  width: 100vw;
  height: 400vh;
  background-color: #343434;
  position: absolute;
  z-index: -3;
}

#carouselTest {
  position: relative;
  /*
  Position with 'DynamicBottomScreensTemplate' activated
  top: 70vh;
  left: 12.5vw;
  */
  top: 210vh;
  left: 12.5vw;
  width: 155vh;
  height: auto;
}

#entrusted-project-h4 {
  position: absolute;
  top: 305vh;
  left: 56vw;
}

#myCircle {
    background-color: #7fff83;
    border:3vh solid #6ae5df;
    height:15vh;
    width:15vh;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    position: absolute;
    top: 55vh;
    left: 8vw;
    z-index: 2;
}

#myCircle2 {
    background-color:#fff47f;
    border:2vh solid #ff857f;
    height:7vh;
    width:7vh;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    position: absolute;
    top: 114vh;
    left: 9.3vw;
    z-index: 3;
}

#bookster-video-text {
  position: absolute;
  top: 15vh;
  left: 17.5vw;
}

.tempVideoShape {
  height: 57vh;
  width: 49vw;
  position: absolute;
  top: 80.5vh;
  left: 24vw;
  background-color: #1c1d1d;
  z-index: 10;
  border-radius: 3vh;
}

.left-decrease-borders {
  position: absolute;
  left: 0vh;
  top: 10vh;
}

.right-decrease-borders {
  position: absolute;
  right: 0vh;
  top: 10vh;
}

.wioplay-demo {
  top: 310vh;
  left: 47vw;
  width: 40%;
  height: auto;
  position: absolute;
  z-index: 0;
  border-radius: 1.2vh;
}

.changing-texts {
  top: 57.7vh;
  left: 73vw;
  position: absolute;
  z-index: 0;
}

.changing-images {
    top: 76.2vh;
    left: 68.9vw;
    position: absolute;
    z-index: 0;
}

.btn-2 {
  width: 99vw;
  height: 21.5vh;
  border: none;
  color:#1c1d1d;
  border-radius: 1vw;
  transition: ease-out 0.5s;
  font-size: 1.3em;
  font-weight: 900;
  outline: none;
  background-color: #333e43;
  border: 0.5vw solid #2b405f;
  position: absolute;
  z-index: 20;

  top: 156vh;
  left: 0vw;
}

.btn-2:hover {
  color:#CCCF7C;
  cursor: pointer;
}

.btn-2:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: "";
  background-color: #2b405f;
}

.btn-2:hover:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.hero-title {
  color: #7dcfcb;
  font-size: clamp(2.5rem, 4.5vw + 0.8rem, 2.5em);
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  position: absolute;
  top: 20vh;
  left: 43.5vw;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
}

.hero-text {
  color: #7dcfcbbc;
  font-size: clamp(1rem, 2vw + 0.25rem, 1em);
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  position: absolute;
  top: 30vh;
  left: 40.65vw;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
}

.hero-image {
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(black, transparent);
  position: absolute;
  top: 0vh;
  left: 0vw;
}

.about-img-card {
  position: absolute;
  top: 0vh;
  left: 0vw;
  z-index: 5;
  width: 100%;
  height: auto;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

@media (max-width: 576px) {
  .changing-images {
    width: 10%;
    height: auto;
  }

   h4 {
    font-size: 0.8em;
    color: rgb(85, 115, 204);
  }
}

@media (min-width: 576px) {
  .changing-images {
    width: 15%;
    height: auto;
  }

   h4 {
    font-size: 0.9em;
    color: rgb(238, 203, 115);
  }
}

@media (min-width: 768px) {
  .changing-images {
    width: 20%;
    height: auto;
  }

   h4 {
    font-size: 1.0em;
    color: rgb(255, 10, 75);
  }
}

@media (min-width: 992px) {
  .changing-images {
    width: 25%;
    height: auto;
  }

   h4 {
    font-size: 1.1em;
    color: rgb(247, 255, 10);
  }
}

@media (min-width: 1200px) {
  .changing-images {
    width: 30%;
    height: auto;
  }

   h4 {
    font-size: 1.2em;
    color: blue;
  }
}

@media (min-width: 1400px) {
  .changing-images {
    width: 25%;
    height: auto;
  }

   h4 {
    font-size: 1.2em;
    color: #7dcfcb;
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
  }

  .changing-texts {
  width: 40%;
  height: auto;
}
}
</style>
