<template>
    <div class="carousel-container">
        <v-carousel hide-delimiters show-arrows="hover" cycle>
            <router-link to="/movie/tt0434665" class="featured-inner-carousel">
                <v-carousel-item 
                src="../../public/assets/bleach.jpg"
                lazy-src="../../public/assets/rsz_bleach.jpg"
                cover
                >
                <div class="detail-carousel">
                    <h3>Bleach</h3>
                    <p>High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from Hollows.</p>
                </div>
            </v-carousel-item>
            </router-link>

            <router-link to="/movie/tt28265657" class="featured-inner-carousel">
                <v-carousel-item
                src="../../public/assets/glasses.jpg"
                lazy-src="../../public/assets/rsz_1glasses.jpg"
                cover
                >
                    <div class="detail-carousel">
                        <h3>The Girl I Like Forgot Her Glasses</h3>
                        <p>A schoolboy develops a crush on his short-sighted schoolgirl classmate. Will he get close enough for her to see his feelings?</p>
                    </div>        
                </v-carousel-item>
            </router-link>

            <router-link to="/movie/tt19869172" class="featured-inner-carousel">
                <v-carousel-item
                src="../../public/assets/mhm.jpg"
                lazy-src="../../public/assets/rsz_1mhm.jpg"
                cover
                >
                    <div class="detail-carousel">
                        <h3>Watashi no Shiawase na Kekkon</h3>
                        <p>An unhappy young woman from an abusive family is married off to a fearsome and chilly army commander. But the two learn more about each other, love may have a chance.</p>
                    </div>
                </v-carousel-item>
            </router-link>

            <router-link to="/movie/tt22868844" class="featured-inner-carousel">
                <v-carousel-item
                src="../../public/assets/blackclover.jpg"
                lazy-src="../../public/assets/rsz_blackclover.jpg"
                cover
                >
                    <div class="detail-carousel">
                        <h3>Black Clover: Sword of the Wizard King</h3>
                        <p>In a world where magic is everything, Asta, a boy who was born with no magic, aims to become the "Wizard King," to overcome adversity, prove his power, and keep his oath with his friends.</p>
                    </div>
                </v-carousel-item>
            </router-link>

        </v-carousel>
    </div>
</template>

<style lang="scss" scoped>
    .featured-inner-carousel {
        .detail-carousel {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 38%;
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

    @media only screen and (max-height: 1050px) {
        .featured-inner-carousel {
            .detail-carousel {
                bottom: 30%;
            }
        }
    }

    @media only screen and (max-width: 1860px) {
        .featured-inner-carousel {
            .detail-carousel {
                bottom: 30%;
            }
        }
    }
    
    @media only screen and (max-width: 1660px) {
        .featured-inner-carousel {
            .detail-carousel {
                bottom: 20%;
            }
        }
    }
    
    @media only screen and (max-width: 1500px) {
        .featured-inner-carousel {
            .detail-carousel {
                bottom: 10%;
            }
        }
    }

    @media only screen and (max-width: 1380px) {
        .carousel-container {
            height: 500px;
        }
    }
    
    @media only screen and (max-width: 1000px) {
        .carousel-container {
            height: 400px;
        }
    }

    @media only screen and (max-width: 785px) {
        .carousel-container {
            height: 200px; 
        }

        .detail-carousel {
            h3 {
               font-size: 14px; 
            }
            p {
                font-size: 12px;
            }
        }
    }

</style>