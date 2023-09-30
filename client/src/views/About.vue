<template>
  <div>
    <h4 id="headerText">ABOUT US</h4>
    <img src="../resources/Bookster-AboutPage-Picture.jpg" class="first-img static-image">
    <h4>The website serves as a habitual performance tracker that enlightens the user’s perception about book-reading as a whole. It transforms the stereotypical view of reading as boring into an exciting virtuous cycle, to a game where you can “level up” by viewing your hard earned progress.</h4>
    <div id="second-img-div">
      <img src="../resources/BooksterPic2.jpg" class="second-img static-image">
    </div>
    <h4 id="transform-reading-game-h4" class="feature-text">Transform reading into a game. (section with pictures of our charts)</h4>
    <h4 id="articles">Interesting articles: correlation between reading, literacy, success, happiness and fullfillment</h4>

    <div class="myBorder"></div>
    <h4 id="entrusted-project-h4">Our other entrusted projects:</h4>
    <div id="myBox1"></div>
    <div id="myBox2"></div>

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

    <button type="button" class="btn btn-primary" id="join-bookster-button">Join Bookster</button>
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
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

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

      <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>
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
  color: rgb(49, 78, 206);
}

#articles {
  position: absolute;
  top: 880px;
  left: 500px;
}

#transform-reading-game-h4 {
  position: absolute;
  top: 800px;
  left: 500px;
}

#book-api-h4 {
  position: absolute;
  top: 840px;
  left: 500px;
}

#join-bookster-button {
  position: absolute;
  top: 250px;
  left: 700px;
}

#entrusted-project-h4 {
  position: absolute;
  top: 1100px;
  left: 500px;
}

#myBox1 {
  border: 1px slateblue;
  height: 300px;
  width: 300px;
  background-color: aquamarine;
  position: absolute;
  top: 800px;
  left: 0px
}

#myBox2 {
  border: 3px slateblue;
  height: 100px;
  width: 100px;
  position: absolute;
  top: 600px;
  left: 0px;
  background-color: rgb(127, 255, 136);
}

.myBorder {
  border: 2px solid;
}

.wioplay-demo {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 800px;
  left: 900px;
}

.changing-texts {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 290px;
  left: 900px;
}

.changing-images {
    width: 35%;
    height: 50%;
    position: absolute;
    top: 330px;
    left: 1220px;
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
    top: 2000px;
    /*
    right: 0px;
    position: absolute;
    top: 1000px;
    right: 0px;
    */
}

#carouselTest {
  position: relative;
  top: 800px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
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
