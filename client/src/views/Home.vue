<template>
  <div>
    <b-container>
      <Search />
      <Trending />
    </b-container>
  </div>
</template>

<style>
.video-container {
  position: relative;
}

.video-container video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
}

.video-container .caption {
  z-index: 1;
  position: relative;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 10px #000000;
}

.video-container .subtitle {
  z-index: 1;
  position: relative;
  text-align: center;
  color: white;
}

.main-bg {
  z-index: -1000;
  left: 50%;
  width: 100%;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  object-fit: cover;
}
</style>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Search from './Search.vue'
import UtilsComponent from '../components/UtilsComponent.vue'
import Trending from '../components/Trending.vue'

export default {
  name: 'Home',
  created() {
    UtilsComponent.methods.refreshPage()
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then((response) => {
          this.message = response.data.message
        })
        .catch((error) => {
          this.message = error
        })
    }
  },
  components: { Search, Trending }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
