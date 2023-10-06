<template>
  <div>
    <img src="../resources/AboutBooksterDescription.png" class="about-img-card">
    <img src="../resources/DynamicTopScreensTemplate.png" class="testFrontEnd2">
    <img src="../resources/DynamicBottomScreensTemplate.png" class="testFrontEnd">
    <h4 id="transform-reading-game-h4" class="feature-text">Transform reading into a game.</h4>
    <h4 id="bookster-video-text">Bookster video: {Slogan here}</h4>
    <div class="tempVideoShape"></div>

    <!-- WHITE: card text-dark bg-light mb-3 -->
    <!-- BLACK: card text-white bg-dark mb-3 -->
  <div class="card text-white bg-dark mb-3 wioplayCard" style="max-width: 18rem;">
    <div class="card-header">Why Trust Bookster?</div>
    <div class="card-body">
      <h5 class="card-title">From the creators of WioPlay:</h5>
      <p class="card-text">An entrusted prominent project that yields joy and happiness
        while cultivating self-love by focusing on enhancing our users' physical health
      </p>
    </div>
  </div>

    <!-- Design Borders -->
    <!--
    <div class="left-decrease-borders">
      <div class="myBorderL1"></div>
      <div class="myBorderL2"></div>
      <div class="myBorderL3"></div>
      <div class="myBorderL4"></div>
      <div class="myBorderL5"></div>

      <div class="myBorderL1-2"></div>
      <div class="myBorderL2-2"></div>
      <div class="myBorderL3-2"></div>
      <div class="myBorderL4-2"></div>
      <div class="myBorderL5-2"></div>
    </div>

    <div class="right-decrease-borders">
      <div class="myBorderR1"></div>
      <div class="myBorderR2"></div>
      <div class="myBorderR3"></div>
      <div class="myBorderR4"></div>
      <div class="myBorderR5"></div>

      <div class="myBorderR1-2"></div>
      <div class="myBorderR2-2"></div>
      <div class="myBorderR3-2"></div>
      <div class="myBorderR4-2"></div>
      <div class="myBorderR5-2"></div>
    </div>
    -->

    <!-- Design Shapes -->
    <h4 id="entrusted-project-h4">Our other entrusted projects:</h4>

    <div id="myCircle"></div>
    <div id="myCircle2"></div>
    <!-- <div id="myHalfCircle"></div> -->

    <video autoplay muted loop class="changing-texts">
      <source src="../resources/ChangingTexts.mp4">
    </video>

    <div id="change-image-box">
      <video autoplay muted loop class="changing-images">
        <source src="../resources/Bookster-AboutPage-ChangingImages.mp4">
      </video>
    </div>

    <video autoplay muted loop class="wioplay-demo">
      <source src="../resources/Group 10 WioPlay Demo - Whitebars.mp4">
    </video>

    <!-- <button type="button" id="join-bookster-button" class="btn-1">Join Bookster</button> -->
    <button type="button" id="join-bookster-button" class="btn-2">Join Bookster</button>
    <!-- <div id="myTestFade" class="btn-2-child"></div> -->

    <!-- img-src="https://picsum.photos/1024/480/?image=52" -->
    <!-- <img src="../resources/chartCarousel/0. Linechart.jpg"> -->
    <!-- Carousel -->
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
        style="text-shadow: 1px 1px 2px #333;"
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
          img-src="https://i.ibb.co/DgY06V3/Carousel-Stats-Pic-Test5.png"
        ></b-carousel-slide>

        <b-carousel-slide
          caption="Why even bother to join the game of literacy?"
          text="Increase your imagination and creativity."
          img-src="https://i.ibb.co/k8ZGxS9/Coursel-Test-Img3.png"
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

h1 {
  color:#ffffff;
  text-shadow: 2px 2px #000000;
  font-size: 4vh;
}

.wioplayCard {
  position: absolute;
  top: 279vh;
  left: 15vw;
}

.testFrontEnd2 {
  position: absolute;
  top: 52.5vh;
  z-index: 1;
}

.testFrontEnd {
  position: absolute;
  top: 160vh;
}

#transform-reading-game-h4 {
  position: absolute;
  top: 176.5vh;
  left: 39vw;
  font-weight: 900;
}

#carouselTest {
  position: relative;
  top: 186vh;
  left: 12.5vw;
  width: 155vh;
  height: auto;
}

#book-api-h4 {
  position: absolute;
  top: 840px;
  left: 500px;
}

#entrusted-project-h4 {
  position: absolute;
  top: 190vh;
  left: 40vw;
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

/*
#myHalfCircle {
  width: 5vw;
  height: 5vw;
  border: 1vw solid rgb(23, 143, 213);
  border-radius: 50%;
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotate(-45deg);
  position: absolute;
  top: 159.8vh;
}
*/

#myTestFade {
  border: 1px slateblue;
  height: 35vh;
  width: 35vh;
  top: 60vh;
  left: 40vw;
  position: inherit;
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
  top: 60.5vh;
  left: 11vw;
  background-color: #1c1d1d;
  z-index: 5;
}

.myBorderR1 {
  /*
  NOTE: Refactor this with myBorderL1 later
  */
  border: 2px solid;
  position: absolute;
  width: 25vw;
  right: 0vh;
  top: 55vh;
  color: #1ce9d4;
}

.myBorderR1-2 {
  /*
  NOTE: Refactor this with myBorderL1 later
  */
  border: 2px solid;
  position: absolute;
  width: 5vw;
  right: 28vw;
  top: 55vh;
  color: #1ce9d4;
}

.myBorderL1 {
  border: 2px solid;
  position: absolute;
  width: 25vw;
  left: 0vh;
  top: 55vh;
  color: #1ce9d4;
}

.myBorderL1-2 {
  border: 2px solid;
  position: absolute;
  width: 5vw;
  left: 28vw;
  top: 55vh;
  color: #1ce9d4;
}

.myBorderR2 {
  border: 2px solid;
  position: absolute;
  width: 20vw;
  right: 0vh;
  top: 59vh;
  color: #1ce97c;
}

.myBorderR2-2 {
  border: 2px solid;
  position: absolute;
  width: 5vw;
  right: 23vw;
  top: 59vh;
  color: #1ce97c;
}

.myBorderL2 {
  border: 2px solid;
  position: absolute;
  width: 20vw;
  left: 0vh;
  top: 59vh;
  color: #1ce97c;
}

.myBorderL2-2 {
  border: 2px solid;
  position: absolute;
  width: 5vw;
  left: 23vw;
  top: 59vh;
  color: #1ce97c;
}

.myBorderR3 {
  border: 2px solid;
  position: absolute;
  width: 15vw;
  right: 0vh;
  top: 63vh;
  color: #d5e91c;
}

.myBorderR3-2 {
  border: 2px solid;
  position: absolute;
  width: 5vw;
  right: 18vw;
  top: 63vh;
  color: #d5e91c;
}

.myBorderL3 {
  border: 2px solid;
  position: absolute;
  width: 15vw;
  left: 0vh;
  top: 63vh;
  color: #d5e91c;
}

.myBorderL3-2 {
  border: 2px solid;
  position: absolute;
  width: 5vw;
  left: 18vw;
  top: 63vh;
  color: #d5e91c;
}

.myBorderR4 {
  border: 2px solid;
  position: absolute;
  width: 10vw;
  right: 0vh;
  top: 67vh;
  color: #e9bd1c;
}

.myBorderR4-2 {
  border: 2px solid;
  position: absolute;
  width: 5vw;
  right: 13vw;
  top: 67vh;
  color: #e9bd1c;
}

.myBorderL4 {
  border: 2px solid;
  position: absolute;
  width: 10vw;
  left: 0vh;
  top: 67vh;
  color: #e9bd1c;
}

.myBorderL4-2 {
  border: 2px solid;
  position: absolute;
  width: 5vw;
  left: 13vw;
  top: 67vh;
  color: #e9bd1c;
}

.myBorderR5 {
  border: 2px solid;
  position: absolute;
  width: 11.5vw;
  right: 0vh;
  top: 71vh;
  color: #e94c1c;
}

.myBorderR5-2 {
  border: 2px solid;
  position: absolute;
  width: 5vw;
  right: 14.5vw;
  top: 71vh;
  color: #e94c1c;
}

.myBorderL5 {
  border: 2px solid;
  position: absolute;
  width: 11.5vw;
  left: 0vh;
  top: 71vh;
  color: #e94c1c;
}

.myBorderL5-2 {
  border: 2px solid;
  position: absolute;
  width: 5vw;
  left: 14.5vw;
  top: 71vh;
  color: #e94c1c;
}

.left-decrease-borders {
  position: absolute;
  left: 0vh;
  top: 10vh;
}

.right-decrease-borders {
  /*
    NOTE: Refactor this later
  */
  position: absolute;
  right: 0vh;
  top: 10vh;
}

.wioplay-demo {
  top: 308vh;
  left: 62vw;
  width: 50%;
  height: auto;
  position: absolute;
  z-index: 0;
  border-radius: 1.2vh;
}

.changing-texts {
  top: 72vh;
  left: 73vw;
  position: absolute;
  z-index: 0;
}

.changing-images {
    top: 93.2vh;
    left: 68.8vw;
    position: absolute;
    z-index: 0;
}

.static-image {
    border-radius: 20px;
    max-width: 30%;
    height: auto;
    border: 4px solid rgb(68, 128, 219);
}

#headerText {
    text-align: center;
}

.gradient-border-pseudo {
  position: relative;
  padding: 10px 20px;
  background: #fff;
  margin: 5px;
  border-radius: 5px;
}

.gradient-border-pseudo::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -5px;
  border-radius: inherit;
  background-image: linear-gradient(45deg, rgb(67, 172, 229), rgb(47, 23, 198));
}

.btn-1 {
  width: 26vw;
  height: 13.5vh;
  border: none;
  color:#1c1d1d;
  background-color: #e94c1c;
  border-radius: 1vw;
  box-shadow: inset 0 0 0 0 #f9e506;
  transition: ease-out 0.3s;
  font-size: 1em;
  outline: none;
  font-weight: bold;
  top: 130vh;
  left: 0vw;
  position: absolute;
}

.btn-1:hover {
  box-shadow: inset 26.3vw 0 0 0 #f9e506;
  cursor: pointer;
  color: #1100ff;
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
  background-color: #b6f8d7;
  border: 0.5vw solid #00ff77;
  position: absolute;
  z-index: 1;

  top: 138vh;
  left: 0vw;
}

.btn-2:hover {
  color:#1c1d1d;
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
  background-color: #00ff77;
}

.btn-2:hover:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
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
    font-size: 1.3em;
    color: rgb(193, 21, 178);
  }

  .changing-texts {
  width: 40%;
  height: auto;
}
}

/*
NOTE: Dynamic text tutorial
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #252839;
}
h2 {
    position: relative;
    font-size: 14vh;
    color: #252839;
    -webkit-text-stroke: 0.3vw #383d52;
}
h2::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    Left: 0;
    width: 0;
    height: 100%;
    color: #01fe87;
    -webkit-text-stroke: 0vw #383d52;
    border-right: 2px solid #01fe87;
    overflow: hidden;
    animation: animate 3s linear infinite;
}
@keyframes animate {
    0%,10%,40% {
        width: 0
    }
    100% {
        width: 100%
    }
}
*/
</style>
