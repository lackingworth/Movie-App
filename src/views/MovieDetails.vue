<template>

  <div class="movie-details" v-if="loading">
    <div class="loader"></div>
    <div class="loading">Loading...</div>   
  </div>
  
  <div class="movie-details" v-if="!loading">
    <h2>{{movie.Title}}</h2>
     <p>{{ movie.Year }}</p>
     <div class="img-container">
      <v-img
        class="featured-img"
        width="400"
        :src="movie.Poster"
        lazy-src="../../public/assets/rsz_lazy.jpg"
        alt="Movie Poster"
        cover>
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate>
            </v-progress-circular>
          </div>
        </template>
      </v-img>
    </div>
     <p>{{ movie.Plot }}</p>
   </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';

const movie = ref({});
const route = useRoute();
const loading = ref(false);
const error = ref(null);

onBeforeMount(async () => {
  try {
    loading.value = true;
    const res = await fetch(`https://www.omdbapi.com/?apikey=${env.api_key}&i=${route.params.id}&plot=full`);
    if(res.ok) {
      await res.json()
        .then (data => {
          loading.value = false;
          movie.value = data;
        });
    } else {
        loading.value = false;
        throw new Error ('Request failed');
    }
  } catch (err) {
    error.value = err;
    console.log(err);
  }
});
</script>

<style lang="scss">

  .movie-details {
    padding: 16px;
    margin: auto;
    width: 50%;
    background-color: #5e57573f;
  }

  h2 {
     color: #FFF;
     font-size: 28px;
     font-weight: 600;
     margin-bottom: 16px;
     text-align: center;
  }

  .featured-img {
    display: flex;
    margin: auto;    
    margin-bottom: 16px;
  }

  p {
    color: #ffffff;
    font-size: 18px;
    line-height: 1.4;
    text-align: center;
  }

</style>