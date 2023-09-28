<template>
  <div>
    <h4 id="headerText">ABOUT US</h4>
    <img src="../resources/Bookster-AboutPage-Picture.jpg" class="first-img">
    <h4>The website serves as a habitual performance tracker that enlightens the user’s perception about book-reading as a whole. It transforms the stereotypical view of reading as boring into an exciting virtuous cycle, to a game where you can “level up” by viewing your hard earned progress.</h4>
    <img src="../resources/BooksterPic2.jpg" class="second-img">
    <h4>Transform reading into a game.</h4>
    <h4>Our other entrusted projects:</h4>

    <!-- IMAGE CHANGERS -->
    <!--
    <img src="../resources/imageChanger/Bookster-AboutPage2.jpg" class="0">
    <img src="../resources/imageChanger/Bookster-Pic3.jpg" class="1">
    <img src="../resources/imageChanger/Bookster-Pic4.jpg" class="2">
    <img src="../resources/imageChanger/Bookster-Pic5.png" class="3">
    <img src="../resources/imageChanger/Bookster-Pic6.jpg" class="4">
    -->

    <!--
    <img v-bind:src="switchingImage">
    <h4>{{switchingImage}}</h4>
    <img src="../resources/imageChanger/Bookster-Pic3.jpg">
    <img :src="switchingImage" style="width:100%;" alt="">
    <img :src="switchingImage">
    -->
  </div>
</template>

<script>
// import UtilsComponent from '../components/UtilsComponent.vue'
export default {
  name: 'About',
  created() {
    // document.getElementById('changingImage').src = 'Bookster-AboutPage2.jpg'
    // UtilsComponent.methods.setImageChanger() // Add '../resources/imageChanger/' if not working
    // const image = document.getElementsByTagName('image')
    // image.src = '../resources/imageChanger/Bookster-Pic5.png'
    // document.getElementsByTagName('image').src = '../resources/imageChanger/Bookster-Pic5.png'
    // console.warn(image)
    // console.warn(document)
    // const images = ['../resources/imageChanger/Bookster-AboutPage2.jpg', '../resources/imageChanger/Bookster-Pic3.jpg', '../resources/imageChanger/Bookster-Pic4.jpg', '../resources/imageChanger/Bookster-Pic5.png', '../resources/imageChanger/Bookster-Pic6.jpg']
    /*
    setInterval(function () {
      const random = Math.floor(Math.random() * 4) // Is 4 a must or images.length?
      // console.warn(image.src)
      // image.src = images[random]
      // document.getElementsByTagName('image').src = image.src
      // console.warn('yo')
      // document.getElementsByTagName('image').src = '../resources/imageChanger/Bookster-AboutPage2.jpg'
      // this.switchingImage = images[random]
      this.currentImageState = random
      // console.warn(this.currentImageState)
    }, 800)
    */
  }
  /*
  data() {
    return {
      switchingImage: '../resources/imageChanger/Bookster-AboutPage2.jpg',
      currentImageState: 3
    }
  }
  */
}
</script>

<style scoped>
.imageChanger {
    display: block;
    width: 800px;
    margin: 0 auto;
    transition: 0.3s;
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
    float: right;
    transform: rotate(15deg);
    object-position: inherit;
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
