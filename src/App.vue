<template>
  <header>
    <router-link to="/">
      <h1><span>Vue</span>Movies</h1>
    </router-link>
  </header>
  <main>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;

    &::selection {
      background: transparentize($color: #42B883, $amount: 0.5);
    }
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #666;
  }

  body {
    background-color: #35495E;
  }

  a {
    text-decoration: none;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    background-color: #2C3D4E;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

    h1 {
      color: #FFF;
      font-size: 28px;

      span {
        color: #42B883;
      }
    }
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease-out;
  }

</style>
