<template>

  <div class="home">

    <div class="feature-card">
      <form @submit.prevent="searchMovies()" class="search-box">
        <input type="text" placeholder="Search..." v-model="search">
        <input type="submit" value="Search">
      </form>
      <Carousel />
    </div>

    <LazyList v-if="loading" />

    <div class="error" v-if="error !=null">
      <h1>Sorry, can't get relevant data. <br> {{ error }}</h1>
    </div>

    <div class="movies-list" v-if="(!loading && !error)">

      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Poster">
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
      
    </div>

  </div>

</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import env from '@/env.js';
import Carousel from '@/components/Carousel.vue'
import LazyList from '@/components/LazyList.vue'

const search = ref('');
const movies = ref([]);
let loading = ref(false);
const error = ref(null);

const searchMovies = async () => {
  try {
    if (search.value != "") {
      loading.value = true;
      const res = await fetch(`https://www.omdbapi.com/?apikey=${env.api_key}&s=${search.value}`);
      if (res.ok) {
        await res.json()
          .then(data => {
            loading.value = false;
            movies.value = data.Search;
            search.value = "";
          });
      } else {
          loading.value = false;
          throw new Error ('Request failed');
      }
    }
  } catch(err) {
    error.value = err;
    console.log(err);
  }
};

onBeforeMount(async () => {
  const films = ['avatar', 'superman', 'batman', 'bleach', 'naruto', 'avengers']
  const randFilm = Math.floor(Math.random() * films.length);
      
  try {
    loading.value = true;
    const res = await fetch(`https://www.omdbapi.com/?apikey=${env.api_key}&s=${films[randFilm]}`);
    if(res.ok) {
      await res.json()
        .then(data => {
          loading.value = false;
          movies.value = data.Search;
          search.value = "";
        });
    } else {
        loading.value = false;
        throw new Error ('Request failed');
      };
        
  } catch(err) {
      error.value = err;
      console.log(err);
  }
})

</script>

<style lang="scss">
  .home {
    .feature-card {
      position: relative;

      .featured-img {
        display: block;
        width: 100%;
        height: 500px;
        object-fit: cover;

        position: relative;
        z-index: 0;
      }

      .featured-inner {
        transition: 0.3s;
      }

      .featured-inner:hover {
        opacity: 0.8;
      }

      .detail {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 16px;
        z-index: 1;

        h3 {
          color:#FFF;
          margin-bottom: 16px;
        }

        p {
          color: #FFF;
          text-align: left;
        }
      }
    }

    .error {
      h1 {
        font-weight: normal;
        text-align: center;
        margin: auto;
        color:#ad2828c5;
        background-color: #aaa5a58e;
        width: 50vw;
        min-width: 350px;
        padding: 10px;
      }
    }

    ::placeholder {
      opacity: 0.3;
    }

    .search-box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;

      input {
        display: block;
        appearance: none;
        border: none;
        outline: none;
        background: none;

        &[type="text"] {
          width: 100%;
          color: #FFF;
          background-color: #496583;
          font-size: 20px;
          padding: 10px 16px;
          border-radius: 8px 0px 0px 0px;
          margin-bottom: 1px;
          transition: 0.4s;

          &::placeholder {
            color: #f3f3f3;
          }

          &:hover {
            background-color: #537497;
          }

          &:focus {
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
          }
        }

        &[type="submit"] {
          width: 100%;
          max-width: 150px;
          background-color: #42B883;
          padding: 10px 16px;
          margin-bottom: 1px;
          border-radius: 0px 8px 8px 0px;
          color: #FFF;
          font-size: 20px;
          text-transform: uppercase;
          transition: 0.4s;
          cursor: pointer;

          &:hover {
            background-color: #4edb9c;
          }

          &:active {
            background-color: #3B8070;
          }
        }
      }
    }

    .movies-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0px 8px;

      .movie:hover {
        opacity: 0.3;
      }

      .movie {
        max-width: 12%;
        flex: 1 1 50%;
        padding: 16px 8px;
        transition: 0.4s;
        
        .movie-link {
          display: flex;
          flex-direction: column;
          height: 100%;

          .product-image {
            position: relative;
            display: block;

            img {
              display: block;
              width: 100%;
              height: 275px;
              object-fit: cover;
            }

            .type {
              position: absolute;
              padding: 8px 16px;
              background-color: #42B883;
              color: #FFF;
              bottom: 16px;
              left: 0px;
              text-transform: capitalize;
            }
          }

          .detail {
            background-color: #496583;
            padding: 16px 8px;
            flex: 1 1 100%;
            border-radius: 0px 0px 8px 8px;

            .year {
              color: #AAA;
              font-size: 14px;
            }

            h3 {
              color: #FFF;
              font-weight: 600;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  .loader {
    margin: auto;
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #000203; 
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
  }

  .loading {
    margin: 12px;
    text-align: center;
    color: #FFF;
    font-size: 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media only screen and (max-width: 1360px) {
     .home{ 
      .movies-list {
        .movie {
          max-width: 20%;
          flex: 1 1 50%;
          padding: 16px 8px;
        }
      }
    }
  }

  @media only screen and (max-width: 785px) {
    .featured-img {
        height: 300px !important;
    }

    .detail {
        font-size: 14px !important;
        z-index: 1;

        p {
          font-size: 13px !important;
        }
    }

    .movie {
        max-width: 50% !important;
    }
  }

</style>
