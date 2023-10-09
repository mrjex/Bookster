<template>
  <div>
    <b-container>
      <h3>{{ user }}'s profile:</h3>
      <!--
      <button class="btn btn-primary btn-block your-books-button" @click.prevent="booksButton">Your Books</button>
      <button class="btn btn-primary btn-block your-progress-button" @click.prevent="progressButton">Your Progress</button>
      <button class="btn btn-primary btn-block your-reviews-button" @click.prevent="reviewsButton">Your Reviews</button>
      -->
    </b-container>

    <div id="page-background"></div>

    <div class="card-container">
      <div class="row">
        <a @click.prevent="booksButton">
          <div class="image">
            <img src="../resources/BookPic1.png">
            <div class="details">
              <h2>Your <span>Books</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices felis sed metus varius cursus vel at ipsum</p>
            </div>
          </div>
        </a>

        <a @click.prevent="progressButton">
          <div class="image">
            <img src="../resources/Linechart1.png">
            <div class="details">
              <h2>Your <span>Progress</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices felis sed metus varius cursus vel at ipsum</p>
            </div>
          </div>
        </a>

        <a @click.prevent="reviewsButton">
          <div class="image">
            <img src="../resources/Reviews1.png">
            <div class="details">
              <h2>Your <span>Reviews</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices felis sed metus varius cursus vel at ipsum</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <button class="btn btn-danger btn-block delete-account-button" v-b-modal.modal-1>Delete Account</button>
      <b-modal id="modal-1" title="Delete Account" ok-variant="danger" @ok="deleteAccount">
        <p class="my-4">This will delete your account permanently</p>
      </b-modal>
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
.blob {
  position: absolute;
  height: auto;
}

.blob0-svg {
  top: -9vh;
  left: 27vw;
  width: 55%;
  -webkit-mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 0.8) 50%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 77%,
    rgb(0 0 0 / 0) 80%
  );
  mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 0.8) 50%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 77%,
    rgb(0 0 0 / 0) 80%
  );
  z-index: -2;
}

.blob1-svg {
  top: -9vh;
  left: 14vw;
  width: 55%;
  -webkit-mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 0.8) 50%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 77%,
    rgb(0 0 0 / 0) 80%
  );
  mask-image: linear-gradient(
    rgb(0 0 0 / 0) 22%,
    rgb(0 0 0 / 0.8) 50%,
    rgb(0 0 0 / 0.3) 70%,
    rgb(0 0 0 / 0.1) 77%,
    rgb(0 0 0 / 0) 80%
  );
  z-index: -3;
}

h3 {
  color: #7dcfcb;
  font-weight: 650;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
}

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
  position: absolute;
  width: 131px;
  top: 1.2vh;
  left: 65.9vw;
  border-radius: 2vh;
  background-color: #CF7C7C;
  border: none;
}

#page-background {
  top: 0vh;
  left: 0vw;
  width: 100vw;
  height: 400vh;
  background-color: #343434;
  position: absolute;
  z-index: -10;
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

.card-container {
  margin: 30px;
  position: absolute;
  top: 7.2vh;
  left: 8.4vw;
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
  max-width: 400px;
  height: 280px;
  margin: 15px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2vh;
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
