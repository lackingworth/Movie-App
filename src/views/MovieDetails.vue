<template>
    <div class="loader" v-if="loading"></div>
    <div class="loading" v-if="loading">Loading...</div>
    <div class="movie-details">
      <h2>{{movie.Title}}</h2>
      <p>{{ movie.Year }}</p>
      <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
      <p>{{ movie.Plot }}</p>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';

export default {
  
  setup () {
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
        }
        throw new Error ('Request failed');
      } catch (err) {
        error.value = err;
        console.log(err);
      }
    });

    return {
      movie,
      loading,
      error
    }
  }
}

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