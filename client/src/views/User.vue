<template>
  <div>
    <b-container>
      <h3 id="username-display">{{ user }}'s profile:</h3>
    </b-container>

    <img src="../resources/blobs/UserVueBlob3.svg" class="blob blob1-svg">
    <img src="../resources/blobs/UserVueBlob4.svg" class="blob blob2-svg">
    <img src="../resources/blobs/UserVueBlob5.svg" class="blob blob3-svg">

    <div class="card-container fluid">
      <b-row class="row">
        <b-col>
          <a @click.prevent="booksButton">
            <div class="image">
              <img src="../resources/dashboard/BookButton.png">
              <div class="details">
                <h2><span>Books</span></h2>
                <p>Your acquired books</p>
              </div>
            </div>
          </a>
        </b-col>
        <b-col>
          <a @click.prevent="progressButton">
            <div class="image">
              <img src="../resources/dashboard/ChartButton.png">
              <div class="details">
                <h2><span>Progress</span></h2>
                <p>Your statistical monitoring</p>
              </div>
            </div>
          </a>
        </b-col>
        <b-col>
          <a @click.prevent="reviewsButton">
            <div class="image">
              <img src="../resources/dashboard/ReviewsButton.png">
              <div class="details">
                <h2><span>Reviews</span></h2>
                <p>Your take on acquired books</p>
              </div>
            </div>
          </a>
        </b-col>
        <b-col>
          <a @click.prevent="profileButton">
            <div class="image">
              <img src="../resources/dashboard/ProfileButton.png">
              <div class="details">
                <h2><span>Profile</span></h2>
                <p>Your personal data</p>
              </div>
            </div>
          </a>
        </b-col>
      </b-row>
    </div>

    <b-modal id="modal-1" title="Delete Account" ok-variant="danger" @ok="deleteAccount">
      <p class="my-4">This will delete your account permanently</p>
    </b-modal>
  </div>
</template>

<script>
import UtilsComponent from '../components/UtilsComponent.vue'
// import { BIconBook } from 'bootstrap-vue'

import { Api } from '../Api'
export default {
  name: 'User',
  inject: ['user'],
  data() {
    return {
      username: '',
      password: '',
      age: '',
      password_confirm: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push(`/users/${this.user}`)
    },
    booksButton() {
      this.$router.push(`${this.$route.path}/books`) //
    },
    reviewsButton() {
      this.$router.push(`${this.$route.path}/reviews`)
    },
    profileButton() {
      this.$router.push(`${this.$route.path}/profile`)
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
  },
  components: {
    // BIconBook
  }
}
</script>

<style scoped>
.details>p {
  color: #CCCF7C;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
}

.details>h2 {
  color: #CF937C;
  text-shadow: rgb(0, 0, 0) 0.3vw 0 0.5vw;
}

.blob {
  position: absolute;
  height: auto;
}

.blob0-svg {
  top: -18vh;
  left: 42vw;
  width: 45%;
  -webkit-mask-image: linear-gradient(rgb(0 0 0 / 0) 15%,
      rgb(0 0 0 / 0.8) 50%,
      rgb(0 0 0 / 0.4) 64%,
      rgb(0 0 0 / 0.1) 83%,
      rgb(0 0 0 / 0) 90%);
  mask-image: linear-gradient(rgb(0 0 0 / 0) 22%,
      rgb(0 0 0 / 0.8) 50%,
      rgb(0 0 0 / 0.3) 70%,
      rgb(0 0 0 / 0.1) 77%,
      rgb(0 0 0 / 0) 80%);
  z-index: -2;
}

.blob1-svg {
  top: -16vh;
  left: 8vw;
  width: 45%;
  /*
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
  */
  z-index: -3;
}

.blob2-svg {
  top: -16vh;
  left: 41vw;
  width: 45%;
  /*
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
  */
  z-index: -3;
}

.blob3-svg {
  top: 28vh;
  left: 27vw;
  width: 45%;
  /*
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
  */
  z-index: -4;
}

h3 {
  color: #fff;
  /* #7dcfcb */
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
  border-radius: 2vh;
  background-color: #CF7C7C;
  border: none;
}

/*
 NOTE: The  majority of the styling below shall be credited to https://www.youtube.com/watch?v=E2TW4ZxXrsI
*/

/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

.details {
  background-color: rgba(134, 134, 134, 0);
}

/* .card-container {
  margin: 30px;
  position: absolute;
  top: 7.2vh;
  left: 8.4vw;
} */

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
  opacity: 0.8;
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
  .blob {
    display: none;
  }
}

/* @media (max-width: 615px) {
  .card-container {
    left: 1.4vw;
  }
} */

@media (max-width: 400px) {
  .image .details p {
    font-size: 16px;
  }

  /* .card-container {
    left: 0vw;
  } */
}
</style>
