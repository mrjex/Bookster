<template>
  <div>
    <b-container>

      <h3>This is your profile, {{ user }}</h3>
      <button class="btn btn-primary btn-block your-books-button" @click.prevent="booksButton">Your Books</button>
      <button class="btn btn-primary btn-block your-progress-button" @click.prevent="progressButton">Your Progress</button>
      <button class="btn btn-primary btn-block your-reviews-button" @click.prevent="reviewsButton">Your Reviews</button>
      <button class="btn btn-danger btn-block delete-account-button" v-b-modal.modal-1>Delete Account</button>

      <b-modal id="modal-1" title="Delete Account" ok-variant="danger" @ok="deleteAccount">
        <p class="my-4">This will delete your account permanently</p>
      </b-modal>

    </b-container>

    <div id="page-background"></div>

    <div class="container">

      <div class="row">
        <div class="image">
          <img src="../resources/BookPic1.png" alt="yo">
          <div class="details">
            <h2>Your <span>Books</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices felis sed metus varius cursus vel at ipsum</p>
            <div class="more">
              <a href="#" class="read-more">Read <span>More</span></a>
            </div>
          </div>
        </div>

        <div class="image">
          <img src="../resources/Linechart1.png" alt="yo">
          <div class="details">
            <h2>Your <span>Progress</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices felis sed metus varius cursus vel at ipsum</p>
            <div class="more">
              <a href="#" class="read-more">Read <span>More</span></a>
            </div>
          </div>
        </div>

        <div class="image">
          <img src="../resources/Reviews1.png" alt="yo">
          <div class="details">
            <h2>Your <span>Reviews</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices felis sed metus varius cursus vel at ipsum</p>
            <div class="more">
              <a href="#" class="read-more">Read <span>More</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsComponent from '../components/UtilsComponent.vue'
import { Api } from '../Api'
export default {
  name: 'User',
  inject: ['user'],
  methods: {
    handleSubmit() {
      this.$router.push(`/users/${this.user}`)
    },
    booksButton() {
      this.$router.push(`${this.$route.path}/books`)
    },
    reviewsButton() {
      this.$router.push(`${this.$route.path}/reviews`)
    },
    progressButton() {
      UtilsComponent.methods.setRefreshablePageState()
      this.$router.push(`${this.$route.path}/progress`)
    },
    async deleteAccount() {
      await Api.delete(`/users/${this.user}`)
      localStorage.removeItem('logged-in-username')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.your-books-button {
  border: none;
  position: relative;
  /*
  width: 60vw;
  height: 40vh;
  */
  width: 540px;
  height: 280px;
  left: 18vw;
  border-radius: 2vh;
  background-image: url("https://i.ibb.co/KrC2xtV/BookPic4.png");
  /*
  1.       https://i.ibb.co/crD6NXR/Untitled-1.png
  2.       https://i.ibb.co/NrzBM1d/BookPic2.png
  3.       https://i.ibb.co/vV5ZVYb/BookPic3.png
  4.       https://i.ibb.co/KrC2xtV/BookPic4.png
  */
}

.your-progress-button {
  border: none;
  position: relative;
  /*
  width: 60vw;
  height: 40vh;
  */
  width: 540px;
  height: 280px;
  left: 18vw;
  border-radius: 2vh;
  background-image: url("https://i.ibb.co/x3GNf5H/Linechart1.png");
  /*
  1.       Link here
  2.       Link here
  3.       Link here
  4.       Link here
  5.       Link here
  */
}

.your-reviews-button {
  border: none;
  position: relative;
  /*
  width: 60vw;
  height: 40vh;
  */
  width: 540px;
  height: 280px;
  left: 18vw;
  background-image: url("https://i.ibb.co/yd6kNLj/Reviews.png");
  border-radius: 2vh;
}

.delete-account-button {
  position: relative;
  width: 35.2vw;
  left: 17.9vw;
  border-radius: 2vh;
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

/*
 NOTE: The  majority of the styling below shall be credited to https://www.youtube.com/watch?v=E2TW4ZxXrsI
*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.details {
  background-color: rgba(134, 134, 134, 0);
}

.container {
  margin: 30px;
}

.row {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.image {
  background: #d5808000;
  position: relative;
  flex: 1;
  max-width: 540px;
  height: 280px;
  margin: 20px;
  overflow: hidden;
}

.image img {
  opacity: 0.6;
  position: relative;
  vertical-align: top;
  transition: 0.6s;
  transition-property: opacity;
}

.image:hover img {
  opacity: 1;
}

.image .details {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  width: 100%;
  height: 100%;
}

.image .details h2 {
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 300;
  margin-top: 70px;
  transition: 0.4s;
  transition-property: transform;
}

.image .details h2 span {
  font-weight: 900;
}

.image:hover .details h2 {
  transform: translateY(-30px);
}

.image .details p {
  margin: 30px 30px 0 30px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  opacity: 0;
  transition: 0.6s;
  transition-property: opacity, transform;
}

.image:hover .details p {
  opacity: 1;
  transform: translateY(-40px);
}

/*
12:10 - 15:30
.more {
}
*/

@media (max-width: 1080px) {
  .image {
    flex: 100%;
    max-width: 540px;
  }
}

@media (max-width: 400px) {
  .image .details p {
    font-size: 16px;
  }
}
</style>
