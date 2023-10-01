<template>
  <div>
    <h4 id="headerText">ABOUT US</h4>
    <img src="../resources/Bookster-AboutPage-Picture.jpg" class="first-img static-image">
    <h4>The website serves as a habitual performance tracker that enlightens the user’s perception about book-reading as a whole. It transforms the stereotypical view of reading as boring into an exciting virtuous cycle, to a game where you can “level up” by viewing your hard earned progress.</h4>
    <div id="second-img-div">
      <img src="../resources/BooksterPic2.jpg" class="second-img static-image">
    </div>

    <img src="../resources/TestFrontEnd2.png" class="testFrontEnd">
    <h4 id="transform-reading-game-h4" class="feature-text">Transform reading into a game.</h4>

    <!-- Design Borders -->
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

    <!-- Design Shapes -->
    <h4 id="entrusted-project-h4">Our other entrusted projects:</h4>
    <div id="myBox1"></div>
    <div id="myBox2"></div>
    <div id="myCircle"></div>
    <div id="myCircle2"></div>
    <div id="myHalfCircle"></div>

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

    <button type="button" class="gradient-border-pseudo" id="join-bookster-button">Join Bookster</button>
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

        <!-- Slides with custom text -->
        <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58">
          <h1>Why even bother to join the game of literacy?</h1>
          <h1>* Reading for pleasure is the single biggest indicator of a child's future success</h1>
          <h1>* 85% of self-made millionaires read two or more books per month</h1>
          <h1>* Increase your imagination and creativity</h1>
          <h1>* Improve your communication skills</h1>
          <h1>* Expand your view of the world</h1>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
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

.testFrontEnd {
  position: absolute;
}

#transform-reading-game-h4 {
  position: absolute;
  top: 58vh;
  left: 39vw;
  font-weight: 900;
}

#carouselTest {
  position: relative;
  top: 35vh;
  left: 11.5vw;
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
  top: 1770px;
  left: 500px;
}

#myCircle {
    background-color:#ffffff;
    border:5vh solid rgb(21, 221, 171);
    height:15vh;
    width:15vh;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    position: absolute;
    top: 283vh;
}

#myCircle2 {
    background-color:#ffffff;
    border:2vh solid rgb(31, 221, 21);
    height:7vh;
    width:7vh;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    position: absolute;
    top: 283vh;
}

#myHalfCircle {
  width: 5vw;
  height: 5vw;
  border: 1vw solid rgb(23, 143, 213);
  border-radius: 50%;
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotate(-45deg);
  position: absolute;
  top: 259.8vh;
}

#myBox1 {
  border: 1px slateblue;
  height: 35vh;
  width: 35vh;
  background-color: aquamarine;
  position: absolute;
  top: 280vh;
  left: 0vw;
}

#myBox2 {
  border: 3px slateblue;
  height: 13vh;
  width: 13vh;
  position: absolute;
  top: 265vh;
  left: 0vw;
  background-color: rgb(127, 255, 136);
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
  top: 300vh;
  width: 50%;
  height: auto;
  position: absolute;
}

.changing-texts {
  top: 40vh;
  left: 60vw;
  position: absolute;
  width: 50%;
  height: auto;
}

.changing-images {
    top: 40vh;
    left: 80vw;
    position: absolute;
    width: 35%;
    height: auto;
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

.first-img {
    float: left;
    transform: rotate(-8deg);
}

.second-img {
    transform: rotate(15deg);
    position: relative;
    top: 325vh;
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

#join-bookster-button {
  top: 40vh;
  left: 40vw;
  width: 10%;
  height: auto;
  position: absolute;
  /*
  NOTE: Fix rem/em for font-size to attain responsiveness
  */
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
    width: 35%;
    height: auto;
  }

   h4 {
    font-size: 1.3em;
    color: rgb(193, 21, 178);
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
