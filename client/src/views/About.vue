<template>
  <div>
    <img src="../resources/About-Pic-Top-Img2.png" class="hero-image">
    <h1 class="hero-title">Bookster</h1>
    <h1 class="hero-text">Where literacy becomes prosperity.</h1>

    <img src="../resources/DynamicBottomScreensTemplate.png" class="bottomTemplate">

    <a href="https://www.youtube.com/watch?v=QJtuR23a90U">
      <video autoplay muted loop class="bookster-video">
        <source src="../resources/Bookster-Video.mp4">
      </video>
    </a>

    <div class="blobs">
      <img src="../resources/blobs/blob.svg" class="blob-svg">
      <img src="../resources/blobs/blob2.svg" class="blob-svg2">
      <img src="../resources/blobs/blob3.svg" class="blob-svg3">
      <img src="../resources/blobs/blob4.svg" class="blob-svg4">
    </div>

    <!-- WHITE: card text-dark bg-light mb-3 -->
    <!-- BLACK: card text-white bg-dark mb-3 -->
  <div class="card text-white bg-dark mb-3 wioplayCard">
    <div class="card-header">
      <h4 id="trust-bookster">Why Trust Bookster?</h4>
    </div>
    <div class="card-body">
      <p class="card-text">From the creators of WioPlay: A prominent project that yields joy and happiness
        while cultivating self-love by focusing on enhancing its users' physical health
      </p>
    </div>
  </div>

    <h4 id="entrusted-project-h4">Our other entrusted project:</h4>

    <video autoplay muted loop class="wioplay-demo">
      <source src="../resources/Group 10 WioPlay Demo - Whitebars.mp4">
    </video>

    <button type="button" class="btn-2" @click.prevent="joinBooksterButton">JOIN BOOKSTER</button>
    <h1 id="transform-reading-game">Transform reading into a game.</h1>

    <div class="carousel-group">
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

          <b-carousel-slide
            caption="Performance Charts"
            text="Track your daily progress."
            img-src="https://i.ibb.co/WKPZyCS/Testlol.png"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Allocation Charts"
            text="Track your distribution of completed books."
            img-src="https://i.ibb.co/B2CvhW4/Testlol2.png">
          </b-carousel-slide>

          <b-carousel-slide
            caption="Why bother to join the game of literacy?"
            text="Reading for pleasure is the single biggest indicator of a child's future success."
            img-src="https://i.ibb.co/7JYM3QM/Carousel-Stats-Pic-Test4.png"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Why bother to join the game of literacy?"
            text="85% of self-made millionaires read two or more books per month."
            img-src="https://i.ibb.co/MNnvFg8/Carousel-Stats-Pic-Test8.png"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Why bother to join the game of literacy?"
            text="Increase your imagination and creativity."
            img-src="https://i.ibb.co/ccY0z5h/Coursel-Test-Img3-2.png"
          ></b-carousel-slide>
        </b-carousel>
      </div>
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
    },
    joinBooksterButton() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>

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

.wioplayCard {
  position: absolute;
  left: 15vw;
  width: 32vw;
  height: 15vw;
}

.top-screen-template {
  position: relative;
  top: 52.5vh;
  z-index: 1;
}

.bottomTemplate {
  position: absolute;
  top: 180vh;
  left: 0vw;
  width: 100vw;
  height: auto;
}

#transform-reading-game {
  position: absolute;
  width: 60vw;
  color: #7dcfcb;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
}

#carouselTest {
  top: 210vh;
  left: 12.5vw;
  position: relative;
  width: 75vw;
  height: auto;
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

.bookster-video {
  height: 57vh;
  width: 49vw;
  position: absolute;
  top: 80.5vh;
  left: 24vw;
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
  top: 40vh;
}

#trust-bookster {
  color: #7dcfcb;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
  font-size: 1.2vw;
}

#entrusted-project-h4 {
  position: absolute;
  top: 305vh;
  left: 56vw;
  width: 60vw;
  color: #7dcfcb;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
  font-size: 1.4vw;
}

.wioplay-demo {
  width: 40%;
  height: auto;
  z-index: 0;
  border-radius: 1.2vh;
  position: relative;
  top: 300vh;
  float: right;
  margin-right: 7vw;
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
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
  position: relative;
  text-align: center;
  top: 17vh;
}

.hero-text {
  color: #7dcfcbbc;
  font-size: clamp(1rem, 2vw + 0.25rem, 1em);
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
  position: relative;
  text-align: center;
  top: 21vh;
}

.hero-image {
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(black, transparent);
  position: absolute;
  top: 0vh;
  left: 0vw;
  width: 100%;
  height: auto;
}

.about-img-card {
  position: absolute;
  top: 0vh;
  left: 0vw;
  z-index: 5;
  width: 100%;
  height: auto;
}

.carousel-group {
  position: absolute;
  left: 0vw;
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

  .carousel-group {
    top: -19vh;
  }

  #transform-reading-game {
    top: 185.7vh;
    left: 34vw;
    font-size: 1.85vw;
  }

  .wioplay-demo {
    top: 218vh;
    left: -17vw;
  }

  #entrusted-project-h4 {
    top: 225vh;
    left: 37.5vw;
  }

  .wioplayCard {
    top: 224vh;
    display: none;
  }

  .blobs {
    display: none;
  }
}

@media (max-width: 415px) {
  .changing-images {
    width: 10%;
    height: auto;
  }

  .carousel-group {
    top: -19vh;
  }

  #transform-reading-game {
    top: 185.7vh;
    left: 34vw;
    font-size: 1.85vw;
  }

  .wioplay-demo {
    top: 202vh;
    left: -17vw;
  }

  #entrusted-project-h4 {
    top: 208.9vh;
    left: 40vw;
  }

  .wioplayCard {
    top: 224vh;
    display: none;
  }

  .blobs {
    display: none;
  }
}

@media (max-width: 377px) {
  .changing-images {
    width: 10%;
    height: auto;
  }

  .carousel-group {
    top: -19vh;
  }

  #transform-reading-game {
    top: 185.7vh;
    left: 34vw;
    font-size: 1.85vw;
  }

  .wioplay-demo {
    top: 205vh;
    left: -17vw;
  }

  #entrusted-project-h4 {
    top: 214.4vh;
    left: 40vw;
  }

  .wioplayCard {
    top: 224vh;
    display: none;
  }

  .blobs {
    display: none;
  }
}

@media (max-width: 363px) {
  .changing-images {
    width: 10%;
    height: auto;
  }

  .carousel-group {
    top: -19vh;
  }

  #transform-reading-game {
    top: 185.7vh;
    left: 34vw;
    font-size: 1.85vw;
  }

  .wioplay-demo {
    top: 199.5vh;
    left: -17vw;
  }

  #entrusted-project-h4 {
    top: 210vh;
    left: 40vw;
  }

  .wioplayCard {
    top: 224vh;
    display: none;
  }

  .blobs {
    display: none;
  }
}

@media (max-width: 285px) {
  .changing-images {
    width: 10%;
    height: auto;
  }

  .carousel-group {
    top: -19vh;
  }

  #transform-reading-game {
    top: 185.7vh;
    left: 34vw;
    font-size: 1.85vw;
  }

  .wioplay-demo {
    top: 195vh;
    left: -17vw;
  }

  #entrusted-project-h4 {
    top: 207.5vh;
    left: 40vw;
  }

  .wioplayCard {
    top: 224vh;
    display: none;
  }

  .blobs {
    display: none;
  }
}

@media (min-width: 576px) {
  .changing-images {
    width: 15%;
    height: auto;
  }

  .carousel-group {
    top: -15vh;
  }

  #transform-reading-game {
    top: 188vh;
    left: 35vw;
    font-size: 1.7vw;
  }

  .wioplay-demo {
    top: 238vh;
    left: -12vw;
  }

  #entrusted-project-h4 {
    top: 245vh;
    left: 38.5vw;
  }

  .wioplayCard {
    top: 240vh;
    display: none;
  }

  .blobs {
    display: none;
  }
}

@media (min-width: 768px) {
  .changing-images {
    width: 20%;
    height: auto;
  }

  .carousel-group {
    top: -10.5vh;
  }

  #transform-reading-game {
    top: 189.5vh;
    left: 35.5vw;
    font-size: 1.7vw;
  }

  .wioplay-demo {
    top: 261vh;
    left: -12vw;
  }

  #entrusted-project-h4 {
    top: 267vh;
    left: 41.2vw;
  }

  .wioplayCard {
    top: 260vh;
    display: none;
  }

  .blobs {
    display: none;
  }
}

@media (min-width: 992px) {
  .changing-images {
    width: 25%;
    height: auto;
  }

  .carousel-group {
    top: -6vh;
  }

  #transform-reading-game {
    top: 191.5vh;
    left: 35vw;
    font-size: 1.6vw;
  }

  .wioplay-demo {
    top: 278vh;
  }

  #entrusted-project-h4 {
    top: 284vh;
    left: 40vw;
  }

  .wioplayCard {
    top: 278vh;
    display: none;
  }

  .blobs {
    display: block;
  }
}

@media (min-width: 1200px) {
  .changing-images {
    width: 30%;
    height: auto;
  }

  .carousel-group {
    top: -3vh;
  }

  #transform-reading-game {
    top: 195.5vh;
    left: 38vw;
    font-size: 1.4vw;
  }

  .wioplay-demo {
    top: 297vh;
  }

  #entrusted-project-h4 {
    top: 302vh;
    left: 40.5vw;
  }

  .wioplayCard {
    top: 297vh;
    display: none;
  }

  .blobs {
    display: block;
  }
}

@media (min-width: 1400px) {
  .changing-images {
    width: 25%;
    height: auto;
  }

  .changing-texts {
    width: 40%;
    height: auto;
  }

  .carousel-group {
    top: 0vh;
  }

  #transform-reading-game {
    top: 197vh;
    left: 37vw;
    font-size: 1.4vw;
  }

  .wioplay-demo {
    top: 308vh;
    left: 5vw;
  }

  #entrusted-project-h4 {
    top: 313vh;
    left: 58vw;
  }

  .wioplayCard {
    top: 318vh;
    display: block;
  }

  .blobs {
    display: block;
  }
}
</style>
