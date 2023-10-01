<template>
  <div>
    <h4 id="headerText">ABOUT US</h4>
    <img src="../resources/Bookster-AboutPage-Picture.jpg" class="first-img">
    <h4>The website serves as a habitual performance tracker that enlightens the user’s perception about book-reading as a whole. It transforms the stereotypical view of reading as boring into an exciting virtuous cycle, to a game where you can “level up” by viewing your hard earned progress.</h4>
    <div id="second-img-div">
      <img src="../resources/BooksterPic2.jpg" class="second-img">
    </div>
    <h4>Transform reading into a game.</h4>

    <div class="myBorder"></div>
    <h4>Our other entrusted projects:</h4>
    <div id="myBox1"></div>
    <div id="myBox2"></div>

    <video autoplay muted loop class="changing-texts">
      <source src="../resources/Bookster-AboutPage-Texts.mp4">
    </video>

    <div id="change-image-box">
      <video autoplay muted loop class="changing-images">
        <source src="../resources/Bookster-AboutPage-ChangingImages.mp4">
      </video>
    </div>
  </div>
</template>

<script>
// import UtilsComponent from '../components/UtilsComponent.vue'
export default {
  name: 'About',
  created() {
  }
}
</script>

<style scoped>
h4 {
  color: rgb(49, 78, 206);
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
  top: 900px;
  left: 780px;
}

.changing-images {
    width: 35%;
    height: 50%;
    position: absolute;
    top: 400px;
    left: 780px;
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
    top: 300px;
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
