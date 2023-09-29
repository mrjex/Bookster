<template>
  <div>
    <h4 id="headerText">ABOUT US</h4>
    <img src="../resources/Bookster-AboutPage-Picture.jpg" class="first-img">
    <h4>The website serves as a habitual performance tracker that enlightens the user’s perception about book-reading as a whole. It transforms the stereotypical view of reading as boring into an exciting virtuous cycle, to a game where you can “level up” by viewing your hard earned progress.</h4>
    <div id="second-img-div">
      <img src="../resources/BooksterPic2.jpg" class="second-img">
    </div>
    <h4 id="transform-reading-game-h4" class="feature-text">Transform reading into a game. (section with pictures of our charts)</h4>
    <h4 id="book-api-h4" class="feature-text">Expand your interest (section with pictures of Book-API)</h4>
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

    <button type="button" class="btn btn-primary" id="join-bookster-button">Join Bookster</button>
  </div>
</template>

<script>
// import UtilsComponent from '../components/UtilsComponent.vue'
export default {
  name: 'About',
  created() {
    console.warn(localStorage.getItem('refresh-state'))
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

img {
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
    position: absolute;
    top: 1000px;
    right: 0px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
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
</style>
