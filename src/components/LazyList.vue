<template>
    <div class="movies-list">
        <div class="movie" v-for="n in 8" :key="n">
            <div class="product-image">
                <v-img
                    class="featured-img"
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
        </div>
    </div>
</template>