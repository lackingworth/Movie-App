<template>
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

    onBeforeMount(() => {
      fetch(`https://www.omdbapi.com/?apikey=${env.api_key}&i=${route.params.id}&plot=full`)
        .then(response => response.json())
        .then(data => {
          movie.value = data;
        });
    });

    return {
      movie
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